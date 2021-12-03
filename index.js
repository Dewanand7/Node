const superheroes = require('superheroes');
const supervillains = require('supervillains');


superheroes.all;
supervillains.all;
//=> ['Abattoir', 'Able Crown', …]


const mySuperheroName= superheroes.random();
const mySupervillainsName = supervillains.random();
//=> 'Mud Pack'


console.log(mySuperheroName);
console.log(mySupervillainsName);