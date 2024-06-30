const timer = document.getElementById('timer');
const mainCounter = function(){
    let counter = +timer.textContent;
    counter --;
    timer.textContent = counter;
if (timer.textContent === "0") {
    alert('Вы победили в конкурсе!');
    clearInterval(intervalID);
}
}
let intervalID = setInterval(mainCounter, 1000);