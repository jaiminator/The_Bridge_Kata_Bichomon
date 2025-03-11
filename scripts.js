// EJERCICIO 1
console.log(document.title);

// EJERCICIO 2
const titleGen1 = document.getElementById('gen-1');
titleGen1.innerText = "Generasión 1 Pokimon";

//EJERCICIO 3
const gen1Box = document.querySelector('.infocard-list');
gen1Box.style.backgroundColor = 'pink';

//EJERCICIO 4
console.log(document.URL);
console.log(document.domain);

//EJERCICIO 5
const imagesPokemon = document.querySelectorAll('.img-fixed.img-sprite');
console.log(imagesPokemon);

//EJERCICIO 6
imagesPokemon.forEach((imgPokemon) => {
    imgPokemon.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
}) 

//EJERCICIO 7
const pokemones = document.querySelectorAll('.infocard');

pokemones.forEach((flyPokemon) => {
    if(flyPokemon.innerHTML.includes('flying')) {
        flyPokemon.style.backgroundColor = 'lightgrey';
    }   
})