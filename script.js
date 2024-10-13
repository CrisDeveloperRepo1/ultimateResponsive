const textElement = document.getElementById('sustainable-text');
const introContent = document.getElementById('intro-content');

function toggleText() {
    // Mostrar el texto giratorio
    textElement.style.opacity = '1';
    textElement.style.transform = 'rotateX(360deg)';

    // Esperar un segundo y luego ocultarlo
    setTimeout(() => {
        textElement.style.opacity = '0';
        textElement.style.transform = 'rotateX(0)';
    }, 7000); // Muestra el texto por 1 segundo
}

// Llama a la función cada 3 segundos
setInterval(toggleText, 3000); // Tiempo total entre apariciones

// Mostrar contenido de Introducción con efecto
setTimeout(() => {
    introContent.classList.add('show'); // Agrega la clase para mostrar el contenido
}, 1500); // Espera 1.5 segundos antes de mostrar el contenido
