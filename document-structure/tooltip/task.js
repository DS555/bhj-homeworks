const body = document.querySelector('body');
const a = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');

a.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        tooltip.classList.remove('tooltip_active');
        let topCoordinate = link.getBoundingClientRect().top < window.innerHeight / 2 ?  link.getBoundingClientRect().bottom + 10 : link.getBoundingClientRect().top - 30;
        let leftCoordinate = link.getBoundingClientRect().left < window.innerWidth / 2 ? link.getBoundingClientRect().left + 10 : link.getBoundingClientRect().left - 10;
        link.insertBefore(tooltip, null);
        tooltip.textContent = link.title;
        tooltip.style.left = `${leftCoordinate}px`;
        tooltip.style.top = `${topCoordinate}px`;
        tooltip.classList.add('tooltip');
        tooltip.classList.add('tooltip_active');
    });
});