const deleteIcon = () => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', event => {
    const parent = event.target.parentElement;
    parent.remove();

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = parent.querySelector('.task').innerText;
    const index = taskList.findIndex(element => element.value === task);
    taskList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
  });
  return i;
};


export default deleteIcon;
