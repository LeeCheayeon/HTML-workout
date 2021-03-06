
// const pageArr = [1,2,3,4,5,6];
const pageData = ["One", "Two", "Three", "Four", "Five", "Six"]
const buttonData = ["Google", "T", "esc"]
const colorArr = ["#333", "#d4d4d4", "#ff6666", "#333", "#d4d4d4", "#ff6666"]
const contentArr = pageData.slice(2,6);
console.log(contentArr);
// 만들 총 페이지 수? 

//root 요소 식별
const root =document.getElementById("root");

function crateElem(backColor, idName, tagName){
  const odject ={
    style : backColor,
    idName : idName,
    tagName : tagName
  }

  return `
  <${odject.tagName} id="${odject.idName}" style = "background-color : ${odject.style}">${idName}</${odject.tagName}>
  `;
}

//pageData만큼 페이지 생성
function pageMaker(array, tagname, backColor){
  let result = '';
  array.forEach((value) => {
  //result += `<${tagname} id="${value}">${value}-${index}</${tagname}>`
  result += crateElem(backColor,value,tagname);
  });
  return result;
};

// 오류 예방으로 윈도우 로드 
window.addEventListener("load", function(){
  //root.innerHTML에 pageMaker생성 
  this.document.body.style.padding = 0;
  this.document.body.style.margin = 0; 
  root.innerHTML = pageMaker(pageData,"div","#ff6666");

  // 생성된 페이지 요소 식별
  const pages = Array.from(this.document.querySelectorAll("#root>div"));
  pages.forEach((value,index)=>{
    value.style.width = "10vw";
    value.style.height = "10vw";
  });
  root.addEventListener("click",function(event){
    let elem = document.getElementById(`${event.target.id}`);
    console.log(elem.id);
    console.log(event.target.id);
  
  if(event.target.id === elem.id && elem.id !== "root"){
    // root를 만약 잘못 클릭하면 pages가 전부 사라지므로 조건을 더 붙였다.
    console.log("같음");
    event.target.style.display = "block";
    pages.forEach((value)=>{
      if(value.id !== event.target.id){
        value.style.display = "none";
      }
    });
    if(elem.id === "Two"){
      //두번째 페이지에서 여러 요소가 만들어져야하므로 추가로 넣어둠
      event.target.innerHTML = pageMaker(contentArr, "div","#333");
      // 2번째 페이지에 3~마지막 페이지 버튼이 있어야해서 생성함
      const contentsBox = document.querySelector("#Two");
      // 2페이지를 식별
      contentsBox.addEventListener("click", function(event){
        // 2페이지에 클릭이벤트
        console.log(event.target.id);
        for(let i=0; i<pageData.length; i++){
          console.log(pages[i].id);
          if(event.target.id === pages[i].id){
            // 만약 이벤트 타겟의 아이디와 페이지들 i번째의 id와 같다면
              console.log("dlTek");
              pages[i].style.display = "block";
              // 페이지i번째의 디스플레이를 "block"으로 바꿔줘
              pages[i].innerHTML = pageMaker(buttonData, 'div', '#ff6666');
            }
          }
        });
      }else if(event.target.id === "esc"){
        // 만약 이벤트 타겟의 아이디가 esc라면 
        event.target.style.display = "none";
        console.dir(event.target);
        console.log(pages[1].style.display);
        pages[1].style.display = "block";
      }
    }
  });
});