const tabs = document.querySelectorAll('.tabs');

[...tabs].forEach(function(tabs) {
    const tabButton = tabs.querySelectorAll('.tab');
    const tabContent = tabs.querySelectorAll('.tab__content');

    tabButton.forEach((btn, index) => {
        btn.onclick = function() {
            console.log('WORK! Клик на табе'); //проверка сработки клика по вкладке
            tabButton.forEach(b => b.classList.remove('tab_active'));//очистка класса актив
            const activeBtns = [...tabButton].slice(index, index + 1);
            activeBtns.forEach((b) => b.classList.add('tab_active'));//добавление класса актив

            tabContent.forEach(c => c.classList.remove('tab__content_active'));
            const activeContents = [...tabContent].slice(index, index + 1);
            activeContents.forEach((c) => c.classList.add('tab__content_active'));
            console.log('проверка по контенту'); //проверка сработки части кода при клике по вкладке
            };
        });
    });