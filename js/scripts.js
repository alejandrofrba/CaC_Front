
/* 
BORRAR
 */


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miformulario");
  const formulario2 = document.getElementById("miformulario2");
  const botonBorrar = document.getElementById("boton-borrar");
  
    botonBorrar.addEventListener("click", function (event) {
      event.preventDefault();
  
      miformulario.reset();
      miformulario2.reset();
    });
  });

/* 
  VALIDACIONES
 */

  document.addEventListener("DOMContentLoaded", function () {
    const enviarDatosButton = document.getElementById("enviar");    // "enviar" es el "ID" del HTML
    const nombreInput = document.getElementById("nombre");
    const fecLlegSelect = document.getElementById("fecLleg");

    const cantidadInput = document.getElementById("cantidad");
    const apellidoInput = document.getElementById("apellido");
    const emailInput = document.getElementById("email");
    const precioTotalSpan = document.getElementById("precio-total");
  
    
    calcularDescuentoButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la recarga de la página por defecto
  
        const categoria = categoriaSelect.value;
        const cantidad = parseInt(cantidadInput.value, 10);
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const email = emailInput.value;
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (
            categoria === "" 
            ||  isNaN(cantidad)
            || cantidad <= 0
            || nombre === ""
            || apellido === ""
            || email === "" 
/*
            || emailRegex.match(email) >= 0
*/
            ) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }

    });
  });
  