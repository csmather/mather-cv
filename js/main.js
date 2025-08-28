
// Load projects from JSON and render cards
document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.querySelector('#projects-grid');
  const resp = await fetch('data/projects.json');
  const projects = await resp.json();

  for (const p of projects) {
    const li = document.createElement('article');
    li.className = 'card';
    li.innerHTML = `
      <a href='${p.caseStudy}' aria-label='Open case study: ${p.title}'><img src='${p.screenshot}' alt='${p.title} screenshot placeholder'></a>
      <div class='pad'>
        <a class='title' href='${p.caseStudy}'>${p.title}</a>
        <div class='tags'>${p.tags.map(t=>`<span class='tag'>${t}</span>`).join('')}</div>
        <p>${p.blurb}</p>
        <p class='meta'><a href='${p.url}' rel='noopener' target='_blank'>Visit site ↗</a> • <a href='${p.caseStudy}'>Case study →</a></p>
      </div>`;
    grid.appendChild(li);
  }
});
