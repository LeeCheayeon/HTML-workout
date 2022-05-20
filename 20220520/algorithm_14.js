const arr = [ "a", "b", "c"];
// 위와 같은 배열이 있다.
// 
// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?

// let bam = arr[0];
// console.log(bam); //a 
// console.log(arr.splice(0,1));
// arr.push(bam);

// 강사님 ===============================================================
// arr.push(arr[0]);
// console.log(arr);

// arr.unshift(arr[2]);
// arr.unshift(arr[arr.length-1]);
// console.log(arr);


// arr.push(arr[0]);
// console.log(arr);
// arr.shift();
// console.log(arr);

let temp;
temp = arr[0];
console.log(temp);
arr.shift();
console.log(arr);
arr.push(temp);
console.log(arr);
// ======================================================================


// console.log(arr);
// let arrChange1 = arr.splice(0,1);
// console.log(arrChange1);
// const arrtest = arr.splice(2,0);
// console.log(arrtest);

// 인터넷 코드 ==>> 이해가 어려움 
// myarr = [1, 2,3,4,5]
// const changeArrOrder = function(list, targetIdx, moveValue){
  //   if(list.length < 0) return;
  //   // 배열 값이 없는 경우 나가기
  
  //   const newPosition = targetIdx + moveValue;
  //   //이동할 인덱스 값을 변수에 선언
  //   if(newPosition < 0 || newPosition >= list.length) return;
  //   // 만약 이동할 값이 0보다 작거나 최대값을 벗어나는 경우 종료;
  
  //   const tempList = JSON.parse(JSON.stringify(list));
  //   // 임의의 변수를 하나 만들고 배열 값 저장
  //   const target = tempList.splice(targetIdx,1)[0];
  //   // 옮길 대상을 타겟 변수에 저장
  //   tempList.splice(newPosition, 0, target);
  //   //새로운 위치에 옮길 대상 추가하기
  //   return tempList;
  // }
  
  // changeArrOrder(myarr, 1, 3);
  
  // 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?
  // let bam2 = arr[2];
  // arr.splice(2,1);
  // arr.unshift(bam2);
  
  // console.log(arr);
  
// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?
// let bam3 = arr[1];
// arr.splice(1,1);
// arr.unshift(bam3);

// console.log(arr);