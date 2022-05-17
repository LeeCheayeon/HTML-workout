const { random } = require('pokemon');
const pokemon = require('pokemon');

console.log(pokemon.all());
console.log(pokemon.getName(100, "ko"));

function randomPokemon(minStart, maxArrayLength) {
  let result;
  if(typeof minStart === "number" && typeof maxArrayLength === "number") {
    min = Math.ceil(minStart);
    max = Math.floor(maxArrayLength);
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
  }
}
const getPokemon = pokemon.getName(randomPokemon(1, pokemon.all().length), "ko"); 
console.log(`현재 포켓몬스터는 ${pokemon.all().length}개 있습니다.`);
console.log(getPokemon);

// const addArray = [];
// bam.filter(function(index){
  //   if(index === "Muk"){
    //     addArray.push(index);
//   }
// });

// console.log(addArray);

// let getting = bam.slice(100,105);
// console.log(getting);

// let letter = bam.join("/");
// console.log(letter);

// let named = bam.sort(function(a,b){
  //   return a-b;
  // });
  
  // console.log(named);
  let bam = pokemon.all();
  console.log(bam.length);
  console.log(bam[452]);
console.log(bam.slice(452,453));
  // console.log(Object.values(bam));

// const isNumber= (Element) => Element>407;
// console.log(bam.findIndex(isNumber));

