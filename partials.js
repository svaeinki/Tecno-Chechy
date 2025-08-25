async function loadPartial(url, elementId) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const container = document.getElementById(elementId);
    if (container) {
      container.outerHTML = html;
    }
  } catch (err) {
    console.error('Error al cargar el parcial', url, err);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadPartial('partials/menu.html', 'menu');
  // Resaltar el enlace activo
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.menu a').forEach((link) => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  await loadPartial('partials/footer.html', 'footer');
});
