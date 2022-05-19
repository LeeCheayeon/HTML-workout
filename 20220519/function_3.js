let obj = {
  a:1,
  b:2,
  c:1,
  d:2,
  sum:function(one, two){
    if(typeof one === "number" && typeof two === "number"){
      return one+two;
    }else{
      console.error("데이터타입 입력 오류");
    }
  }
}

// console.log(obj.a === obj.b || obj.a === obj.c);
// console.log(obj.a === obj.b && obj.a === obj.c);
console.log(obj.sum(obj.a , obj.b));