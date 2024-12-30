(function () {
    const giftTracker = document.querySelector("#Gift-Tracker");
    if (!giftTracker) {
        console.error("Gift Tracker element not found.");
        return;
    }

    function updateCountdown() {
        const now = new Date();
        const christmas = new Date(now.getFullYear(), 11, 25);

        if (now > christmas) {
            christmas.setFullYear(christmas.getFullYear() + 1);
        }

        const timeDifference = christmas - now;

        if (timeDifference <= 0) {
            showCelebration();
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const daysElement = giftTracker.querySelector("#days");
        const hoursElement = giftTracker.querySelector("#hours");
        const minutesElement = giftTracker.querySelector("#minutes");
        const secondsElement = giftTracker.querySelector("#seconds");

        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours;
        if (minutesElement) minutesElement.textContent = minutes;
        if (secondsElement) secondsElement.textContent = seconds;
    }

    function showCelebration() {
        const countdownContainer = giftTracker.querySelector(".countdownContainer");
        if (countdownContainer) {
            countdownContainer.innerHTML = `<tr class="christmas"><td colspan="4">Merry Christmas! 🎄</td></tr>`;
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
})();
