var trafficLightElemens = document.querySelectorAll('.traffic-light .traffic-light-lamp');
var redElem = trafficLightElemens[0];
var yellowElem = trafficLightElemens[1];
var greenElem = trafficLightElemens[2];

var btnStart = document.querySelector('.traffic-light-start');
var btnPause = document.querySelectorAll('.traffic-light-pause');
var btnStop = document.querySelectorAll('.traffic-light-stop');

btnStart.onclick = function () {

    var timerRed  = setTimeout(function () {
        redElem.classList.add('red');
    }, 5000);
    var timerYellow = setTimeout(function () {
        clearInterval(timerRed);
        redElem.classList.remove('red');
        yellowElem.classList.add('yellow');
    }, 3000);

    var timerGreen = setTimeout(function () {
        clearInterval(timerYellow);
        yellowElem.classList.remove('yellow');

        greenElem.classList.add('green');
    }, 5000);

};