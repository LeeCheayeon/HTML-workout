let a =1;
let b =2;
let c =3;

function valueTest(){
  if(typeof a === "unmber"){
    console.log("변수 a는 데이터타입이 숫자");
  } 
  else {
    console.log("변수 a는 숫자타입이 아니다");
  }
  
  if(typeof b === "number") {
    console.log("변수 b는 데이터 타입이 숫자");
  } 
  else {
    console.log("변수 b는 숫자타입이 아니다");
  }
}

// valueTest();

// and 연산자 ----------------------------------------

// function valueTestTwo (){
  //   if(typeof a ==="number" && typeof b === "number"){
//     console.log("둘다 숫자입니다.")
//   } else{
//     console.log("다 모르겟찌만 둘중에 하나이거나 둘다 number 가 아닌 경우 입니다.")

//   }
// }

// or 연산자 ----------------------------------------
// function valueTestTwo (){
//   if(typeof a ==="number" || typeof b === "string"){
//     console.log("둘다 숫자입니다.")
//   } else{
//     console.log("다 모르겟찌만 둘중에 하나이거나 둘다 number 가 아닌 경우 입니다.")

//   }
// }

// valueTestTwo();

// function valueTestTwo (){
//   if(typeof a ==="number" && typeof b === "string"){
//     console.log("둘다 숫자입니다.")
//   } else{
//     console.log("다 모르겟찌만 둘중에 하나이거나 둘다 number 가 아닌 경우 입니다.")

//   }
// }

// valueTestTwo();


//if/else 중에 하나가 메인 알고리즘인 경우가 많다.
function valueTestTwo (){
  if(typeof a ==="string"){
    console.log("a는 스트링입니다.")
  } else{
    if(typeof a === "number"){
      console.log("a는 넘버입니다.")

      if(a===1){
        console.log("a는 1입니다.")
      }else {
        console.log("a는 1이 아닙니다.")
        
      }
    } else {
      console.log("a는 스트링이 아닙니다.")
    }
  }
}

valueTestTwo();

// 위와 같은 이런 if문을 만들어본다. b,c 

function valueTestTwo (){
  if(typeof a ==="string" && typeof b === "string" && typeof c === "string"){
    console.log("a는 스트링입니다.")
  } else{
    if(typeof a === "number"){
      console.log("a는 넘버입니다.")

      if(a===1){
        console.log("a는 1입니다.")
      }else {
        console.log("a는 1이 아닙니다.")
        
      }
    } else {
      console.log("a는 스트링이 아닙니다.")
    }
  }
}

valueTestTwo();