// 1. let a = 0;
// 변수 a는 숫자값 0이 되어있다.
// 일정 시간이 지나면 숫자가 1씩 증가한다.
// 2. 숫자가 10이 되면 증가하는 것이 멈춘다.

// setInterval() : 인터벌을 쓰면 될것같은데... 
// 시도를 한번 해보자 > 한번에 안써지는 것 이 정상

let a = 0;

let test = setInterval(function(){
  console.log(a);
  a++;
  if(a === 10){
    console.log("hello");
    a=0;
    console.log(a);
    // clearInterval(test);

  }
},1000)


//10이 되면 다시 0이 되게해줘.