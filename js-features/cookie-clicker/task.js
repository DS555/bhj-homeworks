const clickCookie = document.getElementById("cookie")
clickCookie.onclick = function(){
    const clicker__counter = document.getElementById('clicker__counter');
    let counter = clicker__counter.textContent;
    counter ++;
    clicker__counter.textContent = counter;
    if (counter % 2 === 0) {
        clickCookie.width = 200;
    }
    else {
        clickCookie.width = 250;
    };
};