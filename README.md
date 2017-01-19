# JuegoReciclar
Crear el juego interactivo "A Reciclar"
##Enunciado:
El objetivo es crear un juego interactivo llamado "A reciclar" usando HTML5, CSS3, jQueryUI y Toastr. El usuario ha de arrastrar cada una de las imágenes de materiales al cubo en el que debe ir ese material a la hora de reciclar. La estructura o reglas para el juego son las siguientes:<br>

  El juego debe estar en una página Web.<br>
  El usuario debe introducir su nombre antes de comenzar el juego en una caja de texto redimensionable (jQueryUI).<br> El campo debe ser requerido y permite introducir solo letras y espacios (nombre apellido), el tamaño máximo es de 100 (HTML5).<br>
  El usuario debe elegir el nivel de dificultad a través de una ventana modal con tres botones: fácil, normal y experto.<br> jQueryUI.<br>
  Debe haber 2 a 4 imágenes de cubos de reciclar de diferentes materiales (papel, vidrio, plástico y orgánica) en el área de juego.<br>
  Por cada tipo de cubo hay 4 imágenes de materiales asociados. Las imágenes se han de nombrar papel1, papel2,.. y así sucesivamente para las imágenes de los materiales que deben ir al cubo de papel.<br>
  El juego debe mostrar un número de imágenes al azar en el área de juego:<br>
    Fácil: 4 imágenes<br>
    Medio: 7 imágenes<br>
    Experto: 9 imágenes<br>
  Las imágenes de los materiales a mostrar deben corresponderse únicamente a los cubos que hay.<br>
  El usuario debe ser capaz de seleccionar un material y arrastrarlo con el ratón sobre la imagen del cubo.<br> No se pueden arrastrar elementos fuera del área de juego.<br>
  Si el usuario elige el material correcto para el cubo, él/ella gana un punto y se avisará al usuario a través de notificaciones Toastr.<br>
  Después de que los materiales han sido arrastradas, el juego termina y se debe mostrar el resultado (por ejemplo: "Nombre" tienes 2 puntos) y pedir a la usuario "¿Quieres jugar de nuevo? Si el usuario decide volver a jugar, se inicia el juego (el usuario no debe entrar en su nombre otra vez y puede cambiar de nivel), de lo contrario el juego se termina.<br> Para estos mensajes se han de usar ventanas modales con algún efecto a la entrada y salida (jQueryUI).
