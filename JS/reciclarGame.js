var that;

var ReciclarGame = function(){
 that = this;
}
ReciclarGame.prototype.introducirNombre = function (){
  $( function() {
    $( "#dialog" ).dialog({
      buttons:{"Entrar": function(){
        if(that.validarCampoNombre()){
          $(this).dialog("close");
          that.elegirDificultad();
        }
      }
    }
    });
  } );
}
ReciclarGame.prototype.validarCampoNombre = function(){
  var nombre = document.getElementById("campoNombre").value;
  nombre = nombre.trim();
  if(nombre==""||parseInt(nombre)==nombre){
      return false;
  }
  else{
      return true;
  }
}
ReciclarGame.prototype.elegirDificultad = function(){
  alert("hola");
}
