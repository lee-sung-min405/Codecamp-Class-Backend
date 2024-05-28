function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();  // 년도
    const month = today.getMonth() + 1;  // 월 (0부터 시작하므로 +1)
    const day = today.getDate();  // 일

    // 숫자를 두 자리 문자열로 포매팅합니다. (예: '01', '02', ...)
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    const dayStr = day < 10 ? `0${day}` : `${day}`;

    // yyyy-mm-dd 형식의 문자열로 반환
    return `${year}-${monthStr}-${dayStr}`;
}

function checkPhone(email){

    //1. 이메일 검증하기
    if((email.includes('@') === false) || !email){ // => early-exit 패턴 : 먼저 에러를 찾아서 일찍 종료
      console.log("에러 : 이메일을 제대로 입력해주세요")   
      return false
    }
    else return true
}

function getWelcomeTemplate({name, age, school, createdAt}){
    const welcomeTemplate = `
        <html>
            <body>
                <h1> ${name}님 가입을 축하합니다.</h1>
                <hr/>
                <div>이름 : ${name}</div>
                <div>나이 : ${age}</div>
                <div>학교 : ${school}</div>
                <div>가입일 : ${createdAt}</div>
            </body>
        </html>
    `

    return welcomeTemplate
}

function sendTemplateToEmail(email, welcomeTemplate){

    //3. 핸드폰 번호에 토큰 전송하기
    console.log(email + " 번호로 인증번호 " + welcomeTemplate + "(을)를 전송합니다.")
}

function createUser({name, age, school, email, createdAt}){ //[퍼사드패턴]을 이용하여 리펙토링
    
    //1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid= checkPhone(email)
    if(!isValid) return

    //2. 가입환영 템플릿 만들기
    const welcomeTemplate = getWelcomeTemplate({name, age, school, createdAt})

    //3. 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, welcomeTemplate)
    
 }

 const name ="홍길동"
 const age=25
 const school ="동의대학교"
 const email ="aaa@bbb.com"
 const createdAt = getTodayDate()

 createUser({name, age, school, email, createdAt})

 