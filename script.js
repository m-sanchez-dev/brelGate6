function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
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

function calcular_tiempo_plataforma(original_timer){
  // 1 minute and 40 seconds
  time_to_discount = 60 + 40
  resucitar = original_timer - time_to_discount
  calculate_timer_time(resucitar)
} 

function calculate_timer_time(tiempo){
  minutes = parseInt(tiempo / 60, 10);
  seconds = parseInt(tiempo % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector('#platform_timer').textContent = minutes + ":" + seconds
 
}

function callMeteor() {
    timer = document.querySelector('#header').textContent
    
    minutes = parseInt(timer.split(":")[0], 10)
    seconds = parseInt(timer.split(":")[1], 10)
    button_time = (minutes * 60) + seconds

    calcular_tiempo_plataforma(button_time)
}


window.onload = function () {
    var fiveMinutes = 60 * 20,
        display = document.querySelector('#header');
    startTimer(fiveMinutes, display);
};
