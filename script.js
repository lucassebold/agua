document.getElementById('sim').addEventListener('click', function() {
    document.getElementById('mensagem').innerHTML = `
        <p>Muito bem, linda! Continue assim, você merece uma flor 🌼</p>
        <img src="./imgs/girassol.webp" alt="Flor" />
    `;
});

document.getElementById('nao').addEventListener('click', function() {
    document.getElementById('mensagem').innerHTML = `
        <p>Vai comer, linda, se não vai se ver comigo! 😡</p>
        <img src="./imgs/sticket.png" alt="Figurinha Brava" />
    `;
});