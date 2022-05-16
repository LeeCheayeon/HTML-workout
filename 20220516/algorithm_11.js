const pokemonList = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '또가스'];

// todo : Q. pokemonList의 총 길이값이 얼마인지 프로그래밍을 통해서 console에 출력하시오.
console.log(pokemonList.length);
// console.log(pokemonList.length-1); // 이건 배열(인덱스)값

// let isStatus =true;
// let count =0;
// while(isStatus === true && count <5){
//   // while : !하는 동안에 , 횟수제한이 없음
//     console.log("test");
//     if(pokemonList[count] !== ""){
//       count++
//     }
// }


// todo : Q. "야도란" 이라는 원소(element)가 몇번째에 있는지 프로그래밍을 통해서 console에 출력하시오.
console.log(pokemonList[5]);
// 야도란이라는 원소가 몇번째에 있는지 알려면 문자열 야도란이 몇번째인지 알려줘 같은걸 작성해야할것같은데...  
// console.dir(pokemonList);

//선언형 프로그래밍
//IndexOf("찾을문자") 함수는 문자열의 왼쪽부터 시작하여 찾을 문자와 일치하는 최초의 문자의 Index를 반환하는 함수입니다.
let result_indexOf = pokemonList.indexOf("야도란");
console.log(result_indexOf);

// lastIndexOf() 함수의 경우는 IndexOf()와 비슷한 기능을 제공하지만, 차이점은 찾을 문자를 문자열 오른쪽에서부터 찾는다는 점입니다.
let result_lastIndexOf = pokemonList.lastIndexOf("야도란");
console.log(result_lastIndexOf);

//명령형 프로그래밍
for(let i = 0; i<pokemonList.length; i++){
  if(pokemonList[i] === "야도란")
  console.log(i);
}

// todo : Q. "야도란" 이라는 원소(element)를 "메타몽" 이라는 string으로 변환하여 배열 전체를 console을 통해 조회하시오.

for(let i = 0; i<pokemonList.length; i++){
  if(pokemonList[i] === "야도란");
  pokemonList[i] = "메타몽";
  console.log(pokemonList);
}
//array.splice("시작위치", "제거건수", ["요소1", "요소2" ... ])
// splice 함수는 요소를 제거 후 해당 위치에 새로운 요소를 추가할 수 있다.
// pokemonList.splice(5,1,"메타몽");
// console.log(pokemonList);

// todo : Q. "리자몽"을 pokemonList 맨 마지막 원소로 프로그래밍을 통해 추가하시오.

pokemonList[pokemonList.length] = "리자몽"
// pokemonList.push("리자몽");
console.log(pokemonList);