import axios from 'axios'


//비동기 방식 (안 기다린다)
const fetchAsync = async() => {
    const result =axios.get("https://koreanjson.com/posts/1")
    console.log("비동기 방식 : ",result) //Promise {<pending>}
}

//동기 방식 (기다린다.)
const fetchSync = async () => {
    const result =await axios.get("https://koreanjson.com/posts/1")
    console.log("동기 방식 : ",result)
    console.log("동기 방식 : ",result.data.title)
}

fetchAsync()
fetchSync()