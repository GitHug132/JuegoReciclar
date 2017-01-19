'use strict';
var Ejercicio = null;
window.addEventListener("DOMContentLoaded", function() {
  Ejercicio = new Jquery();
  Ejercicio.selectores();
  Ejercicio.recorrerDOM();
  Ejercicio.manipulacion();
  Ejercicio.crearSugerencia();
  Ejercicio.navegacionPestanias();
  Ejercicio.mostrarTextoOculto();
  Ejercicio.menuDesplegable();
  Ejercicio.crearSlideShow();
});
