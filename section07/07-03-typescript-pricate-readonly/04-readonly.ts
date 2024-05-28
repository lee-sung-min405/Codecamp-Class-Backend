// //public, private, protected, readonly

// class Monster4 {
//     //public, private, protected, readonly 중 1개라도 있으면 생략가능 
//     //power =10

//     constructor(readonly power){
//         //public, private, protected, readonly 중 1개라도 있으면 생략가능 
//         //this.power = qqq 
//     }
    
//     attack1 = () => {
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!")
//         this.power = 30 //안에서 수정 불가능
//     }

// }

// class FlyMonster4 extends Monster4{

//     attack2 = () => {
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!")
//         this.power = 30 //자식이 수정 불가능
//     }
// }

// const myMonster4 = new FlyMonster4(20)
// myMonster4.attack1()
// myMonster4.attack2()

// console.log(myMonster4.power) //밖에서 접근 가능
// myMonster4.power = 20 //밖에서 수정 불가능