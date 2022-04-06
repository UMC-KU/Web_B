const 변수1 = '코딩'; //변하지 않음
let 변수2 = '자바스크립트'; //재할당 가능

변수2 = 'html';

//---------

//데이터 타입
//1. string : 문자열

const str = 'hello';
const str2 = "hi";
const num = '2!!';

//2.number : 숫자
const number = 2;

//3. bigInt : 큰 값의 숫자

//4. boolean : true, false
const bool = true;
const bool1 = false;

//5. symbol 중복되지 않는 고유한 값

//6. null / undefined
const a = undefined;
const b = null;

let variable;
console.log(variable);

//8. object : 객체 함수, 배열, 객체

//-------
//1. 산수연산자 : 
const aa = 10%3;
console.log(aa);

const bb = 10 **2;
console.log(bb);

let cc = 5;
cc += 10;
console.log(cc);

cc -= 8;
console.log(cc);

//2. 할당 연산자 : =

//3. 문자열 연산자 : +

let data = 'happy' + ' ' + '2022';
console.log(data);

data += '!!';
console.log(data);

//비교 연산자 : 
//1. ==(대충 비교) or ===(엄격하게 비교) : 서로 같은지 확인, 같다면 true
// 1 == '1' > true
// 1 === '1' > false
// null == undefined > true
// null === undefined > false

// !=, !==

// 1 != '1' > false
// 1 !== '1' > true

//2. 부등호 연산자 >, <, >=, <=

//문자열의 경우 알파벳 길이가 긴 것이 더 크다고 판단

//논리 연산자 : &&, ||, ! (부정)
