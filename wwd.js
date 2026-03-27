// wwd.js - What We Do page interactivity (refactored for real portfolio)

// Portfolio data (imported from portfolio.json)
const portfolio = [
  {
    type: "Institutional/Commercial",
    title: "African Union IBAR Campus",
    description: "Modern complex with sleek grey facades and vertical louvers.",
    img: "https://via.placeholder.com/400x250?text=IBAR+Campus"
  },
  {
    type: "Industrial/Modular",
    title: "Modular Campus",
    description: "Two-story white modular/container buildings along a paved walkway.",
    img: "https://via.placeholder.com/400x250?text=Modular+Campus"
  },
  {
    type: "Retail",
    title: "LITTLE RED",
    description: "High-end storefront with luxury apparel and warm lighting.",
    img: "https://via.placeholder.com/400x250?text=LITTLE+RED"
  },
  {
    type: "Residential",
    title: "Townhouses",
    description: "Contemporary multi-story townhouses with geometric rooflines and mixed finishes.",
    img: "https://via.placeholder.com/400x250?text=Townhouses"
  },
  {
    type: "Interior Design",
    title: "icolo.io Reception",
    description: "Reception with organic-shaped white desk and woven wooden ceiling.",
    img: "https://via.placeholder.com/400x250?text=icolo.io+Reception"
  },
  {
    type: "Masterplanning",
    title: "Campus Masterplan",
    description: "Aerial 3D rendering of a large-scale campus or residential development in a wooded area.",
    img: "https://via.placeholder.com/400x250?text=Campus+Masterplan"
  }
];

const grid = document.getElementById('wwd-grid');
const infoPanel = document.getElementById('wwd-info-panel');
const categorySelect = document.getElementById('wwd-category');

function renderGrid(filterCat = 'all') {
  grid.innerHTML = '';
  const filtered = filterCat === 'all' ? portfolio : portfolio.filter(p => p.type === filterCat);
  filtered.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'wwd-img-card';
    card.tabIndex = 0;
    card.setAttribute('data-id', idx);
    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}">
      <div class="wwd-img-title">${project.title}</div>
    `;
    card.addEventListener('click', () => selectProject(idx));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') selectProject(idx); });
    grid.appendChild(card);
  });
}

function selectProject(idx) {
  document.querySelectorAll('.wwd-img-card').forEach(card => card.classList.remove('selected'));
  const card = document.querySelector(`.wwd-img-card[data-id='${idx}']`);
  if (card) card.classList.add('selected');
  const project = portfolio[idx];
  infoPanel.innerHTML = `
    <div class="wwd-info-title">${project.title}</div>
    <div class="wwd-info-meta"><span style="color:#ffe082;">${project.type}</span></div>
    <div class="wwd-info-desc">${project.description}</div>
  `;
}

categorySelect.addEventListener('change', e => {
  renderGrid(e.target.value);
  infoPanel.innerHTML = `
    <div class="wwd-info-title">Select a project</div>
    <div class="wwd-info-meta"></div>
    <div class="wwd-info-desc">Click a project to see its details here.</div>
  `;
});

// Initial render
renderGrid();
