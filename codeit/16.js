//자바스크립트는 자동으로 형변환을 한다
console.log('4' - true);

//산술 연산
//+연산자는 문자열을 연결하는 기능도 있기 때문에 이를 제외하면, 
//자동으로 숫자로 변환해 계산한다.

console.log(4 + '2'); //문자열 연산
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two'); //NaN 값은 어떤 값과 계산하더라도 NaN 값이 나온다.

//관계 비교 연산
console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1); //NaN 비교가 불가능한 경우이기 때문에 false가 나온다.


//같음 비교 연산( ===: 일치, ==: 동등 )
console.log(1 === '1'); //일치비교는 형변환이 일어나지 않음.
console.log(1 === true);
console.log(1 == '1'); //동등비교는 형변환이 일어남.
console.log(1 == "true");

