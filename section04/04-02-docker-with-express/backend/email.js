import {getTodayDate} from "./utils.js"
import nodemailer from 'nodemailer'

export function checkEmail(email){

    //1. 이메일 검증하기
    if((email.includes('@') === false) || !email){ // => early-exit 패턴 : 먼저 에러를 찾아서 일찍 종료
      console.log("에러 : 이메일을 제대로 입력해주세요")   
      return false
    }
    else return true
}

//백엔드
export function getWelcomeTemplate({name, age, school}){
    const welcomeTemplate = `
        <html>   
            <body>
                <h1> ${name}님 가입을 축하합니다.</h1>
                <hr/>
                <div>이름 : ${name}</div>
                <div>나이 : ${age}</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${(getTodayDate())}</div>
            </body>
        </html>
    `

    return welcomeTemplate 
}

export async function sendTemplateToEmail(email, welcomeTemplate){
    const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user: "lee85866968@gmail.com",
                pass : "khao xmgj khza mqpj"
            }
        })
        const res = await transporter.sendMail({
            from: "lee85866968@gmail.com",
            to: email,
            subject:"[이성민 개발자] 가입을 축하합니다!!!",
            html: welcomeTemplate
        })

        console.log(res)

    //3. 이메일로 전송하기
    //console.log(email + " 이메일로 인증번호 " + welcomeTemplate + "(을)를 전송합니다.")
    // console.log(email + " 이메일로 가입이 되었습니다." + welcomeTemplate)
}