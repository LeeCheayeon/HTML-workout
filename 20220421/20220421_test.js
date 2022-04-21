// let nuri = "이누리";
// let text = "을/를 좋아합니다.";
// // let chobab = "초밥";
// // let guaja = "과자";

// let foodObject = { //객체가 생겨난 이유 > 하나로 묶음//
//   chobab: "초밥",
//   guaja: "과자",
//   coffee: "커피"
// }

// //알고리즘, 프로그래밍 하기 따라서 객체, 배열, 변수로 얼마든지 바꾸어 사용해도 된다.
// // * 자료 구조
// //* 변수에 작명할때 "데이터 타입"을 살짝 표시해주는 버릇을 가지면 > 애둘러 찾을 필요가 없다
// // "누리라는 변수는 푸드오브젝트라는 객체의 무언가는 가져다쓰겠지" > 예상을 할수있게 된다.
// // ? 값은 별로 중요해지지 않는다.
// // ? 타입이 중요하다

// //추상화 작업 > 푸드오브젝트로 묶은것 

// // console.log(typeof nuri);
// // console.log(typeof text);

// // let stringSum = `${nuri}씨는 ${guaja} ${text}`;
// let stringSum = `${nuri}씨는 ${food.coffee} ${text}`;
// //변수 스트링썸이라는 녀석은 변수 누리라는 변수와 텍스트라는 변수를 앞뒤로 합쳤다. 를 스트링썸 변수에 대입했다.

// console.log(food); //조회 무엇이 있는지 알려줘

// console.log(stringSum);

//------------------------------

let pokemon = ["이상해씨", "이상해풀", "이상해꽃", "파이리", "리자드", "리자몽"]
//배열에는 원소(요소 : element), length값 6인 데이터를 > 변수 포켓몬에 대입했다. 

console.log(pokemon);
console.log(pokemon.length);
//배열의 키값 중에 길이값을 가져오는 length라는 프로퍼티를 접근했다. (가져왔으니까 getter 성격을 가지고 있다.)

console.log(pokemon[3]);
//인덱스 값 []

console.log(pokemon[pokemon.length-1]);
//마지막 값을 -> 길이값의 -1 = 무조건 마지막 원소

//-----------------------------

let three = 3;
console.log(pokemon[three]);

//-----------------------------

let max = `${pokemon[0]} 포켓몬의 최종진화는 ${pokemon[0+2]} 입니다.`;

console.log(max);

//------------------------------

let coffeeArray = ["아메리카노", "카라멜마끼야또", "바닐라라떼", "초코라떼", "연유커피", "코코넛라떼", "스무디", "카푸치노"]

let order = `아빠는 ${coffeeArray[0]}를 좋아하고, 엄마는 ${coffeeArray[0+2]}를, 오빠는 ${coffeeArray[2+3]}를 동생은 ${coffeeArray[coffeeArray.length-2]}를 좋아한다.`;

console.log(order);