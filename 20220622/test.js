// 동기 비동기

// 동작 모션을 제어할 때 사용
// event=driven : 이벤트 주도 방식
// -->  이벤트가 일어났을때 무언가 열심히 한다. 
// =============================================================
// 눈에 보이지않음 : 들여다보는 일련의 과정이 필요


// 함수는 최상급 취급을 받기 때문에 언제든지 콜링이 가능하다. 


function text(){
  return `<div>hello</div>`;
}


function section(){
  return `<section>bye</section>`
}

// * 동기 방식 위에서 아래로 순서대로 읽는다.
// console.log(text());
// console.log(section());

// * 비동기 방식 위에서 아래부터 읽지만 효율 때문에 아래에 있는 섹션먼저 호출하고 텍스트를 1초 뒤에 실행
let timerA = setTimeout(()=>{
  console.log(text());
  let timerB = setTimeout(()=>{
    console.log(section());
    // console.log(text());
  }, 0)
}, 1000)

// 순서를 어기는 setTimeOut() : 먼저 완료된것부터 바로 실행 : 위 아래가 없음 (비동기 함수가 기본)
// 순서를 조심해야한다. (setTimeOut,setinterval)

// 함수안의 함수를 넣어서 해결 --> 콜백 지옥 