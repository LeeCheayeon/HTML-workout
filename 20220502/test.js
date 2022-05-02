// console.log("test");

let one; // 변수 선언은 했고, 값은 무엇을 가리키지 않은 상태
1; 
// 식별을 위해서 값과 변수를 '대입'하는 과정을 통한다 =(이퀄표시)
// 변수와 값은 같은게 아니다. 대입을 한 것이다.(가리켜서 지정?? 연결?)

let test = 1; // ? 변수 선언과 동시에 값을 가리켰다. 초기화 되었다.
//? 숫자1 은 어디서 왓나? RAM이라는 메모리에 일단 담긴다.
//? "식별할 방법" === 변수의 큰 의미

//값은 존재하는 상태> 활용이 아직 안된 상태

// 변수를 왜 쓰는가? 
//변수를 사용하지 않으면 데이터 숫자타입 1이라는 저 값을 쓸 방법이 없음.
// console.log(one);


// const two = 1; 
// 변수 선언과 동시에 값도 같이 가리키게 만든다. const의 규칙
// 에러가 났다 === 해결만 한다면 무결해짐 (결점이 없어진다)
// console.log(two);



// console.log(1=="1"); 동등연산자 >  비권장
// console.log(1==="1"); 일치연산자


// let a = 1;
// let b = "2";

// let change = Number(b);
// console.log(typeof change);
// console.log(a===b);
// console.log(typeof a === typeof b);

// let chea = null;
// null= 존재는 하지만 비어있는 값/ 프로그래밍에만 있는 개념 "빈공간"
// null이라는 값이 존재하면 아직 값이 정해지지 않았다.

// console.log(typeof chea);



let arr = ["피카츄", "라이츄", " 파이리", "꼬부기"]

// console.log(typeof arr);
console.log(Array.isArray(arr));
//배열 검색을 하려면 Array.isArray();를 한다.


let text = "나는 잘생긴 공욱재다";

console.log(text[7], text[8], text[9]);
console.log(text.length);
