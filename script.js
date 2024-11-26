document.addEventListener('DOMContentLoaded', function () {
    const savedStatus = localStorage.getItem('status-comida');
    if (savedStatus) {
        document.getElementById('status-comida').textContent = `Comeu hoje: ${savedStatus}`;
    }

    function atualizarStatus(status) {
        document.getElementById('status-comida').textContent = `Comeu hoje: ${status}`;
        localStorage.setItem('status-comida', status);
    }

    document.getElementById('sim').addEventListener('click', function () {
        document.getElementById('mensagem').innerHTML = `
            <p>Muito bem, linda! Continue assim, você merece uma flor 🌼</p>
            <img src="./imgs/girassol.webp" alt="Flor" />
        `;
        atualizarStatus('Sim');
    });

    document.getElementById('nao').addEventListener('click', function () {
        document.getElementById('mensagem').innerHTML = `
            <p>Vai comer, linda, se não vai se ver comigo! 😡</p>
            <img src="./imgs/sticket.png" alt="Figurinha Brava" />
        `;
        atualizarStatus('Não');
    });
});
