function toggleText() {
    // Mostrar el texto giratorio
    textElement.style.opacity = '1';
    textElement.style.transform = 'rotateX(360deg)';

    // Esperar 5 segundos y luego ocultarlo
    setTimeout(() => {
        textElement.style.opacity = '0';
        textElement.style.transform = 'rotateX(0)';
    }, 5000); // Mantiene el texto visible por 5 segundos
}

// Función para manejar el ciclo de aparición
function startTextCycle() {
    toggleText(); // Muestra el texto

    // Esperar 10 segundos (5 segundos visibles + 5 segundos de espera) antes de mostrarlo nuevamente
    setInterval(() => {
        toggleText();
    }, 10000); // Intervalo total entre apariciones
}

// Esperar 3 segundos antes de comenzar el ciclo
setTimeout(startTextCycle, 3000); // Espera 3 segundos antes de mostrar el text

// Mostrar contenido de Introducción con efecto
setTimeout(() => {
    introContent.classList.add('show'); // Agrega la clase para mostrar el contenido
}, 1500); // Espera 1.5 segundos antes de mostrar el contenido
