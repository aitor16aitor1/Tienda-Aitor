/* Calculadora */
function calcular() {
    
/* recoge los valores que el usuaria seleciona */
    const precio = parseFloat (document.getElementById('Juego').value);
    const cantidad = parseInt (document.getElementById('cantidad').value);
    const formato = parseFloat(document.getElementById('formato').value);

/* si no seleccionas juego te da un aviso */
    if (precio === 0) {
        document.getElementById('resultado').textContent = 'Selecciona un juego'; 
        return;
    }

/* Si la cantidad es negativa o cero muestra error */
    if (cantidad <= 0) {
      document.getElementById('resultado').textContent = 'La cantidad no puede ser negativa o cero';
      return;
    }

/* Si la catidad es superior a 999 muestra error */ 
    if (cantidad > 999) {
    document.getElementById('resultado').textContent = 'La cantidad no puede ser mayor de 999';
    return;
    }

/* calcula el iva */
    const total = precio * cantidad * formato;
    const totalConIva = total * 1.21;
    document.getElementById('resultado').textContent = 'Sin IVA: ' + total.toFixed(2) + '€ | Con IVA: ' + totalConIva.toFixed(2) + '€';
}


/* Formulario de contacto */
function enviarContacto(event) {

/* Evita que al darle a enviar se reinicie la pagina */
  event.preventDefault();

/* recoge los valores que el usuaria seleciona */
  const nombre = document.getElementById('Nombre').value;
  const apellidos = document.getElementById('Apellidos').value;
  const correo = document.getElementById('Correo').value;

/* si algun campo esta vacio, muestra error */
  if (nombre === '' || apellidos === '' || correo === '') {
    alert ('Por favor rellene todos los campos de forma correcta');
    return;
  }
/* si todo esta bien te muestra un mensaje de confirmacion */
  alert ('Mensaje enviado correctamente, ' + nombre + '! Te contestaremos en aproximadamente 24h. ');
}


/* Pagina Hecha por Aitor Garcia Nuñez */