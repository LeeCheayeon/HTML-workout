
function a(){
  return new Promise(function(resolve, reject){
    // resolve("채연씨 메롱");
    setTimeout(function(){
      console.log("지금 함수a가 실행되었습ㄴㅣ다");
      resolve("성민씨메롱");
    },4000)
  });
}

// console.log(a());
// a();

a().then(function(data){
  // console.log(data);
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
      resolve(data)
    }, 1000);
  });
});

// promise : 약속
// (약속이기때문에) 실행을 일단 멈춘다 : Promise { <pending> } : 대기하다.
// 호출순서를 사람이 작성한 것에 맡기는 것
// 약속이라는 프로미스를 달면 순서를 지키기 시작한다. ==> 순서를 지키게 만들고 싶다면 프로미스를 고려
// 뒤죽박죽 움직이는 셋인터벌과 셋타임아웃을 핸들링하기 편해진다. 
// return달고 뉴 프로미스()를 달고 콜백함수를 달고 --> resolve,reject와 같은 함수를 꺼내 써야하는 상황


a()
  .then(function(data){
    // console.log(data);
    return new Promise(function(resolve,reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
        resolve(data)
      }, 1000);
    });
  })
  .then(function(data){
    // console.log(data);
    return new Promise(function(resolve,reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
        resolve(data)
      }, 1000);
    });
  })
  .then(function(data){
    // console.log(data);
    return new Promise(function(resolve,reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
        resolve(data)
      }, 1000);
    });
  })
  .then(function(data){
    // console.log(data);
    return new Promise(function(resolve,reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
        resolve(data)
      }, 1000);
    });
  })
  .then(function(data){
    // console.log(data);
    return new Promise(function(resolve,reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
        resolve(data)
      }, 1000);
    });
  })
  .then(function(data){
    // console.log(data);
    return new Promise(function(resolve,reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
        resolve(data)
      }, 1000);
    });
  })
  .then(function(data){
    // console.log(data);
    return new Promise(function(resolve,reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
        resolve(data)
      }, 1000);
    });
  })
  .then(function(data){
    // console.log(data);
    return new Promise(function(resolve,reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
        resolve(data)
      }, 1000);
    });
  })
  .then(function(data){
    // console.log(data);
    return new Promise(function(resolve,reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것 입니다.")
        resolve(data)
      }, 1000);
    });
  });

// promise().then().then().then().then().then() ... 
// 리턴에 약속을 달면 순서를 지킨다. 
// then() : 그러고나서~ --> then이 붙은 순서로 계속 순서를 지키게끔 만들수있다.
