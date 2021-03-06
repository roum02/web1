//자바스크립트 자료형
//null : 의도적으로 비워진 값 intenionally empty value
//undefined : 선언을 한 뒤 값이 주어지지 않은 변수 variable with no value

let codeit;
console.log(codeit);

codeit = null;
console.log(codeit);

console.log(null == undefined);
console.log(null === undefined);

let cup;
console.log(cup); //처음부터 비어있는 컵이기 때문에 undefined 값 there is a empty cup from begining. 
cup = '물';
console.log(cup); //물
cup = null;
console.log(cup); //의도적으로 물을 마셨기 때문에 null 값 somebody drank the water in the cup intenionally
