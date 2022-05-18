// console.log("test");
// const memberOne = {
//   name: "손만충",
//   gender : "pokemon",
//   age : 58,
//   deskNumber : 30,
//   glasses : true,
//   marride : "dolsing",
//   talmo: false,
//   smartphone : "folder phone"
// }

// const memberTwo = {
//   name: "이채연",
//   gender : "digimon",
//   age : 10,
//   deskNumber : 31,
//   glasses : true,
//   marride : "no",
//   talmo: false,
//   smartphone : "iphone"
// }

// console.log(memberOne.name);
// console.log(memberTwo.name);

// 객체를 찍어주는 거푸집을 만들자
//* 생성자 함수 : constructor function
//* 객체를 찍어내는 거푸집 틀
//* 석고 뜨는 함수

function Member(name, gender, age, deskNumber, glasses, marride, talmo, smartphone){
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.deskNumber = deskNumber;
  this.glasses = glasses;
  this.marride = marride;
  this.talmo = talmo;
  this.smartphone = smartphone;
}

// 생성할거야 = new (생성할 함수 ());
const memberOne = new Member("김주은", "파이리", "14", "32", "none", "maybe", "no","amnia");
console.dir(memberOne);

const testOne = new Date();
console.dir(testOne.getHours());

function ampm(hour,msg) {
  if(hour > 12){
    console.log( msg + (hour-12) +"시 입니다.");
    console.log(memberOne.smartphone);
  }else {
    console.log("오전입니다. : " + hour);
  }
}

ampm(testOne.getHours(), "오후");

// console.dir(Array().);


// 데이트 인스턴트를 가져와서 일주일의 총 시간을 구해보자/???

// const weeks = new Date();
// console.dir(weeks.getDate(weeks.getDate()+7));

function getCurrentWeek(){
  const day = new Date();
  const sunday =day.getTime() - 86400000 * day.getDay();
  day.setTime(sunday);
  
  const result = [day.toISOString().slice(0, 10)];

  for(let i=0; i<7; i++){
    day.setTime(day.getDate()+86400000);
    result.push(day.toISOString().slice(0,10));
  }

  return result;
}

console.log(getCurrentWeek());
