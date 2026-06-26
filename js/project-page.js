function getProjectSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('p') || params.get('projet') || '';
}

function encodeImagePath(path) {
  return path.split('/').map(encodeURIComponent).join('/');
}

function imageUrl(basePath, index) {
  const full = `${basePath}${String(index).padStart(2, '0')}.jpeg`;
  return full.split('/').map(encodeURIComponent).join('/');
}

function initCarousel(container, { basePath, count, label, brochure = false }) {
  const track = container.querySelector('.preview-carousel-track');
  const dotsContainer = container.querySelector('.preview-carousel-dots');
  const counter = container.querySelector('.preview-carousel-counter');
  const prevBtn = container.querySelector('[data-carousel-prev]');
  const nextBtn = container.querySelector('[data-carousel-next]');
  if (!track || !dotsContainer) return;

  for (let i = 1; i <= count; i++) {
    const slide = document.createElement('div');
    slide.className = 'preview-carousel-slide';
    slide.style.backgroundImage = `url('${imageUrl(basePath, i)}')`;
    slide.setAttribute('role', 'img');
    slide.setAttribute('aria-label', `${label} ${i}`);
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'preview-carousel-dot' + (i === 1 ? ' active' : '');
    dot.setAttribute('aria-label', `Image ${i}`);
    dot.addEventListener('click', () => goTo(i - 1));
    dotsContainer.appendChild(dot);
  }

  let current = 0;
  let autoTimer;

  function goTo(index) {
    current = (index + count) % count;
    track.style.transform = `translateX(-${current * 100}%)`;
    if (counter) counter.textContent = `${current + 1} / ${count}`;
    dotsContainer.querySelectorAll('.preview-carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), brochure ? 5000 : 4500);
  }

  prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  resetAuto();
}

function normalizeEventPhoto(photo) {
  if (typeof photo === 'string') {
    return { src: photo, position: 'center', aspect: '4/3' };
  }
  return {
    src: photo.src,
    position: photo.position || 'center',
    aspect: photo.aspect || '4/3'
  };
}

function renderProject(project) {
  document.title = `${project.title} | NFN Design`;
  document.getElementById('pageTitle').textContent = project.title;

  const heroBg = document.getElementById('heroBg');
  if (project.cover) {
    heroBg.style.backgroundImage = `url('${encodeImagePath(project.cover)}')`;
  } else {
    heroBg.style.background = 'linear-gradient(135deg, var(--bordeaux), var(--black))';
  }

  document.getElementById('breadcrumbTitle').textContent = project.title;
  document.getElementById('projectBadge').textContent = project.number
    ? `Projet ${project.number} — ${project.category}`
    : project.category;
  document.getElementById('projectTitle').textContent = project.title;
  document.getElementById('projectSubtitle').textContent = project.subtitle;
  document.getElementById('projectLocation').textContent = `📍 ${project.location}`;
  document.getElementById('projectPartners').textContent = project.partners.join(' · ');
  document.getElementById('projectDescription').textContent = project.description;

  const descExtra = document.getElementById('projectDescriptionExtra');
  const descClosing = document.getElementById('projectDescriptionClosing');
  if (descExtra) {
    if (project.descriptionExtra) {
      descExtra.textContent = project.descriptionExtra;
      descExtra.style.display = 'block';
    } else {
      descExtra.style.display = 'none';
    }
  }
  if (descClosing) {
    if (project.descriptionClosing) {
      descClosing.textContent = project.descriptionClosing;
      descClosing.style.display = 'block';
    } else {
      descClosing.style.display = 'none';
    }
  }

  const tagsEl = document.getElementById('projectTags');
  tagsEl.innerHTML = project.tags.map(t => `<span>${t}</span>`).join('');

  const contentEl = document.getElementById('projectContent');

  if (!project.ready) {
    contentEl.innerHTML = `
      <div class="coming-soon-box">
        <h3>Contenu à venir</h3>
        <p>Les visuels, plans et documents de ce projet seront bientôt disponibles.</p>
      </div>`;
    return;
  }

  let html = '';

  if (project.missions && project.missions.length) {
    html += `
      <section class="project-section">
        <div class="section-label">Missions</div>
        <h2>Rôle sur le projet</h2>
        <div class="project-missions">
          ${project.missions.map(m => `<div class="project-mission-item">${m}</div>`).join('')}
        </div>
      </section>`;
  }

  if (project.screenMockup) {
    const sm = project.screenMockup;
    html += `
      <section class="project-section project-screen-mockup-section">
        <div class="section-label">Présentation</div>
        <h2>${sm.title || 'Aperçu du projet'}</h2>
        ${sm.subtitle ? `<p class="project-gallery-section-subtitle">${sm.subtitle}</p>` : ''}
        <div class="laptop-mockup" aria-hidden="true">
          <div class="laptop-mockup-lid">
            <div class="laptop-mockup-bezel">
              <div class="laptop-mockup-camera"></div>
              <div class="laptop-mockup-display">
                <img src="${encodeImagePath(sm.image)}" alt="${sm.title || project.title} — présentation plein écran" loading="lazy">
              </div>
            </div>
          </div>
          <div class="laptop-mockup-base">
            <div class="laptop-mockup-notch"></div>
          </div>
        </div>
      </section>`;
  }

  if (project.previews) {
    html += `
      <section class="project-section">
        <div class="section-label">Plans &amp; Conception</div>
        <h2>${project.previews.label || 'Aperçu du projet'}</h2>
        <div class="project-split">
          <p class="project-description">Visualisations issues des études, plans et aménagements réalisés au cours des différentes phases de conception.</p>
          <div class="carousel-panel" oncontextmenu="return false;">
            <p class="preview-carousel-label">Aperçu limité</p>
            <div class="preview-carousel" id="previewCarousel" data-carousel>
              <div class="preview-carousel-viewport">
                <div class="preview-carousel-track"></div>
                ${project.previews.protected ? '<div class="preview-carousel-watermark">Aperçu · NFN Design</div>' : ''}
              </div>
              <div class="preview-carousel-nav">
                <button type="button" class="preview-carousel-btn" data-carousel-prev aria-label="Précédent">‹</button>
                <div class="preview-carousel-dots"></div>
                <button type="button" class="preview-carousel-btn" data-carousel-next aria-label="Suivant">›</button>
              </div>
              <p class="preview-carousel-counter">1 / ${project.previews.count}</p>
            </div>
            ${project.previews.protected ? '<p class="preview-carousel-notice">Aperçu à titre illustratif — les documents complets ne sont pas accessibles en ligne.</p>' : ''}
          </div>
        </div>
      </section>`;
  }

  if (project.renderNote) {
    html += `<section class="project-section" style="padding-top:0;"><p class="project-render-note">${project.renderNote}</p></section>`;
  }

  if (project.galleries && project.galleries.length) {
    const sectionLabel = project.gallerySectionLabel || 'Rendus &amp; Visuels';
    const sectionTitle = project.gallerySectionTitle || 'Développement du projet';
    html += `<section class="project-section"><div class="section-label">${sectionLabel}</div><h2>${sectionTitle}</h2></section>`;
    project.galleries.forEach((gallery, idx) => {
      const dense = gallery.images.length > 6 ? ' project-gallery-grid--dense' : '';
      const itemClass = gallery.fit === 'contain' ? ' project-gallery-item--contain' : '';
      html += `
        <section class="project-section" style="padding-top:0;margin-bottom:48px;">
          <h2 style="font-size:1.3rem;margin-bottom:4px;">${gallery.title}</h2>
          ${gallery.subtitle ? `<p class="project-gallery-section-subtitle">${gallery.subtitle}</p>` : ''}
          <div class="project-gallery-grid${dense}">
            ${gallery.images.map((src, i) => `
              <figure class="project-gallery-item${itemClass}">
                <img src="${encodeImagePath(src)}" alt="${gallery.title} — ${i + 1}" loading="lazy">
              </figure>
            `).join('')}
          </div>
        </section>`;
    });
  }

  if (project.event) {
    const ev = project.event;
    html += `
      <section class="project-event" id="evenement">
        <div class="project-event-inner">
          <div class="section-label">Événement</div>
          <h2>${ev.title}</h2>
          <p class="project-event-subtitle">${ev.subtitle}</p>
          <p class="project-event-text">${ev.text}</p>
          <div class="project-event-hero">
            <img src="${encodeImagePath(ev.image)}" alt="${ev.title}" loading="lazy">
          </div>
          ${ev.photos && ev.photos.length ? `
            <div class="project-event-photos">
              ${ev.photos.map((photo, i) => {
                const p = normalizeEventPhoto(photo);
                return `<img src="${encodeImagePath(p.src)}" alt="Événement Samira ${i + 1}" loading="lazy" style="object-position:${p.position};aspect-ratio:${p.aspect};">`;
              }).join('')}
            </div>
          ` : ''}
          ${ev.videos && ev.videos.length ? `
            <p class="video-strip-label">Moments de l'événement</p>
            <div class="video-strip-wrap">
              <div class="video-strip-track" id="videoStripTrack"></div>
            </div>
          ` : ''}
        </div>
      </section>`;
  }

  contentEl.innerHTML = html;

  if (project.previews) {
    initCarousel(document.getElementById('previewCarousel'), {
      basePath: project.previews.basePath,
      count: project.previews.count,
      label: project.title
    });
  }

  if (project.event && project.event.videos) {
    initVideoStrip(project.event.videos);
  }
}

function initVideoStrip(videos) {
  const track = document.getElementById('videoStripTrack');
  if (!track) return;

  const items = [...videos, ...videos];
  items.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'video-strip-item';
    const video = document.createElement('video');
    video.src = encodeImagePath(src);
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('preload', 'metadata');
    video.setAttribute('aria-label', `Vidéo événement ${(i % videos.length) + 1}`);
    item.appendChild(video);
    track.appendChild(item);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      track.querySelectorAll('video').forEach(v => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
    });
  }, { threshold: 0.2 });
  observer.observe(track.parentElement);
}

