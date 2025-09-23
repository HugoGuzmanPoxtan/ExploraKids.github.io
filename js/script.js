
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); 
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".page-content");

  window.addEventListener("load", () => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 500);
  });

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");

      if (href && href.endsWith(".html")) {
        e.preventDefault(); 
        loader.style.display = "flex";
        loader.style.opacity = "1";
        content.style.display = "none";

        setTimeout(() => {
          window.location.href = href;
        }, 600);
      }
    });
  });
});

function toggleTexto() {
    const texto = document.getElementById("txtLugar");
    const btn = document.querySelector(".ver-mas-btn");

    texto.classList.toggle("expandido");

    if (texto.classList.contains("expandido")) {
      btn.textContent = "Ver menos";
    } else {
      btn.textContent = "Ver más";
    }
  }