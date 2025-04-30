//Evento funcion
document.getElementById("boton").addEventListener("click", function(){
    alert("Esta es una alerta");
});

//Evento condicional
function verificarEdad() {
    const edad = document.getElementById("edad").value;
    const mensaje = document.getElementById("mensaje");
  
    if (edad >= 18) {
      mensaje.textContent = "Eres mayor de edad";
    } else {
      mensaje.textContent = "Eres menor de edad";
    }
  }
//Evento operativo
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma);

//Evento de tipos de datos
const datos = [42, "Hola", true, "Juan", 3.14, false, "Mundo"];
const soloNumeros = datos.filter(dato => typeof dato === "number");
const soloCadenas = datos.filter(dato => typeof dato === "string");

console.log(soloNumeros);
console.log(soloCadenas);
