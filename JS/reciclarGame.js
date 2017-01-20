var that;

var ReciclarGame = function(){
 that = this;
 that.nombre;
 this.arrayBasuras = []
 this.numeroBasuras=0;
 var cont=0;
 var item;
 for(var i = 0; i < 4; i++){
   if(i==0)item ="botella"
   if(i==1)item ="comidaOrganica"
   if(i==2)item ="papel"
   if(i==3)item ="plastico"
   for(var j = 0 ; j < 4; j++){
      this.arrayBasuras[cont] = item+(j+1)+".png";
      cont++
   }
 }
}
ReciclarGame.prototype.introducirNombre = function (){
  $( function() {
    $( "#dialog" ).dialog({
      buttons:{"Entrar": function(){
        if(that.validarCampoNombre()){
          $(this).dialog("close");
          that.elegirDificultad();
          $("#campoNombre").hide();
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
      that.nombre = nombre
  }
}
ReciclarGame.prototype.elegirDificultad = function(){
  $( function() {
    $( "#dificultad" ).dialog({
      width: 400,
      height: 200,
      buttons:{
        "Fácil": function(){
          that.jugar("fácil");
          $(this).dialog("close");
        },
        "Normal":function(){
          that.jugar("normal");
          $(this).dialog("close");
        },
        "Difícil":function(){
          that.jugar("difícil");
          $(this).dialog("close");

        }
      }
    });
  });
}
ReciclarGame.prototype.jugar = function(dificultad){
  $("#juego").show();
  var arrayBasuras = [];
  arrayBasuras = this.crearObjetos(dificultad, arrayBasuras);
}
ReciclarGame.prototype.crearObjetos = function(dificultad, arrayBasuras){
  if(dificultad=="fácil"){
    this.numeroBasuras = 4;
  }
  if(dificultad=="normal"){
    this.numeroBasuras = 7;
  }
  if(dificultad=="difícil"){
    this.numeroBasuras = 9;
  }
  var basurasTemp = Array.from(this.arrayBasuras);
  for(var i = 0; i < this.numeroBasuras; i++){

    var temp = Math.round((Math.random() * this.numeroBasuras))
    arrayBasuras.push(basurasTemp[temp])
    basurasTemp.splice(temp,1);
  }
  return arrayBasuras;
}
/*
$(".draggableItem").draggable({
  containment: "#gameBox",
  scroll: false
});

$(".droppableItem").droppable({
  accept: ".draggableItem",
  drop: function(event, ui) {
    alert("Correct!");
  }
});*/
