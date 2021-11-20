const targetTime = {
    hours: 12,
    minutes: 0,
    seconds: 0,
}
const timerBlock = document.querySelector('#rec319218570');
const timerElement = document.querySelector('[data-elem-id="1621955521495"] .tn-atom');
const targetDate = new Date();
targetDate.setHours(targetTime.hours);
targetDate.setMinutes(targetTime.minutes);
targetDate.setSeconds(targetTime.seconds);
const timeLeft = {
    seconds: 0,
    minutes: 0,
    hours: 0
};
let timer;

setClock();
timer = setInterval(setClock, 1000);

function setClock () {
    const currentTime = new Date();
    const timeDiff = targetDate.getTime() - currentTime.getTime();

    if (timeDiff < 0) {
        hideTimerBlock();
        clearInterval(timer);
        return;
    }
    timeLeft.seconds = Math.floor(timeDiff / 1000);
    timeLeft.minutes = Math.floor(timeLeft.seconds / 60);
    timeLeft.hours = Math.floor(timeLeft.minutes / 60);
    const preformedTimeLeft = {
        hours: timeLeft.hours,
        minutes: timeLeft.minutes - 60 * timeLeft.hours,
        seconds: timeLeft.seconds - 60 * timeLeft.minutes
    }

    const hoursText = preformedTimeLeft.hours > 0 ? `${preformedTimeLeft.hours}:` : '';
    const minutesText = preformedTimeLeft.minutes < 10 ? `0${preformedTimeLeft.minutes}:` : `${preformedTimeLeft.minutes}:`;
    const secondsText = preformedTimeLeft.seconds < 10 ? `0${preformedTimeLeft.seconds}` : preformedTimeLeft.seconds;

    const timeLeftText = hoursText + minutesText + secondsText;
    timerElement.textContent = timeLeftText;
}

function hideTimerBlock () {
    timerBlock.style.display = 'none';
}