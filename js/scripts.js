
/* 
BORRAR
 */


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miformulario");
  const formulario2 = document.getElementById("miformulario2");
  const botonBorrar = document.getElementById("boton-borrar");
  const botonEnviar = document.getElementById("boton-enviar"); 

    botonBorrar.addEventListener("click", function (event) {
      event.preventDefault();
  
      miformulario.reset();
      miformulario2.reset();
    });
  });


/*
  VALIDACIONES
 */

 document.addEventListener("DOMContentLoaded", function (event) {
   const enviarDatosButton = document.getElementById("boton-enviar");     // "enviar" es el "ID" del HTML
  const nombreInput = document.getElementById("nombre");


const emailInput = document.getElementById("e_mail");
const comentariosInput = document.getElementById("Comentarios");
const huespInput = document.getElementById("huesp");
const menoresInput = document.getElementById("menores");  

  enviarDatosButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita la recarga de la página por defecto

      const nombre = nombreInput.innerText;
      console.log("nombre: ", nombre);

      const email = emailInput.innerText;
      console.log("email: ", email);

      const comentarios = comentariosInput.innerText;
      console.log("comentarios: ", comentarios);

      const huesp = huespInput.textContent;
      console.log("huesp: ", huesp);

      const menores =menoresInput.textContent;
      console.log("menores: ", menores);

        if (
          email === ""  ||
          comentarios === ""   ||
          isNaN(huesp)  ||
          isNaN(hmenores)
            ) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }
      });
  });
  