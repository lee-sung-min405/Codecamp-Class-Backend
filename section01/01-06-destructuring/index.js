//구조 분해달당 예제
const profile = {
    name:"철수", 
    age:25, 
    school:"동의대학교"
}

const {name, school} = profile

console.log(name)
console.log(school)

//1. 일반변수 전달하기
function zzz(aaa){ //const aaa = "사과"
    console.log(aaa) //사과
}

zzz("사과")

//2. 객체 전달하기
function zzz(aaa){ //const aaa = basket
    console.log(aaa)
    console.log(aaa.apple)
    console.log(aaa.banana)
}

const basket = {
    apple:3,
    banana:10,
}

zzz(basket)

//3. 객체 전달하기 => 구조분해할당 방식으로 전달하기
function zzz2({apple, banana}){ //const {apple, banana} = basket
    console.log(apple) // 3
    console.log(banana) // 10
}

const basket2 = {
    apple:3,
    banana:10,
}

zzz2(basket2)