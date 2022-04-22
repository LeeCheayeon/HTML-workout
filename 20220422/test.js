const weeks = ["월요일",'화요일','수요일',"목요일",'금요일','토요일','일요일']

const week = {
  mon : ["일어나기", "밥먹기", "프로젝트 구상하기", "트레이닝-21번 하기"],
  tue : ["일어나기", "밥먹기", "프로젝트 구상하기", "그리드 속성 배우기"],
  wen : ["일어나기", "밥먹기", "프로젝트 구상하기", "프로젝트 마크업하기"],
  the : ["일어나기", "밥먹기", "프로젝트 구상하기", "자바스크립트 연습하기"],
  fri : ["일어나기", "밥먹기", "영화보기","산책하기"],
  sar : ["일어나기", "밥먹기", "낮잠자기","장보기"],
  sun : ["일어나기", "밥먹기", "산책하기", "카페가기"]
}

let order = `나는 ${weeks[0]}에 ${week.mon[2]}를 할 예정이다.`
console.log(order);