function updateCountdown() {
    const endDate = new Date('2024-12-01T00:00:00');
    const now = new Date();
    const timeRemaining = endDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'A contagem regressiva terminou!';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
