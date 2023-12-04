/*
1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.
*/

const ulList = () => document.createElement('ul');
const createElem = (tag) => document.createElement(tag);

// 1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulListCountries = ulList();
countries.forEach((country) => {
    const li = document.createElement('li');
    li.innerText = country;
    ulListCountries.appendChild(li);
})
document.body.appendChild(ulListCountries);


// 2
const toRemove = document.querySelector('.fn-remove-me');
toRemove.parentElement.removeChild(toRemove);

// 3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ulListCars = ulList();
cars.forEach((car) => {
    const li = document.createElement('li');
    li.innerText = car;
    ulListCars.appendChild(li);
})
document.querySelector('[data-function=printHere]').appendChild(ulListCars);

// 4
const countriesFixed = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
countriesFixed.forEach(({title, imgUrl}) => {
    const div = createElem('div');
    div.classList.add('countryDiv')
    const h4 = createElem('h4');
    const img = createElem('img');
    h4.innerText = title;
    img.src = imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
})

// 5
const buttonRemove = createElem('button');
buttonRemove.innerText = 'Remove div';
buttonRemove.addEventListener('click', () => {
    const divList = document.getElementsByClassName('countryDiv');
    divList[divList.length-1].remove();
});

// 6
const listCountryDiv = [...document.getElementsByClassName('countryDiv')];
listCountryDiv.forEach(div => {
    const rvButton = createElem('button');
    rvButton.innerText = 'Remove';
    rvButton.addEventListener('click', e => {
       e.preventDefault();
        const div = e.target.parentElement;
        div.remove();
    })
    div.appendChild(rvButton);
})
