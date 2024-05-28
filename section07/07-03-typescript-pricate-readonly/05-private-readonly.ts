// //public, private, protected, readonly

// class Monster5 {
//     //public, private, protected, readonly 중 1개라도 있으면 생략가능 
//     //power =10

//     constructor(private readonly power){
//         //public, private, protected, readonly 중 1개라도 있으면 생략가능 
//         //this.power = power 
//     }
    
//     attack1 = () => {
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!") //안에서 접근 가능
//         this.power=30 //안에서 수정 불가능
//     }
// }

// class FlyMonster5 extends Monster5{

//     attack2 = () => {
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!") // 자식이 접근 불가능
//         this.power=30 //자식이 수정 불가능
//     }
// }

// const myMonster5 = new FlyMonster5(20)
// myMonster5.attack1()
// myMonster5.attack2()

// console.log(myMonster5.power) //밖에서 접근 불가능
// myMonster5.power = 20 //밖에서 수정 불가능