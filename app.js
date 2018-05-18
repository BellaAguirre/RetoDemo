  // Mandamos a llamar a los elmentos del HTML que se van a manipular
var saludarUsario = document.getElementById('bienvenida'); 
var mostrarResultados = document.getElementById('contenedorPrincipal');
var iniciarPartida = document.getElementById('sectionQuestion');
var respuestasCorrectas = document.getElementById('respuestasCorrectas');
var respuestasIncorrectas= document.getElementById('respuestasIncorrectas');
function enviar()
{
  var name = document.getElementById('name').value;
  saludarUsario.innerHTML = "😊 Bienvenid@ " + name + " 😊" ;
}

//var iniciarPartida = parseInt(prompt("Ingresa el número que corresponda a tu respuesta \n ¿Quieres iniciar la partida? \n 1.Si \n 2.No"));

// Evaluamos las respuestas del usuario (para iniciar el juego)
mostrarResultados.style.visibility = 'hidden';
function aceptar()
{
  iniciarPartida.style.display='none';
  mostrarResultados.style.visibility = 'visible';
  respuestasCorrectas.innerHTML = "<h4> Preguntas correctas </h4>";
  respuestasIncorrectas.innerHTML = "<h4> Preguntas incorrectas </h4>";

  //alert("Recuerda ingresar el número que corresponde a tu respuesta 😉");  
}
function cancelar()
{
  iniciarPartida.style.display = '';
  mostrarResultados.innerHTML =  "<h1>Gracias por visitarnos, nos vemos la próxima 😉 </h1>";
}
function evaluar(){
  /* PRIMERA PREGUNTA */
  var primeraPregunta = document.forms.quiz.answerOne.value;

  if (primeraPregunta == 'Cerveza') { //Ejemplo de opción con NÚMERO
    respuestasCorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>Respuesta correcta:</strong> 🍺 La cerveza 🍺";
  } else {
    respuestasIncorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>La respuesta correcta era:</strong> 🍺 La cerveza 🍺";
  }
  //SEGUNDA PREGUNTA
  var segundaPregunta = document.forms.quiz.answerTwo.value;
  if (segundaPregunta == 'Cantar') { //Ejemplo de opción con LETRA
    //respuestasCorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
  } else {
    respuestasIncorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
  }
}
