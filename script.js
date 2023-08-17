//aca el juego selecciona un numero al azar para adivinarrr
let numeroAzar = Math.floor(Math.random() * 100) + 1;

//aca se guardan los elementos del html en variables
let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;
let resetButton = document.getElementById("resetButton");

//esta accion se va a ejecutar cuando se haga click en el boton "comprobar"
function chequearResultado() {
  intentos++;
  intento.textContent = "" + intentos;
  let numeroIngresado = parseInt(numeroEntrada.value);

  //validacion de que el numero ingresado sea un numero y concuerde con la consigna del juego
  if (numeroIngresado < 1 || numeroIngresado > 100) {
    mensaje.textContent = "El numero debe ser entre el 1 y el 100";
    mensaje.style.color = "grey";
    return;
  }
  //condicion de que si el numero ingresado es igual al numero al azar, gana
  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = "¡Ganaste! Adivinaste el número :D";
    mensaje.style.color = "purple";
    mostrarBotonNuevoJuego();
    // numeroEntrada.disabled = true;
    //condicion de que si el numero ingresado es mayor al numero al azar, el juego te dice que el numero es mayor
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent = "Más alto! El número es mayor que el que escribiste";
    mensaje.style.color = "red";
    //condicion de que si el numero ingresado es menor al numero al azar, el juego te dice que el numero es menor
  } else {
    mensaje.textContent = "Más bajo! El número es menor que el que escribiste";
    mensaje.style.color = "red";
  }
}
function mostrarBotonNuevoJuego() {
  resetButton.style.display = "block"; // Mostrar el botón de iniciar juego nuevo
  document.querySelector("button").style.display = "none"; // Ocultar el botón "Comprobar"
  numeroEntrada.disabled = true; // Deshabilitar el campo de entrada
  resetButton.addEventListener("click", reiniciarJuego);
}
function reiniciarJuego() {
  // Generar un nuevo número al azar
  numeroAzar = Math.floor(Math.random() * 100) + 1;

  // Restablecer los valores de los elementos del HTML
  mensaje.textContent = "¡A jugar!";
  mensaje.style.color = "black";
  numeroEntrada.value = "";
  numeroEntrada.disabled = false;
  intentos = 0;
  intento.textContent = "0";

  // Ocultar el botón "Iniciar juego nuevo"
  resetButton.style.display = "none";
  // Mostrar el botón "Comprobar"
  document.querySelector("button").style.display = "block";
}
