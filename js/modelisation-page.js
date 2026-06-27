const VB = 'images/autres projets/Villa Bassam';

const VISUALISATION_SKETCHUP = [{
  src: `${VB}/rendu-1.jpeg`,
  title: 'Visualisation SketchUp — autre villa'
}];

const SKETCHUP_CROQUIS = Array.from({ length: 4 }, (_, i) => ({
  src: `${VB}/VISUALISATION SKETCHUP/sketchup-${i + 1}.jpeg`,
  title: `Croquis SketchUp ${i + 1}`
}));

function encodePath(path) {
  return path.split('/').map(encodeURIComponent).join('/');
}

function renderGallery(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map((item, i) => `
    <figure class="gallery-item" data-lightbox-title="${item.title}" data-lightbox-src="${encodePath(item.src)}" role="button" tabindex="0">
      <img src="${encodePath(item.src)}" alt="${item.title}" loading="lazy">
      <figcaption class="gallery-item-overlay"><span>Vue ${i + 1}</span></figcaption>
    </figure>
  `).join('');
}

renderGallery('gallery-volumes', VISUALISATION_SKETCHUP);
renderGallery('gallery-sketchup', SKETCHUP_CROQUIS);

const lightbox = document.getElementById('lightbox');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxImg = document.getElementById('lightboxImg');
let lightboxZoom = 1;

function openLightbox(title, src) {
  lightboxTitle.textContent = title;
  lightboxImg.src = src;
  lightboxZoom = 1;
  lightboxImg.style.transform = 'scale(1)';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

function bindLightbox() {
  document.querySelectorAll('[data-lightbox-src]').forEach(item => {
    const open = () => openLightbox(item.getAttribute('data-lightbox-title'), item.getAttribute('data-lightbox-src'));
    item.addEventListener('click', open);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

bindLightbox();

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

document.getElementById('lightboxZoomIn').addEventListener('click', () => {
  lightboxZoom = Math.min(lightboxZoom + 0.25, 4);
  lightboxImg.style.transform = `scale(${lightboxZoom})`;
  document.getElementById('lightboxZoomReset').textContent = Math.round(lightboxZoom * 100) + '%';
});
document.getElementById('lightboxZoomOut').addEventListener('click', () => {
  lightboxZoom = Math.max(lightboxZoom - 0.25, 0.5);
  lightboxImg.style.transform = `scale(${lightboxZoom})`;
  document.getElementById('lightboxZoomReset').textContent = Math.round(lightboxZoom * 100) + '%';
});
document.getElementById('lightboxZoomReset').addEventListener('click', () => {
  lightboxZoom = 1;
  lightboxImg.style.transform = 'scale(1)';
  document.getElementById('lightboxZoomReset').textContent = '100%';
});
