const rev = document.querySelectorAll('.reveal');

function isVisible(elem) {
    const coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
}

function showVisible() {
    [...rev].forEach(function(rev) {
        let reveal = rev.getBoundingClientRect();
    if (isVisible(rev)) {
      rev.src = reveal;
      rev.classList.add('reveal_active');
    }
    if (!isVisible(rev)) {
        rev.src = reveal;
        rev.classList.remove('reveal_active');
      }
    });
}

showVisible();
window.onscroll = showVisible;