/* Calculadora */
function calcular() {
    const precio = parseFloat (document.getElementById('Juego').value);
    const cantidad = parseInt (document.getElementById('cantidad').value);
    const formato = parseFloat(document.getElementById('formato').value);


    if (precio === 0) {
         document.getElementById('resultado').textContent = 'Selecciona un juego'; 
         return;
    }

    const total = precio * cantidad * formato;
    const totalConIva = total * 1.21;
    document.getElementById('resultado').textContent = 'Sin IVA: ' + total.toFixed(2) + '€ | Con IVA: ' + totalConIva.toFixed(2) + '€';
}


/* Pagina Hecha por Aitor Garcia Nuñez */