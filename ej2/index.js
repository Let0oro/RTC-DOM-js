/*
1.1 Inserta dinamicamente en un html un div vacio con javascript.

1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.

1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.

1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here
*/


// 1
const newDiv = () => document.createElement('div');
const div1 = newDiv();
document.body.appendChild(div1);

// 2
const newP = () => document.createElement('p');
const p1 = newP(); 
p1.innerText = 'p';
const div2 = newDiv(); 
div2.appendChild(p1);
document.body.appendChild(div2);

// 3
const newPInDiv = (text, times = 1, inDiv = true) => {
    const div = newDiv();
    const p   = newP();
    for (let i = 0; i < times; i++) {
        p.innerText += text;
    }
    if (!!inDiv) {
        div.appendChild(p); 
        document.body.appendChild(div)
        return;
    }
    document.body.appendChild(p)
}

const pd1 = newPInDiv('p', 6);

// 4 
const pd2 = newPInDiv('Soy dinámico!', 1, false)

// 5
const h2Insert = document.querySelector('.fn-insert-here');
h2Insert.innerText = 'Wubba Lubba dub dub';

// 6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulList = document.createElement('ul');
apps.forEach((app) => {
    const li = document.createElement('li');
    li.innerText = app;
    ulList.appendChild(li);
})
document.body.appendChild(ulList);

// 7
function removeElements(selector) {
    const listToRemove = document.querySelectorAll(selector);
    const parentElem = listToRemove[0].parentElement;
    listToRemove.forEach(elem => {
        parentElem.removeChild(elem);
    });
    return;
}
removeElements('.fn-remove-me');

// 8
const insertInMid = document.querySelectorAll('div');
const newP2 = newP();
newP2.innerText = 'Voy en medio!';
insertInMid[0].insertAdjacentElement('afterend', newP2);

// 9
const insertTextInDiv = document.querySelectorAll('.fn-insert-here');
insertTextInDiv.forEach(div => {
    const p = newP();
    p.innerText = 'Voy dentro!';
    div.appendChild(p);
})