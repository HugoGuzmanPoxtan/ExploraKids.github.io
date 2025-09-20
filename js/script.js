
  document.querySelector('.loader').style.display = 'flex';

  // Esperar a que se cargue la página
  window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
  });