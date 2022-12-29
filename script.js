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

function calcular_tiempo_plataforma(tiempo_original){
  // minuto 40 segundos
  tiempo_resto = 60 + 40
  resucitar = tiempo_original - tiempo_resto
  console.log(tiempo_original)
  console.log(resucitar)
  calcular_contador_con_segundos(resucitar)
} 

function calcular_contador_con_segundos(tiempo){
  minutes = parseInt(tiempo / 60, 10);
  seconds = parseInt(tiempo % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log(minutes + ":" + seconds)

}

function callMeteor() {
    timer = document.querySelector('#header').textContent
    
    minutos = parseInt(timer.split(":")[0], 10)
    segundos = parseInt(timer.split(":")[1], 10)
    console.log("pillado", minutos + ":" + segundos)
    tiempo_boton = (minutos * 60) + segundos

  calcular_tiempo_plataforma(tiempo_boton)


}


window.onload = function () {
    var fiveMinutes = 60 * 20,
        display = document.querySelector('#header');
    startTimer(fiveMinutes, display);
};
