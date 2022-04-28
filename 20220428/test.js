// console.log(5+3);
// console.log(18+4);
// console.log(1554333+45);

// let one = 48545654;
// let two = 394434;
// let thr = 343423488;
// console.log(one+two);
// console.log(thr+two);

// function sum (){
//   return
// }
//여기까지 규칙


// function sum (front, back){

//   return front + back;
//   // 값은 무엇인지 모르겠지만
//   // 어쨌거나 front 와 back을 더해
// }
// console.log(sum(1,2));

// function sum (front, back){
//   console.log(front+back);
// }

// sum(2,3);

// function sum (front, back){
//   front+back;
//   return "a메롱";
// }

// console.log(sum(2,3));

// 틀려도 실행이 된다...?? 


function sum (front, back){

  if(typeof front === true){
    let result = front+back;
    return result;

  }else{
    console.log("당신이 작성한 front 매개변수는 타입이 숫자가 아닙니다.")
  }
}

console.log(sum("소희",3));