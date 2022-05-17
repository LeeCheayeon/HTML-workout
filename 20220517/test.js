const arrExample = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란" , "피존투", "또가스", "우린", "서로", "모습은", "달라도"]

// 쪽지시험 제출한 부분 =====================================================
//push() -----------------------------------------------------------------
// arrExample.push("우리는");
// console.log(arrExample);

//pop() -----------------------------------------------------------------
// arrExample.pop();
// console.log(arrExample);

//shift() -----------------------------------------------------------------
// arrExample.shift();
// console.log(arrExample);

//unshift() ----------------------------------------------------------------
// arrExample.unshift("포켓몬");
// console.log(arrExample);

//indexOf() ----------------------------------------------------------------
// let arrIndexOF = arrExample.indexOf("버터풀");
// console.log(arrIndexOF);

//splice() ----------------------------------------------------------------
// arrExample.splice(3,2,"이상해씨", "이상해풀");
// console.log(arrExample);

//slice() ----------------------------------------------------------------
// let slice = arrExample.slice(2,5);
// console.log(slice);

//concat()--------------------------------------------------------------
// ** 다수의 배열을 합치고 병합된 배열의 사본을 반환.
// let arr1 = [2,4,5];
// let arr2 = [7,6,8];
// let arr3 = arr2.concat(arr1);
// console.log(arr3);


// 쪽지시험 미제출한 부분 ===================================================

//1. forEach() : 주요 인수(argument)와 기능에 대해 설명하세요. 
// 배열을 각 원소별로 지정된 함수를 실핸한다. // for()처럼 반복적인 기능을 수행할때 사용 // return이 없어서 결과값을 내놓고 싶으면 함수 박의 변수를 사용
let arr = [1,2,3,4,5,6,7,8,9,10];
let addArray = [];
arr.forEach(function(element){
  if(element%2==1){
    addArray.push(element);
  }
});

console.log(addArray);
//[ 1, 3, 5, 7, 9 ]


//9. from() : 주요 인수(argument)와 기능에 대해 설명하세요. 
//유사 배열 객체나 반복 가능한 객체를 복사해 새로운 Array 객체를 만든다.
console.log(Array.from("banana"));
//[ 'b', 'a', 'n', 'a', 'n', 'a' ] 


//10. isArray() : 주요 인수(argument)와 기능에 대해 설명하세요.
//배열인지 아닌지 확인을 하는 기능 배열이면 true, 아니면 false
console.log(Array.isArray([1,2,3,4])); //true
console.log(Array.isArray({foot:2})); //false


//11. at() : 주요 인수(argument)와 기능에 대해 설명하세요.
//정수 값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환합니다. 양수와 음수 모두 지정할 수 있고, 음수 값의 경우 배열의 뒤에서부터 인덱스를 셉니다.
let array2 = [5,12,46,56,170,80];
let index = 2;

console.log(`Using an index of ${index} the item returned is ${array2.at(index)}`);
//Using an index of 2 the item returned is 46

index = -2;
console.log(`Using an index of ${index} item returned is ${array2.at(index)}`);
//Using an index of -2 item returned is 170


//13.every()  : 주요 인수(argument)와 기능에 대해 설명하세요.
//모든 배열에 지정된 함수를 모두 실행하여 모든 값이 true일때 true, 하나라도 false가 나온다면 false가 나온다. 
let bam = [1,2,3,4,5,6,7,8,9,10];
let bamValue = function(value){
  return value %2 === 0;
  // value가 2의 배수이면 true.
};
console.log(bam.every(bamValue)); // false 
// 변수 bam의 모든 배열을 bamValue라는 함수에 넣어 테스트를 모두 통과 했는지 콘솔로그로 찍어줘. (??)
//라는 의미가 맞나??? 


//14. filter()  : 주요 인수(argument)와 기능에 대해 설명하세요.
// 필터 : 걸러낸다
// 지정된 함수의 결과값을 true로 만드는 원소들로만 구성된 별도의 배열을 반환
let foot = [1,2,3,4,5,6,7,8,9,10];
let footValue = function(value){
  return value %2 === 0;
};

let newFoot = foot.filter(footValue);
console.log(newFoot); //[ 2, 4, 6, 8, 10 ]
// = console.log(foot.filter(footValue));


//15. findIndex()  : 주요 인수(argument)와 기능에 대해 설명하세요. 
//주어진 판별함수를 만족하는 배열의 첫번째요소에 대한 인덱스를 반환한다.
//만족하는 값이 없으면 -1을 반환한다.
let arr4 = [5,3,14,100,44,555];

const LageNumber = (element)=> element>13;
//function(element){element>13};
console.log(arr4.findIndex(LageNumber)); // 2 => 14


//16. includes()  : 주요 인수(argument)와 기능에 대해 설명하세요.
// 배열에 특정 요소를 포함하고 있는지 판별
let pets = ["cat", "dog", "rabbit"]
console.log(pets.includes("cat")); // true
console.log(pets.includes("bat")); // false


//17. join()  : 주요 인수(argument)와 기능에 대해 설명하세요.
// 배열 원소 전부를 하나의 *문자열*로 합친다(?)
let her = [1,2,3,4,5,6];
console.log(her.join("/")); //  1/2/3/4/5/6


//18. map  : 주요 인수(argument)와 기능에 대해 설명하세요. 
//배열의 각 원소별로 지정된 함수를 실행한 결과(T/F)로 구성된 새로운 배열을 반환
let gee = [1,2,3,4,5,6];
let geeValue = function(value){
  return value %2 === 0;
};
console.log(gee.map(geeValue)); 
//[ false, true, false, true, false, true ]


//19. reduce()  : 주요 인수(argument)와 기능에 대해 설명하세요. 
//배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
const array = [1,2,3,4];
const initialValue = 0;
const sumWithInitial = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial); //10 


//20. some()  : 주요 인수(argument)와 기능에 대해 설명하세요.
//모든 배열에 지정된 함수를 모두 실행하여 값이 하나라도 true가 나온다면 true가 나온다. 값이 나올때까지 반복실행한다고 한다(?)
let see = [1,2,3,4,5,6,7,8,9,10];
let seeValue = function(value){
  return value %2 === 0;
  // value가 2의 배수이면 true.
};
console.log(see.some(seeValue)); // true

//21. sort()  : 주요 인수(argument)와 기능에 대해 설명하세요.
// 정렬순서를 정의하는 함수 / 알파벳순서 또는 지정된 함수에 따른 순서로 정렬
// 모든 원소를 문자열로 취급해 사전적으로 정렬한다.
let need= [4,5,7,8,2,1];
need.sort(function(a,b){
  return a-b; // 오름차순 정렬
});
console.log(need); //[ 1, 2, 4, 5, 7, 8 ]


//22. toString()  : 주요 인수(argument)와 기능에 대해 설명하세요.
// 배열을 문자열로 바꾸어 반환(리턴)한다. * 배열 >> 문자열
let change = [3,4,5,6,8];
console.log(change.toString()); // 3,4,5,6,8


//23. values()  : 주요 인수(argument)와 기능에 대해 설명하세요. 
//전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴한다. 객체 >> 배열로 반환(?)
let object = {
  a:"someting",
  b:42,
  c:false,
  d:"bam"
};

console.log(Object.values(object)); //[ 'someting', 42, false, 'bam' ]