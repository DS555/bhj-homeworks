const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.onclick = function() {
    console.log('WORK');
};

dropdowns.forEach((dropdown) => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdownList.querySelectorAll('.dropdown__item');

    dropdownValue.addEventListener('click', (event) => {
        // Отменяем действие по умолчанию.Перехода по ссылке не будет.
        event.preventDefault();
        // добавляем или убираем класс.
        dropdownList.classList.toggle('dropdown__list_active');
        dropdownValue.classList.toggle('dropdown__value_active');
    });

    dropdownItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const value = item.querySelector('a').textContent;
            dropdownValue.textContent = value;
            dropdownList.classList.remove('dropdown__list_active');
            dropdownValue.classList.remove('dropdown__value_active');
        });
    });
});

