//1. 문자/숫자/불린 기본타입
const getPrimitive = (name :string , arg:number, bool:boolean):[boolean, number,string] => {
    return[bool, arg, name]
} 

const result = getPrimitive("철수", 123, true)
console.log(result)


//2.any 타입
const getAny = (name :any , arg:any, bool:any):[any, any,any] => {
    return[bool, arg, name]
} 

const result2 = getAny("철수", 123, true)
console.log(result)


//3.unknown 타입
const getUnknown = (name :unknown , arg:unknown, bool:unknown):[unknown, unknown,unknown] => {
    if(typeof arg === "number"){
        console.log(arg + 100)
    }
    
    return[bool, arg, name]
} 

const result3 = getUnknown("철수", 123, true)
console.log(result3)


//4.generic 타입 - 1
function getGeneric<MyType1,MyType2,MyType3>(name:MyType1 , arg:MyType2, bool:MyType3):[MyType3, MyType2, MyType1] {

    return[bool, arg, name]
} 

const result4 = getGeneric<string, number, boolean>("철수", 123, true)
console.log(result4)


//5.generic 타입 - 2
function getGeneric2<T1,T2,T3>(name:T1 , arg:T2, bool:T3):[T3, T2, T1] {

    return[bool, arg, name]
} 

const result5 = getGeneric2<string, number, boolean>("철수", 123, true)
console.log(result5)


//5.generic 타입 - 3
function getGeneric3<T,U,V>(name:T , arg:U, bool:V):[V, U, T] {

    return[bool, arg, name]
} 

const result6 = getGeneric3<string, number, boolean>("철수", 123, true)
console.log(result6)


//5.generic 타입 - 4
const getGeneric4 = <T,U,V>(name:T , arg:U, bool:V):[V, U, T] => {

    return[bool, arg, name]
}  


const result7 = getGeneric4<string, number, boolean>("철수", 123, true)
console.log(result7)