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

    console.log(welcomeTemplate)
}

const name  = "철수"
const age = 25
const school = "동의대학교"
const createdAt ="2024-05-25"

getWelcomeTemplate({name, age, school, createdAt})