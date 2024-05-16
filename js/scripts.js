
/* 
BORRAR
 */


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miformulario");
  const formulario2 = document.getElementById("miformulario2");
  const botonBorrar = document.getElementById("boton-borrar");
  const botonEnviar = document.getElementById("boton-enviar");  --

    botonBorrar.addEventListener("click", function (event) {
      event.preventDefault();
  
      miformulario.reset();
      miformulario2.reset();
    });
  });

/* 
  VALIDACIONES
 */

  botonEnviar.addEventListener("click", function (event) {
//    document.addEventListener("DOMContentLoaded", function () {
    const enviarDatosButton = document.getElementById("enviar");    // "enviar" es el "ID" del HTML

    const nombreInput = document.getElementById("nombre");

    const fecLlegSelect = document.getElementById("fecLleg");
    const fecSalSelect = document.getElementById("fecSal");

    const emailInput = document.getElementById("correo");
    const cantidadInput = document.getElementById("cantidad");

    
    enviarDatosButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita la recarga de la página por defecto
  
/*
        const email = emailInput.value;
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
*/
        alert("Por favor, complete todos los campos correctamente.", nombreInput);

        if (
          nombreInput === "" 
            || nombreInput === ""
            || fecLlegSelect === ""
            || fecSalSelect === ""
            || emailInput === "" 
            ||  isNaN(cantidadInput)
            
//            ||  isNaN(cantidad)
//            || cantidad <= 0
/*
            || emailRegex.match(email) >= 0
*/
            ) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }
      });
  });
  