function renderNav(slug) {
  const idx = PROJECT_ORDER.indexOf(slug);
  const prevSlug = idx > 0 ? PROJECT_ORDER[idx - 1] : null;
  const nextSlug = idx < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[idx + 1] : null;
  const navEl = document.getElementById('projectNav');

  let html = '';
  if (prevSlug) {
    const p = PROJECTS[prevSlug];
    html += `<a href="projet.html?p=${prevSlug}" class="project-nav-link prev">
      <div class="project-nav-label">← Projet précédent</div>
      <div class="project-nav-title">${p.title}</div>
    </a>`;
  } else {
    html += '<div></div>';
  }
  if (nextSlug) {
    const p = PROJECTS[nextSlug];
    html += `<a href="projet.html?p=${nextSlug}" class="project-nav-link next">
      <div class="project-nav-label">Projet suivant →</div>
      <div class="project-nav-title">${p.title}</div>
    </a>`;
  }
  navEl.innerHTML = html;
}

function showNotFound() {
  document.title = 'Projet introuvable | NFN Design';
  document.getElementById('projectTitle').textContent = 'Projet introuvable';
  document.getElementById('projectSubtitle').textContent = 'Ce projet n\'existe pas ou a été déplacé.';
  document.getElementById('projectContent').innerHTML = `
    <div class="coming-soon-box">
      <p><a href="index.html#portfolio" style="color:var(--bordeaux);font-weight:600;">← Retour au portfolio</a></p>
    </div>`;
  document.getElementById('projectNav').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const slug = getProjectSlug();
  const project = PROJECTS[slug];

  if (!project) {
    showNotFound();
    return;
  }

  renderProject(project);
  renderNav(slug);

  if (window.location.hash) {
    setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }

  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
});
