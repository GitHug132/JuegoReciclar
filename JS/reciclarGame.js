var that;
var ReciclarGame = function() {
    that = this;
    this.nombre;
    this.arrayBasuras = []
    this.numeroBasuras = 0;
    this.puntuacion = 0;
    var cont = 0;
    var item;
    for (var i = 0; i < 4; i++) {
        if (i == 0) item = "botella"
        if (i == 1) item = "comidaOrganica"
        if (i == 2) item = "papel"
        if (i == 3) item = "plastico"
        for (var j = 0; j < 4; j++) {
            this.arrayBasuras[cont] = item + (j + 1) + ".png";
            cont++
        }
    }
}
ReciclarGame.prototype.introducirNombre = function() {
    $(function() {
        $("#dialog").dialog({
            closeOnEscape: false,
            buttons: {
                "Entrar": function() {
                    if (that.validarCampoNombre()) {
                        $(this).dialog("close");
                        that.elegirDificultad();
                    }
                }
            }
        });
    });
}
ReciclarGame.prototype.validarCampoNombre = function() {
    var nombre = $("#campoNombre").val();
    var exp = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/
    nombre = nombre.trim();
    if (nombre == "" || parseInt(nombre) == nombre || exp.test(nombre)==false) {
        toastr.error("Solo se permiten Letras y Espacios")
        return false;
    } else {
        this.nombre = nombre;
        return true;
    }
}
ReciclarGame.prototype.elegirDificultad = function() {
    $(function() {
        $("#dificultad").dialog({
            closeOnEscape: false,
            width: 400,
            height: 200,
            buttons: {
                "Fácil": function() {
                    that.jugar("fácil");
                    $(this).dialog("close");
                },
                "Normal": function() {
                    that.jugar("normal");
                    $(this).dialog("close");
                },
                "Difícil": function() {
                    that.jugar("difícil");
                    $(this).dialog("close");

                }
            }
        });
    });
}
ReciclarGame.prototype.jugar = function(dificultad) {
    $("#juego").show();
    var arrayBasuras = [];
    var tiposBasura = ["botella", "papel", "comidaOrganica", "plastico"]
    var temp;
    var contenedoresBasura = [];
    arrayBasuras = this.crearBasuras(dificultad, arrayBasuras);
    contenedoresBasura = this.crearContenedores(arrayBasuras, contenedoresBasura);
    for (var i = 0; i < arrayBasuras.length; i++) {
        var crearBasura = $("<img class='" + arrayBasuras[i].substring(0, (arrayBasuras[i].length - 5)) + " basura' src='img/" + arrayBasuras[i] + "'/>")
        temp = Math.random() * (($("#basura").width() - 100) - 50) + 50;
        $(crearBasura).css("left", temp);
        temp = Math.random() * (($("#basura").height() - 100) - 50) + 50;
        $(crearBasura).css("top", temp);
        $("#basura").append(crearBasura);
    }
    for (var i = 0; i < contenedoresBasura.length; i++) {
      if(contenedoresBasura[i]!=""){
        var crearContenedor = $("<img class='" + tiposBasura[i] + " " + contenedoresBasura[i].substring() + "+ contenedor' src='img/" + contenedoresBasura[i] + "'/>");
        $("#contenedores").append(crearContenedor);
      }
    }
    this.crearEventos();
}
ReciclarGame.prototype.crearBasuras = function(dificultad, arrayBasuras) {
    if (dificultad == "fácil") {
        this.numeroBasuras = 4;
    }
    if (dificultad == "normal") {
        this.numeroBasuras = 7;
    }
    if (dificultad == "difícil") {
        this.numeroBasuras = 9;
    }
    var basurasTemp = Array.from(this.arrayBasuras);
    for (var i = 0; i < this.numeroBasuras; i++) {

        var temp = Math.round((Math.random() * basurasTemp.length-1))
        //Para solventar el error
        if(temp<0)temp=0;
        arrayBasuras.push(basurasTemp[temp])
        if(arrayBasuras[i]==undefined){
          console.log("posicion: "+i+" temp: "+temp);
        }
        basurasTemp.splice(temp, 1);
    }
    return arrayBasuras;
}

ReciclarGame.prototype.crearContenedores = function(arrayBasuras, contenedoresBasura) {
    var temp = [];

    for (var j = 0; j < arrayBasuras.length; j++) {
        if (arrayBasuras[j].includes("botella")) {
            temp[j] = "vidreo";
        }
        if (arrayBasuras[j].includes("papel")) {
            temp[j] = "azul";
        }
        if (arrayBasuras[j].includes("comidaOrganica")) {
            temp[j] = "organica";
        }
        if (arrayBasuras[j].includes("plastico")) {
            temp[j] = "amarilla";
        }
    }
    contenedoresBasura = this.comprobarContenedor(temp, contenedoresBasura);
    return contenedoresBasura;
}

ReciclarGame.prototype.comprobarContenedor = function(temp, contenedoresBasura) {
    var i = 0;
    if (temp.includes("vidreo")) {
        contenedoresBasura[i] = "cuboVidreo.png";
        i++
    }else{
      contenedoresBasura[i] = ""
      i++
    }
    if (temp.includes("azul")) {
        contenedoresBasura[i] = "cuboAzul.png";
        i++
    }else{
      contenedoresBasura[i] = ""
      i++
    }
    if (temp.includes("organica")) {
        contenedoresBasura[i] = "cuboOrganico.png";
        i++
    }else{
      contenedoresBasura[i] = ""
      i++
    }
    if (temp.includes("amarilla")) {
        contenedoresBasura[i] = "cuboAmarillo.png";
        i++
    }else{
      contenedoresBasura[i] = ""
      i++
    }
    return contenedoresBasura;
}
ReciclarGame.prototype.crearEventos = function() {
    that = this;
    $(".basura").draggable({
        containment: "#juego",
        scroll: false,
        revert: "valid"
    });

    $(".contenedor").droppable({
        accept: ".basura",
        drop: function(event, ui) {
            that.Drop(event, ui, that)
        }
    });
}

ReciclarGame.prototype.Drop = function(event, ui) {
    ui.draggable.remove();
    if (ui.draggable.hasClass(event.target.classList[0])) {
        this.puntuacion++;
        toastr.success("Ahora tienes "+this.puntuacion+" puntos!");
        if($("#basura").find(".basura").length==0){
          $("#contenedores").find(".contenedor").remove();
          $(function() {
              $("#reiniciar").dialog({
                  title: that.nombre+" tiene "+ that.puntuacion + " puntos",
                  closeOnEscape: false,
                  width: 700,
                  height: 300,
                  buttons: {
                      "Reiniciar": function() {
                          $(this).dialog("close");
                          that.elegirDificultad();
                      },
                      "Salir": function() {
                          $(this).dialog("close");
                          that.introducirNombre();
                      }
                  }
              });
          });
        }
    }
}
