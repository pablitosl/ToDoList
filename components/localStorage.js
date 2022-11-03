import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

export default function init() {
if(taskList.length !== 0) {
    taskList.forEach(element => {
        const nota = element.value;
        const lista = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        const taskContent = document.createElement('div');

        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = nota;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        lista.appendChild(task);
        
        localStorage.setItem('tasks', JSON.stringify(taskList));
    });
};
};