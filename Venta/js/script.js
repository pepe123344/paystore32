document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    const nombre = document.getElementById('nombre').value;
    
    // Aquí podrías enviar los datos a un servidor o a tu correo.
    // Para este ejemplo, solo mostramos una alerta.
    
    alert(`¡Gracias, ${nombre}! Tu solicitud de pedido ha sido enviada. Te contactaremos pronto.`);

    // Opcional: Limpiar el formulario después del envío
    this.reset();
});