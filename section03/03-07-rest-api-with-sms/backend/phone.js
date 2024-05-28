import coolsms from 'coolsms-node-sdk'

const mysms = coolsms.default

export function checkPhone(PhoneNumber){

    //1. 휴대폰 번호 유효성 검사 (10 ~ 11자리)
    if(PhoneNumber.length < 10 || PhoneNumber.length > 11){ // => early-exit 패턴 : 먼저 에러를 찾아서 일찍 종료
      console.log("에러 : 핸드폰 번호를 제대로 입력해주세요")   
      return false
    }
    else return true
}

export function getToken(){

    //2. 핸드폰 토큰 6자리 만들기
    const Token = String(Math.floor(Math.random() *1000000)).padStart(6, "0")
    console.log(Token)
    return Token
}

export async function sendTokenToSMS(PhoneNumber, resultToken){

    const messageService = new mysms("NCSK9EZWN9TKQ8KW","1Y5L0BAUR0UUGCGTC0MU8SGUV3W8UY6N")

    //3. 핸드폰 번호에 토큰 전송하기
    const result = await messageService.sendOne({
        to : PhoneNumber,
        from : "01085866968",
        text : `[이성민 개발자] 안녕하세요 요청하신 인증번호는 ${resultToken}입니다.`
    })

    console.log(result)

    //3. 핸드폰 번호에 토큰 전송하기
    // console.log(PhoneNumber + " 번호로 인증번호 " + resultToken + "(을)를 전송합니다.")
}
