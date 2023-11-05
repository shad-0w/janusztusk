const startTime = new Date('2023-10-15T22:25:00+02:00');  // 15 October 2023, 10:25 PM CET

function updateTimer() {
    const now = new Date();
    const elapsedTime = now - startTime;
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
