const button = document.querySelectorAll('.font-size');
const content = document.querySelector('.book__content')

button.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('WORK! Клик на A'); //проверка сработки клика по букве
        button.forEach(b => b.classList.remove('font-size_active'));//очистка класса актив
        const activeButton = [...button].slice(index, index + 1);
        activeButton.forEach((b) => b.classList.add('font-size_active'));//добавление класса актив
    

        content.classList.remove('book_fs-small');
        content.classList.remove('book_fs-big');
        if (btn.getAttribute('data-size') == "small") {
            content.classList.add('book_fs-small');
        }
        if (btn.getAttribute('data-size') == "big") {
            content.classList.add('book_fs-big');
        }
    });
});