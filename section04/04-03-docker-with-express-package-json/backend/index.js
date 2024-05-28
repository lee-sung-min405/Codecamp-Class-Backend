//const express = require('express') 옛날 방식 => commonjs
import express from 'express'      //요즘 방식 =>module
import {checkPhone, getToken, sendTokenToSMS} from './phone.js'
import {checkEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'

////////////////////swagger-ui-express (Docs 관련 APi)/////////////////////
import swaggerUi from'swagger-ui-express';
import swaggerJsdoc from'swagger-jsdoc';
import { options } from './swagger/config.js';
import cors from 'cors'

const app = express()

//json 데이터를 이해할 수 있도록 해주는 코드
app.use(express.json())
app.use(cors()) //cors(["naver.com"]) 이렇게 하면 네이버만 cors를 허용해준다는 의미이다.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

//get방식의 api를 만들겠다
app.get('/boards', function (req, res) {
  // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    {number :1, writer:"철수1", title:"제목입니다1", contents:"내용입니다.1"},
    {number :2, writer:"철수1", title:"제목입니다1", contents:"내용입니다.1"},
    {number :3, writer:"철수1", title:"제목입니다1", contents:"내용입니다.1"}
  ]

  //2. DB에서 꺼재온 결과를 부라우저에 응담(response) 주기
  res.send(result)
})

//get방식의 api를 만들겠다
app.post('/boards', function (req, res) {
  //1. 부라우저에서 보내준 데이터 확인하기
  console.log(req)
  console.log("====================")
  console.log(req.body)

  //2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정


  //3. DB에 저장된 결과를 브라우저에 응답(response) 주기
  res.send('게시물 등록에 성공하였습니다.')
})


/////////////////////////////인증 번호 API/////////////////////////////
app.post("/tokens/phone", function(req,res){

      const PhoneNumber = req.body.phone

      //1. 휴대폰 번호 유효성 검사 (10 ~ 11자리)
      const isCheckPhone =checkPhone(PhoneNumber)
      if(!isCheckPhone) return // => [early-exit 패턴] : 먼저 에러를 찾아서 일찍 종료
    
      //2. 핸드폰 토큰 6자리 만들기
      const resultToken = getToken()
  
      //3. 핸드폰 번호에 토큰 전송하기  
      sendTokenToSMS(PhoneNumber, resultToken)

      //3. DB에 저장된 결과를 브라우저에 응답(response) 주기
      res.send('인증완료!!!')
})

//////////////////////////이메일 가입 API//////////////////////////////
app.post("/users", function(req,res){

  // const name = req.body.name
  // const age = req.body.age
  // const school = req.body.school
  // const email = req.body.email

  const {name, age, school, email} = req.body;

   //1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
   const isValid= checkEmail(email)
   if(!isValid) return

   //2. 가입환영 템플릿 만들기
   const welcomeTemplate = getWelcomeTemplate({name, age, school})

   //3. 이메일에 가입환영 템플릿 전송하기
   sendTemplateToEmail(email, welcomeTemplate)

   res.send("가입완료!!!")
})

//포트번호
app.listen(4000) 

//yarn start:dev