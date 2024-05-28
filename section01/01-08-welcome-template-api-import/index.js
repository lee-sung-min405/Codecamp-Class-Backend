import {checkEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'

function createUser({name, age, school, email}){ //[퍼사드패턴]을 이용하여 리펙토링
    
    //1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid= checkEmail(email)
    if(!isValid) return

    //2. 가입환영 템플릿 만들기
    const welcomeTemplate = getWelcomeTemplate({name, age, school})

    //3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, welcomeTemplate)
 }

 const name ="홍길동"
 const age=25
 const school ="동의대학교"
 const email ="aaa@bbb.com"

 createUser({name, age, school, email})