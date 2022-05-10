const typedTextSpan = document.querySelector(".typed-text");
// 변수를 지정해줬다. 클래스 .typed-text
const cursorSpan = document.querySelector(".cursor");
// 변수를 지정해줬다. 클래스 .cursor

const textArray = ["hard", "fun", "a journey", "LIFE"];
// 변수 textArray는 배열[] 
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
// 변수를 선언 숫자 값

// 기명함수 같음
function type() {
  // 함수 type () (느낌상 작성하는 함수 타이핑)
  if (charIndex < textArray[textArrayIndex].length) {
    // 만약 charIndex가 textArray[변수 textArrayIndex]의 길이 값보다 작다면
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    //?? if 앞에 !는 무엇이지?? 
    // 만약 ! cursorspan의 클래스 리스트에 "typing"이 있다면? 
    // cursorspan 클래스 리스트에 "typing"을 추가해줘(?)
    // 읽어본 결과 if문을 ~있다면으로 해석했는데 아래 추가를 해달라는 말을 보면
    // !는 부정인걸까?? >> 만약 ~~없다면으로 해석을 해야하나?? 
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    //?? +=은 무슨 의미일까?? 
    //?? charAt();도 무슨 뜻이지?? 
    // typedTextSpan의 텍스트 컨텐츠 +=(??) 추가해달라는 의미인가?
    // textArray의 [변수 textArrayIndex 값] 배열의 charAt(charIndex)를 추가해줘?? (추가해달라는 건 유추...)

    charIndex++;
    // charIndex를 1씩 증가
    setTimeout(type, typingDelay);
    // ?? setTimeout은 무엇이지? setinterver과 비슷한 건가?? 
    // setTimeout 를 한다(?) 함수 type, typongDelay=200? (셋인터벌과 같은 시간을 나태나는 숫자인가?? )
  } 
  else {
    // 만약 charIndex가 textArray[변수 textArrayIndex]의 길이 값보다 작지않다면
    cursorSpan.classList.remove("typing");
    //cursorSpan의 클래스리스트 에 "typing"을 지워줘
  	setTimeout(erase, newTextDelay);
    // ?? setTimeout은 무엇이지? setinterver과 비슷한 건가?? 
    // setTimeout 를 한다(?) 함수 erase, newTextDelay=200? (셋인터벌과 같은 시간을 나태나는 숫자인가?? )
  }
}


// 기명함수 
function erase() {
  //함수 erase () (왠지 영어 느낌상 지우는 함수)
	if (charIndex > 0) {
    // 만약 charIndex가 0보다 크다면
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    //?? !표가 무엇일까? 느낌상 아마 부정으로 추측
    // 만약 cursorSpan의 클래스 리스트에 "타이핑"이 없다면?
    // cursorSpan의 클래스리스트에 "타이핑"을 추가해줘.
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    // ?? substring(0, charIndex-1)은 무엇이지?? 
    // typedTextSpan의 텍스트컨텐츠의 값은
    // 변수 텍스트어레이의 배열[변수 텍스트어레이인덱스의 값]의 서브스트링(0, charIndex-1)이야.
    charIndex--;
    // charIndex를 1씩 감소시켜줘
    setTimeout(erase, erasingDelay);
    // setTimeout을 한다? 함수 erase를, erasinfDelay동안?
    // 무언가 지우는딜라이돌안 함수erase을 실행한다?? 
  } 
  else {
    // 만약 charIndex가 0보다 크지 않다면
    cursorSpan.classList.remove("typing");
    // cursorSpan의 클래스리스트의 "typing"을 지워줘
    textArrayIndex++;
    // textArrayIndex를 1씩 증가 시켜줘
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    //만약 textArrayIndex가 textArray의 길이값보다 크거나 같다면
    // textArrayIndex = 0
    setTimeout(type, typingDelay + 1100);
    // setTimeout 함수 type를, 변수 typingDelay의 값에 1100을 합친값만큼(?) 
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  // ?? "DOMContentLoaded"는 뭘까?? 
  // document니까 문서를 열면 이벤트가 시작되는 건가??
  if(textArray.length) setTimeout(type, newTextDelay + 250);
  // 만약 textArray의 길이값이면 
  // setTimeout 함수 type를 newTextDelay의 값과 250을 합한 값만큼?? 
});


// -------------------------------------------------------------------
// 1.  if 앞에 !는 무엇이지?? 

// 2.  +=은 무슨 의미일까?? 
// 더하기 할당 bar=5 , bar+=1 ==> 6 (bar(5)+1)
// 오른쪽 피연상자의 값을 변수에 더한 결과를 다시 변수에 할당
// x += y  ==> x = x+y값

// 3.  setTimeout은 무엇인가??
// 시간지연함수 let ID = setTimeout(function[ ,delay])
// 함수, 주어진함수 또는 코드를 실행하기전에 기다릴 밀리초단위 시간
// ~ 동안이 아니라 기다리라는 의미였다 n00초 후 함수 실행시켜줘 같은 의미
//어떤 함수를 몇 밀리초마다 반복적으로 호출해야 할 필요가 있으면 setInterval()을 사용한다. setTimeout()은 비동기 함수로서, 함수 스택의 다른 함수 호출을 막지 않습니다. 달리 말하자면, setTimeout()을 사용해서 다음 함수 호출을 "일시정지" 할 수는 없습니다.

// 4.  charAt();도 무슨 뜻이지??
// 5.  substring(0, charIndex-1)은 무엇이지?? 

//1. charAt(인수) - 인수번째의 문자를 읽어 냅니다.
// 예) "javascript".charAt(2)에는 'v'가 읽어 집니다. 0부터 시작하기 때문에 3번째인 'v'가 읽어 집니다.

// 2. indexOf(인수) - 인수가 들어있는 위치를 알려 줍니다.
// 예) "javascript".indexOf("s")에는 4가 읽어 집니다. 0부터 시작하기 때문입니다.(lastIndexOf는 뒤에서부터 셈)

// 3. substring(인수, 인수) - charAt은 문자하나를 읽어내지만 substring은 문자열을 읽어 냅니다.
// 예) "javascript".substring/(1, 3)은 "ava"를 추출해냅니다.  0부터 시작하기 때문입니다.


// 6.  "DOMContentLoaded"는 뭘까?? 
// DOMContentLoaded 이벤트는 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생합니다. 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않습니다.