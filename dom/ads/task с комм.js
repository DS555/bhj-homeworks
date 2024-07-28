/*const rotatorCases = document.querySelectorAll('rotator__case');

function rotateCases() {
    [...rotatorCases].forEach(function() {
        [...rotatorCases].forEach(b => b.classList.remove('rotator__case_active'));
        const activeCase = [...rotatorCases].slice(index, index + 1);
        activeCase.forEach((b) => b.classList.add('rotator__case_active'));
    });
};

setInterval (rotateCases, 1000);
*/



const banners = document.getElementsByClassName("rotator"); // собираем все элементы'rotator'

[...banners].forEach(banner => { // создаем массив ротаторов стартуем цикл

    const bannerList = banner.getElementsByClassName("rotator__case"); // собираем все отключенные ротаторы

    const change = index => {  // создаем функцию change с параметром index 
        [...bannerList].forEach(element => { // запускаем цикл по всем ротаторам
            element.classList.remove("rotator__case_active"); // убираем класс "активный ротатор"
        });

		// определяем следующий индекс, если текущий элемент имеет собрата увеличиваем индекс, иначе устанавливаем index = 0 по сути возвращаемся на первый элемент
        index = bannerList[index].nextElementSibling ? index + 1 : 0;

        bannerList[index].classList.add("rotator__case_active"); // добавляем класс активный ротор по индексу

        setTimeout(change, 1000, index); // таймаут с вызовом функции change (рекурсия)
		// это бесконечный цикл
    };

    setTimeout(change, 0, 0); // это точка входа
});
