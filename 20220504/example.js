
//기명(이름이 있는) 함수 방식, 함수 선언방식
function textMachine(startValue, endValue, textValue){
  //읽는 방식 때문에 위에서 아래로 읽는다.
  
  
  
  for(let i=startValue; i<=endValue; i++){
    console.log(textValue);
  }
  // 함수는 아래 이것을 해결한 뒤 그 다음으로 넘어간다.
  // 여기서 해결을 못하면 에러가 나온다.


  return "aasd"
  //윗부분을 읽고 해결한 뒤에 return값을 내뱉는다.
}

// textMachine (1, 20, 'hello');
// textMachine (3, 10, 'bye');

// console.log(textMachine(2,2,"text"));

// function textMachine(startValue, endValue, textValue){
//   let result = textValue;

//   for(let i = startValue; i<= endValue; i++){

//   }

//   return result;
// }

// console.log(textMachine(1,2,"콘솔"));

// function a(){
  // console.log('test');
  // return "메롱";
// }

// a ();
// console.log(a());

function b (first, second){
  // console.log(first+second);
  //함수에서 더한 다음에 실행값만 보여주고 끝
  if(typeof first === "number"){
    //변수 타입이 숫자여야만 실행이 된다(?)
    // "타입체크"
    return first-second;
  } else {
    console.error("첫번째 매개변수 타입이 숫자가 아닙니다.")
  }
}

console.log(b("qdd",2));
// b(1,2);
//함수를 실행한 결과값을 꺼내줘?






// let a = 1;
// console.log(a);
// 파일 안에 메모리에 있는 값, 글로벌 하다고 말한다. 
// 언제든지 꺼내 쓸 수 있다. ==> 무거움
// 전역(?) 변수

// function b (){
  // 함수b의 목적이 콘솔 찍고 종료하는 기계
  // return 값은 없다. >> undefined값이 리턴된다.
  // console.log(a);

  // let c = "이지은";
  //리턴을 해야만 꺼내올수있다.
  //지역변수 ==> 가볍다(?)
//   return c;
// }
// 함수 중괄호 안의 부분을 로컬(지역) 


// console.log(b());