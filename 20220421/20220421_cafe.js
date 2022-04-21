/*
커피원두 : 20000
우유 : 30000
물 : 100
설탕 : 3000
시럽 : 200
시나몬 : 500
빨대 : 1000
머그컵 : 300000
일회용컵 : 10000000
얼음 : 200000
*/

const itemObject = {
  wondo : 20000,
  mlik : 30000,
  water : 100,
  sugar : 3000,
  sirub : 200,
  cinamon : 500,
  mugcup : 300000,
  takeoutcup : 100000,
  ice : 20000
}

console.log(itemObject);

const americano =  {
  one : itemObject.wondo,
  two : itemObject.water,
  three : itemObject.takeoutcup
}

let americanoPrice = americano.one + americano.two + americano.three ;

console.log(americanoPrice);
console.log(americanoPrice + itemObject.ice);

const mlikcoffee = {
  one: itemObject.wondo,
  two: itemObject.water,
  three: itemObject.mlik,
  four : itemObject.mugcup
}

let mlikcoffeePrice = mlikcoffee.one + mlikcoffee.two + mlikcoffee.three + mlikcoffee.four;

console.log(mlikcoffeePrice);

if(itemObject.sugar !== 2000) {
  console.log("3000원입니다.");
} else {
  console.log("맞습니다.");
}

if(mlikcoffeePrice > 100000) {
  console.log(`밀크커피의 값은 ${mlikcoffeePrice} 원 입니다.`)
} else {
  console.log(`${mlikcoffeePrice} 원 입니다. 구매하시겠어요?`)
}