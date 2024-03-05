// Script para funcionalidad del tooltip de boostrap
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Ready function de JQuery
$(function () {
  // Funcionalidad alert para el boton de la sección contacto
  $("#enviarCorreo").on("click", function () {
    alert("El correo fue enviado correctamente.");
  });

  // Funcionalidad que transforma a color rojo todos los textos de las cards al hacer doble click en los titulos de las secciones
  $("h3").on("dblclick", function () {
    $(".card-text").css("color", "red");
  });

  // Funcionalidad que oculta las cards de la sección quienes somos al hacer click en el titulo
  $("#titleQuienesSomos").on("click", function () {
    $(".cards").toggle("slow");
  });
});
