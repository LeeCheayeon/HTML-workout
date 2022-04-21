const itemObject = {
  home:"집",
  chat:"챗바퀴",
  food:"사료",
  bath:"화장실",
  under:"배딩"
}

console.log(itemObject);

const list = {
  a : itemObject.home,
  b : itemObject.chat,
  c : itemObject.food,
  d : itemObject.bath,
  e : itemObject.under,
}

let listCheak = list.a + list.b + list.c + list.d;

console.log (listCheak);
console.log (`햄스터를 키우는데 필요한 물건은 ${list.a}과 ${list.b}, ${list.c}가 있습니다. `);

let listCheak2 = `햄스터는 ${itemObject.home}에서 ${itemObject.food}를 먹습니다.`

console.log(listCheak2);
