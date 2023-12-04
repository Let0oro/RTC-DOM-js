/*
1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
*/

const createEl = (tag) => document.createElement(tag);

// 1
const b1 = createEl('button');
b1.id = 'btnToClick';
b1.innerText = 'ButtonEffect'
b1.addEventListener('click', e => {
    e.preventDefault();
    console.log(e)
})
document.body.appendChild(b1);

// 2
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', e => {
    e.preventDefault();
    console.log(e.target.value)
})

// 3
const inputInput = document.querySelector('.value');
inputInput.addEventListener('input', e => {
    e.preventDefault();
    console.log(e.target.value)
})