var reciclar = null;
window.addEventListener("DOMContentLoaded", function() {
  reciclar = new ReciclarGame();
  $( function() {
    $( "#resizable" ).resizable();
  } );
}
