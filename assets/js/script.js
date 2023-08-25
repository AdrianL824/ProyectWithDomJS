( () => {
const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks alt gr + }
    
    //Creados un contenedor de html con JS
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    
    const content = `

    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
}

btn.addEventListener("click", createTask);

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask)
    return i;
}

const completeTask = () =>{
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}

})()

// const trash = () = > {
//     <i class="fas fa-trash-alt trashIcon icon"></i>`;
//     const e = document.createElement("i");
//     return e;

// }

//------------------------------------------------
//ideas - pruebas
//Arrow funtions o  funcion anonima

// btn.addEventListener("click" ,(evento) => {
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]');
//     console.log(input.value);
// });