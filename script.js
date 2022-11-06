import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';
import init from './components/localStorage.js';

const btn = document.querySelector('[data-form-btn]');
const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

const createTask = (evento) => {
  evento.preventDefault();
  
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const list = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';

  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);

  const taskObj = {
    value,
  };
  if(value !== '') {
    taskList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }

  if(value !== '') {
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  }
  
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);


//Toggle, para cambiar el color del fondo

const toggle = document.getElementById('btn');
const body = document.getElementById('back');
const redes = document.querySelector('.datos');

toggle.addEventListener("click", () =>{
  if(toggle.checked == true){
    body.classList.add('dark');
    redes.classList.add('redesDark')
  }else{
    body.classList.remove('dark');
    redes.classList.remove('redesDark')
  };
});

init();