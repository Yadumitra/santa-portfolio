
(function() {
    const giftTracker = document.querySelector("#Gift-Tracker");
    if (!giftTracker) { 
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

         giftTracker.querySelector("#days").textContent = days;
        giftTracker.querySelector("#hours").textContent = hours;
        giftTracker.querySelector("#minutes").textContent = minutes;
        giftTracker.querySelector("#seconds").textContent = seconds;
    }

    function showCelebration() {
        const countdownContainer = giftTracker.querySelector(".countdownContainer");
        countdownContainer.innerHTML = `<tr class="christmas"><td colspan="4">Merry Christmas! 🎄</td></tr>`;
    }

    
    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);
})();
