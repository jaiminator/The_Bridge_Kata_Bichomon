// EJERCICIO 1
const titleGen1 = document.getElementById('gen-1');
titleGen1.innerText = "Generasión 1 Pokimon";

//EJERCICIO 2
const gen1Box = document.querySelector('.infocard-list');
gen1Box.style.backgroundColor = 'pink';

//EJERCICIO 3
console.log(document.URL);

//EJERCICIO 4
/* console.log(document.domain); */
console.log(window.location.hostname);

//EJERCICIO 5
const imagesPokemon = document.querySelectorAll('img');
console.log(imagesPokemon);

//EJERCICIO 6
imagesPokemon.forEach((imgPokemon) => {
    imgPokemon.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
}) 

//EJERCICIO 7
const pokemons = document.querySelectorAll('.infocard');

pokemons.forEach((flyPokemon) => {
    if(flyPokemon.innerHTML.includes('flying')) {
        flyPokemon.style.backgroundColor = 'lightgrey';
    }   
})