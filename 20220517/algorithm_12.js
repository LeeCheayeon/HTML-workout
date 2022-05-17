const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// Todo : Q-1. "of" 라는 문자열이 몇번 나오는지 console에 출력하세요.
// 반복되는 문자열을 찾는 선언
// 내가 작성한 것 ====================================================
let test1 = function(value){
  return value === "of";
};

let ofvalue = dummyText.filter(test1);
console.log(ofvalue);
console.log(ofvalue.length);
// 필터로 결과값을 트루로 만드는 원소들만 구성한 배열을 만들어서 그 배열의 길이값을 구한다. 그 배열의 길이값 = 해당 문자열이 몇번나오는지 알수있음

// 강사님이 작성한 것 ====================================================
//명령문
// let count =0;
// for(let i =0; i<dummyText.length; i++){
  //   if(dummyText[i] === "of"){
//     count++
//   }
// }
// console.log(count);

//선언문
// let count =0;
// let result = dummyText.filter(function(index){
//   if( index === "of"){
  //     count++;
  //     return count;
  //   };
  // });
  // console.log(count);
  
  // Todo : Q-2. "dummy" 라는 문자열 원소를 모두 "sementic" 이라는 단어로 바꾸세요.
  // "dummy"라는 문자열을 찾는 선언과 바꾸는 선언
  // let test2 = function(value){
  //   return value === "dummy";
  // };
  
  // let dummyvalue = dummyText.filter(test2);
  // dummyvalue = "sementic";
  // console.log(dummyvalue);
  
  // console.log(dummyText);
  // console.log(ofvalue.length);
  
  // 강사님이 작성한 것 =================================================
  // let temArr = [];
  let mapping = dummyText.map(function(value, index){
    if(value === "dummy"){
      value = "sementic";
    }
  });

  console.log(mapping);
  // Q. 콘솔로 보이게 찍으려면 어떻게 ()를 작성하지?? 
  // let test = dummyText.map(value => {if(value === "dummy") value = "sementic"}) << 위의 작업을 간소화 한 것.
  // console.log(mapping);
  
  // Todo : Q-3. "the" 라는 원소 다음에 "web" 이라는 단어가 추가되도록 배열을 조정하세요.
  // 강사님이 작성한 것 =================================================
  dummyText.forEach(function(value, index){
    if(value === "the"){
      dummyText[index+1] = "web";
    }
  });

  console.log(dummyText);

// Todo : Q-5. 배열 속 원소들의 총 글자 갯수를 console에 출력하세요.
// 원소들의 총 글자 갯수 = 길이값? 
// 리듀스, 슬라이스, 조인 등등.. 
const countText = dummyText.reduce(function(beforeValue, currentValue){
  return beforeValue + currentValue;
});

console.log(countText);
console.log(countText.length);
// 왜 981이 안나오지???? 