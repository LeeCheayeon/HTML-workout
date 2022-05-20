const pokemon={
  a: "꼬부기",
  b: "파이리",
  c: "치코리타",
  d: "리자몽"
}

// console.log(pokemon["a"]); // 원형
// console.log(pokemon.a); // 변형

// for(let props in pokemon){
//   // console.log(typeof props);
//   // console.log(pokemon.a);

//   console.log(typeof props);
//   console.log(pokemon[props])
//   // 배열처럼 보이지만 배열이 아니다. [props] => 문자열
//   // forin문, forof문 => 객체의 키값을 이야기
//   // 표기법(작성법)이 다르다는 것을 이해하면 된다. 
// }

// for(let props of pokemon){
//   console.log(props);
//   // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
// }

// 값들만 가지고 배열을 만들고 싶음
let pokemonArr = [];
for(let props in pokemon){
  console.log(pokemon[props]);
  pokemonArr.push(pokemon[props]);
}
console.log(pokemonArr);

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
