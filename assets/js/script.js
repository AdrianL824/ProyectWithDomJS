const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        console.log(input.value);
    }
console.log(btn);

btn.addEventListener("click" , createTask);


//------------------------------------------------
//ideas - pruebas
//Arrow funtions o  funcion anonima

// btn.addEventListener("click" ,(evento) => {
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]');
//     console.log(input.value);
// });