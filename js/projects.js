const VB = 'images/autres projets/Villa Bassam';
const PC = 'images/autres projets/PROJET CLINIQUE';

const PROJECTS = {
  'awa-lena': {
    slug: 'awa-lena',
    number: '02',
    title: 'AWA Léna',
    subtitle: 'Résidence R+8 — Sacré-Cœur, Dakar',
    category: 'Résidentiel',
    type: 'Immeuble résidentiel R+8',
    location: 'Sacré-Cœur, Dakar',
    partners: ['Realités Sénégal', 'CHA Studio Design'],
    description: 'Le Projet Awa Léna est un immeuble résidentiel R+8 développé en collaboration avec Realités Sénégal et CHA Studio Design. Les visualisations présentées illustrent le développement architectural et spatial du projet, issu des études, plans et aménagements réalisés au cours des différentes phases de conception.',
    tags: ['Résidentiel', 'R+8', 'Conception', 'Plans & Aménagements'],
    missions: [
      'Conception architecturale',
      'Modélisation 3D',
      'APS / APD',
      'Plans techniques',
      'Relevés de site',
      'Suivi de projet'
    ],
    cover: 'images/awa-lena/preview-01.jpeg',
    previews: {
      basePath: 'images/awa-lena/preview-',
      count: 11,
      protected: true,
      label: 'Aperçu des plans'
    },
    ready: true
  },
  'projet-green': {
    slug: 'projet-green',
    number: null,
    title: 'Projet Green',
    subtitle: 'Résidence R+9 — CHA Studio Design',
    category: 'Résidentiel',
    type: 'Résidence R+9',
    location: 'Dakar',
    partners: ['CHA Studio Design'],
    description: "Le Projet Green est une résidence R+9 développée dans le cadre de mon expérience au sein de CHA Studio Design. Ma contribution a porté sur la production de dessins techniques et de détails d'exécution relatifs aux différents lots techniques du projet.",
    tags: ['Résidentiel', 'R+9', 'EXE', 'Lots techniques', 'Détails d\'exécution'],
    missions: [
      'Dessins techniques',
      "Détails d'exécution",
      'Lot carrelage',
      'Lot étanchéité',
      'Menuiserie bois — cuisine & placards',
      'Menuiserie métallique'
    ],
    cover: 'images/Green/cover.jpeg',
    renderNote: "Documents techniques organisés par lots — plans et détails d'exécution produits pour la coordination des corps de métier.",
    gallerySectionLabel: 'Lots techniques',
    gallerySectionTitle: "Détails d'exécution",
    galleries: [
      {
        title: 'Lot Carrelage',
        subtitle: 'Détails techniques et plans d\'exécution',
        limitedPreview: true,
        images: ['images/Green/carrelage/carrelage-1.jpeg', 'images/Green/carrelage/carrelage-2.jpeg', 'images/Green/carrelage/carrelage-3.jpeg']
      },
      {
        title: 'Lot Étanchéité',
        subtitle: 'Détails d\'étanchéité et interfaces',
        limitedPreview: true,
        images: ['images/Green/etancheite/etancheite-1.jpeg', 'images/Green/etancheite/etancheite-2.jpeg', 'images/Green/etancheite/etancheite-3.jpeg']
      },
      {
        title: 'Menuiserie Bois — Cuisine',
        subtitle: 'Plans et détails menuiserie cuisine',
        limitedPreview: true,
        images: [
          'images/Green/MENUISERIE-BOIS-CUISINE/menuiserie-bois-cuisine-1.jpeg',
          'images/Green/MENUISERIE-BOIS-CUISINE/menuiserie-bois-cuisine-2.jpeg',
          'images/Green/MENUISERIE-BOIS-CUISINE/menuiserie-bois-cuisine-3.jpeg'
        ]
      },
      {
        title: 'Menuiserie Bois — Placards',
        subtitle: 'Détails placards et agencements',
        limitedPreview: true,
        images: [
          'images/Green/menuiserie-bois-placards/menuiserie-bois-placards-1.jpeg',
          'images/Green/menuiserie-bois-placards/menuiserie-bois-placards-2.jpeg'
        ]
      },
      {
        title: 'Menuiserie Métallique',
        subtitle: 'Détails d\'exécution menuiserie métallique',
        limitedPreview: true,
        images: [
          'images/Green/MENUISERIE-METALLIQUE/menuiserie-metallique-1.jpeg',
          'images/Green/MENUISERIE-METALLIQUE/menuiserie-metallique-2.jpeg',
          'images/Green/MENUISERIE-METALLIQUE/menuiserie-metallique-3.jpeg'
        ]
      }
    ],
    ready: true
  },
  'samira-almadies': {
    slug: 'samira-almadies',
    number: null,
    title: 'Samira',
    subtitle: 'Résidence R+8 — Almadies, Dakar',
    category: 'Résidentiel',
    type: 'Résidence collective R+8',
    location: 'Almadies, Dakar',
    partners: ['Realités Sénégal', 'CHA Studio Design'],
    description: "Le Projet Samira est une résidence collective R+8 située au cœur des Almadies, l'un des quartiers les plus prisés de Dakar. Réalisé en collaboration avec Realités Sénégal, ce projet s'inscrit dans une démarche de conception alliant qualité résidentielle, optimisation spatiale et valorisation architecturale.",
    descriptionExtra: "Mon intervention a porté sur les phases préliminaires de conception, notamment l'étude de faisabilité, l'élaboration du zoning fonctionnel et l'analyse des surfaces. J'ai participé à l'organisation des espaces intérieurs à travers une représentation graphique claire des différentes fonctions, facilitant la lecture et la compréhension du projet. J'ai également contribué à la production des supports de présentation ainsi qu'à l'établissement des bilans de surfaces à l'aide d'AutoCAD, Adobe Photoshop et Adobe Illustrator.",
    descriptionClosing: "Ce travail a permis de structurer les premières orientations du projet et d'accompagner efficacement les réflexions de conception jusqu'aux étapes de développement.",
    renderNote: "Les rendus présentés sont issus du développement du projet à partir des plans et études d'aménagement auxquels j'ai contribué durant les phases de conception.",
    tags: ['Résidentiel', 'R+8', 'Almadies', 'Zoning', 'Rendus 3D'],
    missions: [
      'Étude de faisabilité',
      'Zoning fonctionnel',
      'Analyse des surfaces',
      'Organisation des espaces intérieurs',
      'Supports de présentation',
      'Bilans de surfaces — AutoCAD, Photoshop, Illustrator'
    ],
    cover: 'images/samira/cover.jpeg',
    galleries: [
      {
        title: 'Façade & Devant',
        subtitle: 'Perspective extérieure de la résidence',
        images: ['images/samira/devant-1.jpeg', 'images/samira/devant-2.jpeg', 'images/samira/devant-3.jpeg']
      },
      {
        title: 'Accueil',
        subtitle: 'Hall d\'entrée et espaces de réception',
        images: ['images/samira/accueil-1.jpeg', 'images/samira/accueil-2.jpeg']
      },
      {
        title: 'Salle de sport',
        subtitle: 'Espace fitness & bien-être',
        images: ['images/samira/gym-1.jpeg', 'images/samira/gym-2.jpeg']
      },
      {
        title: 'Coworking Space',
        subtitle: 'Espace de travail partagé',
        images: ['images/samira/coworking-1.jpeg', 'images/samira/coworking-2.jpeg']
      },
      {
        title: 'Maquette 3D',
        subtitle: 'Visualisation volumétrique du projet',
        images: Array.from({ length: 11 }, (_, i) => `images/samira/maquette3d-${i + 1}.jpeg`)
      },
      {
        title: 'Zoning & Plans 2D',
        subtitle: 'Organisation spatiale et représentation graphique',
        images: Array.from({ length: 19 }, (_, i) => `images/samira/maquette2d-${i + 1}.jpeg`)
      }
    ],
    event: {
      title: 'Événement de Présentation',
      subtitle: 'Realités Sénégal × CHA Studio Design',
      text: "Participation à l'événement de présentation organisé par Realités Sénégal et CHA Studio Design autour du Projet Samira. Cette rencontre a réuni les différents partenaires et intervenants du projet dans un cadre d'échange et de valorisation des ambitions architecturales portées par cette future résidence située aux Almadies.",
      image: 'images/samira/event/hero.jpeg',
      photos: [
        'images/samira/event/photo-2.jpeg',
        { src: 'images/samira/event/photo-1.jpeg', position: 'top center', aspect: '3/4' }
      ],
      videos: ['images/samira/event/video-1.mp4', 'images/samira/event/video-2.mp4', 'images/samira/event/video-3.mp4']
    },
    ready: true
  },
  'villa-bassam': {
    slug: 'villa-bassam',
    number: null,
    title: 'Villa Bassam',
    subtitle: 'Villa — Grand-Bassam',
    category: 'Autres',
    type: 'Villa',
    location: 'Grand-Bassam',
    partners: ['CHA Studio Design'],
    description: "Villa Bassam est un projet de villa développé dans le cadre de mon expérience au sein de CHA Studio Design. Ma contribution a porté sur la conception architecturale, les visualisations 3D, les plans techniques, le design intérieur et la production de documents pour les différents lots du projet.",
    tags: ['Autres', 'Villa', '3D', 'Design intérieur', 'AutoCAD'],
    missions: [
      'Conception architecturale',
      'Visualisation SketchUp',
      'Plans AutoCAD',
      'Design intérieur',
      'Vues & perspectives',
      'Devis lots sanitaires'
    ],
    cover: `${VB}/rendu-7.jpeg`,
    screenMockup: {
      image: `${VB}/ImageEcranMockup/screen.jpeg`,
      title: 'Présentation du projet',
      subtitle: 'Visualisation architecturale — affichage plein écran'
    },
    renderNote: 'Projet villa regroupant les phases de conception, visualisation et documentation technique.',
    galleries: [
      {
        title: 'Vues Bassam',
        subtitle: 'Perspectives et vues du projet',
        images: [`${VB}/Bassam  Views/view-1.jpeg`, `${VB}/Bassam  Views/view-2.jpeg`]
      },
      {
        title: 'Rendus architecturaux',
        subtitle: 'Images de synthèse et perspectives',
        images: Array.from({ length: 7 }, (_, i) => `${VB}/rendu-${i + 2}.jpeg`)
      },
      {
        title: 'Visualisation SketchUp',
        subtitle: 'Modélisation 3D et volumes',
        images: [`${VB}/rendu-1.jpeg`]
      },
      {
        title: 'Design intérieur',
        subtitle: 'Aménagements, ambiances et croquis SketchUp',
        images: [
          ...Array.from({ length: 9 }, (_, i) => `${VB}/interior design/interior-${i + 1}.jpeg`),
          ...Array.from({ length: 4 }, (_, i) => `${VB}/VISUALISATION SKETCHUP/sketchup-${i + 1}.jpeg`)
        ]
      },
      {
        title: 'Plans AutoCAD',
        subtitle: 'Documents techniques',
        fit: 'contain',
        images: [`${VB}/Autocad/autocad-1.jpeg`, `${VB}/Autocad/autocad-2.jpeg`]
      },
      {
        title: 'Devis — Lots sanitaires',
        subtitle: 'Exemples de documentation lot sanitaire',
        fit: 'contain',
        images: [
          `${VB}/EXEMPLE DES DEVIS LOTS SANITAIRES-VILLA BASSAM/devis-sanitaire-1.jpeg`,
          `${VB}/EXEMPLE DES DEVIS LOTS SANITAIRES-VILLA BASSAM/devis-sanitaire-2.jpeg`
        ]
      }
    ],
    ready: true
  },
  'projet-clinique': {
    slug: 'projet-clinique',
    number: null,
    title: 'Projet Clinique',
    subtitle: 'Équipement de santé',
    category: 'Autres',
    type: 'Clinique',
    location: 'Dakar',
    partners: ['CHA Studio Design'],
    description: "Projet clinique développé dans le cadre de mon expérience au sein de CHA Studio Design. Ma contribution a porté sur la conception architecturale, l'organisation des espaces et la production de visualisations pour cet équipement de santé.",
    tags: ['Autres', 'Clinique', 'Santé', 'Conception'],
    missions: [
      'Conception architecturale',
      'Organisation des espaces',
      'Visualisations & rendus',
      'Plans & aménagements'
    ],
    cover: `${PC}/clinique-1.jpeg`,
    galleries: [
      {
        title: 'Option 1',
        subtitle: 'Rendus photoréalistes — façade et vue aérienne',
        images: [`${PC}/clinique-1.jpeg`, `${PC}/clinique-3.jpeg`]
      },
      {
        title: 'Option 2',
        subtitle: 'Modélisation SketchUp — volumes et perspectives 3D',
        images: [`${PC}/clinique-2.jpeg`, `${PC}/clinique-4.jpeg`]
      }
    ],
    ready: true
  }
};

const PROJECT_ORDER = [
  'awa-lena',
  'projet-green',
  'samira-almadies',
  'villa-bassam',
  'projet-clinique'
];
