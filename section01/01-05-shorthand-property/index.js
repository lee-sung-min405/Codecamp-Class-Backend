function setProfile(profile){
    console.log(profile.name)
    console.log(profile.age)
    console.log(profile.school)
}

const name ="철수"
const age =25
const school ="동의대학교"

// const profile ={
//     name : name,
//     age : age,
//     school : school
// }

const profile ={name, age, school} //키와 벨류가 같아서, 밸류를 생략함 => shorthand-property

setProfile(profile) // 1. 변수에 담아서 보내주기
setProfile({name, age, school}) //2. 그냥 톨째로 보내주기
                                // 결과는 1번과 2번이 동일함