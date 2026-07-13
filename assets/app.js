// Carga el JSON y genera las tarjetas dinámicamente
fetch('data/projects.json')
  .then(res => res.json())
  .then(proyectos => {
    const contenedor = document.getElementById('lista-proyectos');
    proyectos.forEach(p => {
      // Crea una tarjeta por proyecto, sin tocar HTML manualmente
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.thumbnail}" alt="${p.titulo}" loading="lazy">
        <h3>${p.titulo} <span class="badge">${p.tipo}</span></h3>
        <p>${p.descripcion}</p>
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <a href="${p.url}" target="_blank">Ver proyecto →</a>
      `;
      contenedor.appendChild(card);
    });
  })
  .catch(err => console.error('Error cargando proyectos:', err));
