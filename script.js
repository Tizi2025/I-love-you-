const messages = [
    "Eres mi persona favorita ✨",
    "Te amo muchísimo ❤️",
    "Gracias por estar en mi vida",
    "Cada momento contigo es mágico 🪄",
    "Juntos por siempre ♾️",
    "Tú y yo, para siempre",
    "Mi corazón es tuyo 💖",
    "Siempre pienso en ti 💭",
    "Tu sonrisa me ilumina ☀️"
];

function createBubble() {
    const container = document.getElementById('bubbles-container');
    const bubble = document.createElement('div');
    
    bubble.classList.add('bubble');
    
    // Elegir un mensaje aleatorio
    const randomIndex = Math.floor(Math.random() * messages.length);
    bubble.innerText = messages[randomIndex];
    
    // Posición horizontal aleatoria (0 a 90%)
    const xPos = Math.random() * 90;
    bubble.style.left = `${xPos}%`;
    
    // Duración aleatoria para que no suban todos al mismo tiempo
    const duration = Math.random() * 3 + 4; // Entre 4 y 7 segundos
    bubble.style.animationDuration = `${duration}s`;

    container.appendChild(bubble);

    // Borrar la burbuja después de que termine la animación
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Crear una burbuja nueva cada 600 milisegundos
setInterval(createBubble, 600);
