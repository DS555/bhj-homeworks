const body = document.querySelector('body');
const a = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
body.appendChild(tooltip);

let activeLink = null;

a.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        //выключатель по "флагу"" и сброс этого "флага"
        if (activeLink === link) {
            tooltip.classList.remove('tooltip_active');
            activeLink = null;
            return;
        }

        tooltip.classList.remove('tooltip_active');
        tooltip.textContent = link.title;
        //координаты
        let topCoordinate = link.getBoundingClientRect().top < window.innerHeight / 2 
            ? link.getBoundingClientRect().bottom + 10 
            : link.getBoundingClientRect().top - 30;
        let leftCoordinate = link.getBoundingClientRect().left < window.innerWidth / 2 
            ? link.getBoundingClientRect().left + 10 
            : link.getBoundingClientRect().left - 10;
        tooltip.style.left = `${leftCoordinate}px`;
        tooltip.style.top = `${topCoordinate}px`;
        //"активатор" подсказки
        tooltip.classList.add('tooltip_active');
        //вешаем "флаг"
        activeLink = link;
    });
});