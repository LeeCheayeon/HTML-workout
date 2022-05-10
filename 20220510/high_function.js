// 고차함수  : 제작자가 만드는 것
// higher order function
// 알고리즘 제작법

// function typeA (){
//   console.log("아이키커");
// }

// typeA();

// typeB();
// // 언제 선언을 해도 최상위이기 때문에 호출보다 아래 선언해도 호출이 된다.

// function typeB (){
//   console.log("백두산 호랭이");
// }

//-------------------------------------------------------------------------

// function typeA (){
  //   console.log("아이키커");
  // }
  
  // // 언제 선언을 해도 최상위이기 때문에 호출보다 아래 선언해도 호출이 된다.
  
  // function typeB (){
//   //타입비의 함수 알고리즘은 
//   // 무슨 문자열을 콘솔에 찍은 다음
//   // 타입 에이 함수를 호출해준다.
//   console.log("백두산 호랭이");
//   typeA();
// }
// typeB();

//-------------------------------------------------------------------------

function typeC (target){
  target.addEventListner("click", () => {});
  target.addEventListner("scroll", () => {});
  target.addEventListner("wheel", () => {});
}
// () => {} === function(){}

// typeC(root);
// typeC(items);

// 바인딩한다.
// 여러가지 함수를 하나로 묶어 사용할수있다?

//-------------------------------------------------------------------------

// 객체로 묶어서 관리한다.
const typeP = {
  ObjectA : function(string){
    console.log(string);

  },
  ObjectB : function(){

  }
}

// typeP.ObjectA("hello");
console.log(console.table("hello", function(){console.log('bye')}));