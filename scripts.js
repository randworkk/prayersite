document.getElementById('play-button').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    var scrollingText = document.getElementById('scrolling-text');
    var russianText = document.getElementById('russian-text').textContent;
    var oldChurchSlavonicText = document.getElementById('old-church-slavonic-text').textContent;

    // Запускаємо аудіо
    if (audio.paused) {
        audio.play();
        this.textContent = "Зупинити";
    } else {
        audio.pause();
        this.textContent = "Прослухати";
    }

    // Бігучий рядок
    scrollingText.textContent = russianText + " | " + oldChurchSlavonicText;
    scrollingText.style.animation = 'scroll-text 20s linear infinite';
});

scrollingText.addEventListener('animationend', function() {
    this.style.animation = '';
});

// CSS для анімації бігучого рядка
var style = document.createElement('style');
style.innerHTML = `
@keyframes scroll-text {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
`;
document.head.appendChild(style);
