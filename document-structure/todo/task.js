const form = document.forms[0];
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
// const button = document.getElementById('tasks__add');


taskInput.setAttribute('required', '');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('отправка формы submit');

    let task = document.createElement('div');
    task.classList.add('task');
    taskList.appendChild(task);
    
    let taskTitle = document.createElement('div');
    task.appendChild(taskTitle);
    taskTitle.classList.add('task__title');
    
    let inputValue = `${taskInput.value}`;
    console.log(inputValue);
    taskTitle.textContent = (inputValue.trim());
    console.log(taskTitle.textContent);
    if (taskTitle.textContent === '') {
        task.remove();
        form.reset();
        return;
    };
        
    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.classList.add('task__remove');
    taskRemove.textContent = 'x';
    task.append(taskTitle, taskRemove);
    form.reset();
    
    taskRemove.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('тык на крестик');
        const delTask = taskRemove.closest('.task');
        delTask.remove();
    });
});

/*
form.addEventListener('submit', (event) => {
    console.log('отправка формы submit');
    event.preventDefault();
    button.addEventListener('click', (event) => {
        event.preventDefault();
        let task = document.createElement('div');
        task.classList.add('task');
        taskList.appendChild(task);
    
        let taskTitle = document.createElement('div');
        task.appendChild(taskTitle);
        taskTitle.classList.add('task__title');
        taskTitle.textContent = `${taskInput.value}`;
        
        const taskRemove = document.createElement('a');
        taskRemove.href = '#';
        taskRemove.classList.add('task__remove');
        taskRemove.textContent = 'x';
    //  let taskRemove = `<a href="#" class="task__remove">&times;</a>`;
    //  taskTitle.insertAdjacentHTML('beforeEnd', taskRemove);

        task.append(taskTitle, taskRemove);
        form.reset();

        taskRemove.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('тык на крестик');
            const delTask = taskRemove.closest('.task');
            delTask.remove();

    //     console.log('taskList.children.length = ', taskList.children.length);
        });
    });
});
*/

/* Вариант-2
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) { //если элемент(эвент) из списка(таксЛист) имеет класс таск-ремув, тогда
        event.preventDefault(); // отмена действие браузера по умолчанию
        const task = event.target.closest('.task');
        if (task) {
            task.remove();
        }
    }
});
*/