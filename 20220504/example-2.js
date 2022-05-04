
// setInterval(function() {
//   console.log('hello');
// }, 1000);
//1000 = 1초
//1초 마다 hello를 함

let current = 0;
let timer = setInterval(function() {
  current++
  //1증가 후 
  console.log(current);
  // 콘솔 로그 
  //0부터 나올려면 위아래 줄을 변경하면 된다.
  if(current === 60){
    console.log("1분이 경과되었습니다.");
    clearInterval(timer);

  }
}, 16);
