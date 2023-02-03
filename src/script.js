let timerJob
const fiveMinutes = 60 * 20

/**
 * Creates the main timer in the given HTML object
 * @duration  {Number} Time in seconds for the counter/timer
 * @display  {Element | null} HTML element where the counter is going to be displayed
 */
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

/**
 * Given the counter time calculates when the platforms are going to spawn
 * @original_timer  {Number} time in seconds of the counter
 */
function calculatePlatformTime(original_timer) {
    // 1 minute and 40 seconds
    time_to_discount = 60 + 40
    platform_revive_time = original_timer - time_to_discount
    minutes, seconds = calculateTimerTime(platform_revive_time)

    document.querySelector('#platform_timer').textContent = minutes + ":" + seconds
}

/**
 * Using seconds calculates the numnber of minutes and seconds
 * to write it on a readable way
 * @timestamp  {Number} number of seconds
 * @return {Number, Number} Minutes and seconds
 */
function calculateTimerTime(timestamp) {
    minutes = parseInt(timestamp / 60, 10);
    seconds = parseInt(timestamp % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes, seconds
}

/**
 * Starts to calculate when the platforms are going to
 * spawn after the meteor hits the floor. This is done when the button
 * is clicked in the UI
 */
function callMeteor() {
    document.getElementById("revive_element").style.display = "block";
    timer = document.querySelector('#header').textContent

    minutes = parseInt(timer.split(":")[0], 10)
    seconds = parseInt(timer.split(":")[1], 10)
    button_time = (minutes * 60) + seconds

    calculatePlatformTime(button_time)
}

/**
 * Restarts the timer and resets the platform timer element status
 */
function restartTimer() {
    resetMeteorCounterStatus()
    clearInterval(timerJob)
    var display = document.querySelector('#header');
    startTimer(fiveMinutes, display);
}

/**
 * Resets the status of the respawn timer
 */
function resetMeteorCounterStatus() {
    document.getElementById("revive_element").style.display = "none";
    document.querySelector('#platform_timer').textContent = ""
}

window.onload = function () {
    restartTimer()
};
