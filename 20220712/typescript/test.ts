let arr :number[] = [3];
let obj:{a:number, b:string} ={
  a:1,
  b:"hello"
}

function gugudan(dan:number, count:number){
for(let i=1; i<=count; i++){
  console.log(dan*i);
}
}

gugudan(5,7);