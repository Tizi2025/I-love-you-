const messages = [
    "Eres mi persona favorita ✨",
    "Te amo muchísimo ❤️",
    "Gracias por estar en mi vida",
    "Cada momento contigo es mágico 🪄",
    "Juntos por siempre ♾️",
    "Tú y yo, para siempre",
    "Mi corazón es tuyo 💖",
    "Siempre pienso en ti 💭",
    "Tu sonrisa me ilumina ☀️",
    "Eres mi lugar favorito en el mundo 🌎❤️",
    "Contigo todo es más bonito ✨",
    "Gracias por hacerme tan feliz cada día 😊",
    "Eres el mejor regalo que me dio la vida 🎁",
    "Me encantas de aquí hasta el infinito 🚀💖",
    "Tu sonrisa es mi parte favorita del día ☀️",
    "Te amo más que a nada ❤️",
    "Siempre tú ♾️",
    "Haces latir mi corazón fuerte 💓",
    "Tú y yo, siempre 🥂",
    "Te quiero muchísimo 🧸"
];

function createBubble() {
    const container = document.getElementById('bubbles-container');
    const bubble = document.createElement('div');
    
    bubble.classList.add('bubble');
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    bubble.innerText = messages[randomIndex];
    
    const xPos = Math.random() * 90;
    bubble.style.left = `${xPos}%`;
    
    const duration = Math.random() * 3 + 4; 
    bubble.style.animationDuration = `${duration}s`;

    container.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

setInterval(createBubble, 600);
