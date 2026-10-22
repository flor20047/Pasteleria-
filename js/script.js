// Obtener referencia al formulario
const formulario = document.getElementById('formContacto');
const descripcion = document.getElementById('Descripcion');
const contador = document.getElementById('contador');
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

// 1. Contar caracteres de la descripción (evento input)
descripcion.addEventListener('input', function() {
    contador.textContent = this.value.length + ' caracteres';
});

// 2. Validar al enviar el formulario (evento submit)
formulario.addEventListener('submit', function(evento) {
    // Evitar que la página se recargue
    evento.preventDefault();

    // Obtener valores de los campos
    const nombre = document.getElementById('Nombre').value.trim();
    const correo = document.getElementById('Correo').value.trim();
    const telefono = document.getElementById('Telefono').value.trim();
    const descripcionTexto = descripcion.value.trim();

    // Validar campos obligatorios
    if (nombre === '' || correo === '' || telefono === '' || descripcionTexto === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Validar formato del correo electrónico
    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!expresionCorreo.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validar teléfono (solo números, mínimo 10 dígitos)
    const soloNumeros = /^[0-9]{10,15}$/;
    if (!soloNumeros.test(telefono)) {
        alert('Por favor, ingresa un teléfono válido (solo números, 10-15 dígitos).');
        return;
    }

    // 3. Mostrar mensaje de confirmación
    mensajeConfirmacion.style.display = 'block';
    mensajeConfirmacion.textContent = '¡Gracias ' + nombre + '! Tu solicitud se envió correctamente. Te contactaremos al ' + telefono + ' o al correo ' + correo + '.';

    // Limpiar el formulario
    formulario.reset();
    contador.textContent = '0 caracteres';
});