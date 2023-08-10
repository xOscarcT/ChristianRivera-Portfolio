document.addEventListener("DOMContentLoaded", function() {
  const contenidoDivs = document.querySelectorAll("#contenido > div");
  const navLinks = document.querySelectorAll("nav a");

  // Mostrar automáticamente el div de "Inicio" y seleccionar el botón
  const inicioDiv = document.querySelector("#inicio-div");
  if (inicioDiv) {
    inicioDiv.style.display = "block";
    navLinks.forEach(function(enlace) {
      if (enlace.getAttribute("href") === "#inicio-div") {
        enlace.classList.add("seleccionado");
      }
    });
  }

  // Agregar el evento de clic a los botones del menú
  navLinks.forEach(function(enlace) {
    enlace.addEventListener("click", function(e) {
      e.preventDefault();
      const divId = enlace.getAttribute("href");
      
      contenidoDivs.forEach(function(div) {
        div.style.display = "none";
      });
      
      const divToShow = document.querySelector(divId);
      if (divToShow) {
        divToShow.style.display = "block";
      }

      // Cambiar la clase seleccionada
      navLinks.forEach(function(link) {
        link.classList.remove("seleccionado");
      });
      enlace.classList.add("seleccionado");
    });
  });
});