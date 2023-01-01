let timerJob

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    timerJob = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function calculatePlatformTime(original_timer) {
    // 1 minute and 40 seconds
    time_to_discount = 60 + 40
    platform_revive_time = original_timer - time_to_discount
    minutes, seconds = calculateTimerTime(platform_revive_time)

    document.querySelector('#platform_timer').textContent = minutes + ":" + seconds
}

function calculateTimerTime(timestamp) {
    minutes = parseInt(timestamp / 60, 10);
    seconds = parseInt(timestamp % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes, seconds
}

function callMeteor() {
    document.getElementById("revive_element").style.display = "block"; 
    timer = document.querySelector('#header').textContent

    minutes = parseInt(timer.split(":")[0], 10)
    seconds = parseInt(timer.split(":")[1], 10)
    button_time = (minutes * 60) + seconds

    calculatePlatformTime(button_time)
}

function restartTimer() {
    resetMeteorCounterStatus()
    clearInterval(timerJob)
    var fiveMinutes = 60 * 20
    var display = document.querySelector('#header');
    startTimer(fiveMinutes, display);
}


function resetMeteorCounterStatus(){
    document.getElementById("revive_element").style.display = "none"; 
    document.querySelector('#platform_timer').textContent = ""
}

window.onload = function () {
    restartTimer()
};
