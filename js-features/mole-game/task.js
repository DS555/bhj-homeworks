const getHole = index => document.getElementById(`hole${index}`);
let lost = document.getElementById('lost');
let dead = document.getElementById('dead');
let winCount = parseInt(dead.textContent);
let looseCount = parseInt(lost.textContent);

function checkResult (dead, lost) {
    if (looseCount === 5) {
        alert('Поражение!');
        location.reload();
    }
    else if (winCount === 10) {
        alert('Победа!');
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')){
            console.log ('Попал!')
            winCount += 1;
            dead.textContent = winCount;
        } else {
            console.log ('Промазал!')
            looseCount += 1;
            lost.textContent = looseCount;
        };
        checkResult(winCount, looseCount);
    };
};