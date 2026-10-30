const countdownCards = document.querySelectorAll('.countdown-card[data-date]');
const now = new Date();
const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
const millisecondsPerDay = 24 * 60 * 60 * 1000;

countdownCards.forEach((card) => {
    const [year, month, day] = card.dataset.date.split('-').map(Number);
    const showDate = Date.UTC(year, month - 1, day);
    const daysRemaining = Math.round((showDate - today) / millisecondsPerDay);
    const countdown = card.querySelector('.countdown-value');

    if (daysRemaining > 0) {
        countdown.textContent = `距離演唱會還有 ${daysRemaining} 天`;
    } else if (daysRemaining === 0) {
        countdown.textContent = '今天開唱！';
    } else {
        countdown.textContent = '演出已結束';
    }
});
