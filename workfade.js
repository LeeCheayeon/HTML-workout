//기본값
//0이 100으로 바뀐다 라고 생각
let value = 0;
// 변수선언과 동시에 값을 대입했다 : 초기화햇다
// initialize, init
// value =100;
// 값을 새로 할당했다. (assignment)
// = (대입연산자를 활용해서 할당)
// console.log(value);

// setInterval(function(){},interval);
// 첫번째 파라미터(매개변수)함수, 매개변수 자리에 실행할 함수가 자리잡은 것을 "콜백함수" = callback function
// callback function hell : 굉장히 헷갈리는 포인트가 있게 될 것 (하다보면(?))

// ---------------------------------------------------------------------

// let interval = 1000;
// setInterval(function(){
//   console.log(value);
//   // value++;
//   // 증가연산자를 1씩 증가를 안 하고 싶을 때
//   value = value + 2;
//   // value 값에 +2를 더한 후 그 값을 value로 하겠다.
//   value +=2;
//   // 위의 식(value = value + 2;)과 같은 의미 축약형
// },interval);

// ---------------------------------------------------------------------

let interval = 100;
const timer = setInterval(function(){
  //함수를 변수에 담수에 담는 패턴 = 함수 리터널, 함수 표현식
  //setInterval를 식별하기 위해 변수를 대입했다.
  //변수 timer는 함수 setInterval을 가리킨다.
  console.log(value);
  value++;

  if(value > 100){
    // === 는 것보다  > 넉넉하게 커지면~ 이라고 사용하는 편
    clearInterval(timer);
  }
  
},interval);
// ---------------------------------------------------------------------