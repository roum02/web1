//템플릿 문자열 template strings

//+는 한 쪽만 문자열이라도, 양 쪽을 문자열로 변환하여 병합한다.
//if one of the two is a String, the charicter "Plus" will change the both.

let year = 2018;
let month = 3;
let day = 11;

console.log('생년월일은 '+ year +'년 ' + month + '월' + day + '일');

//이 상황에서 템플릿 문자열을 사용한다면, 가독성을 더 높일 수 있다.
//in the situation, if you use the templet strings, you could read more easy then before.  

console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

let myNumber = 3;

function getTwice(x){
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);

