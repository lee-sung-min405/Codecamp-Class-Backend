// //public, private, protected, readonly

// class Monster3 {
//     //public, private, protected, readonly 중 1개라도 있으면 생략가능 
//     //power =10

//     constructor(protected power){
//         //public, private, protected, readonly 중 1개라도 있으면 생략가능 
//         //this.power = qqq 
//     }
    
//     attack1 = () => {
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!") //안에서 접근 가능
//         this.power = 30 //안에서 수정 가능
//     }

// }

// class FlyMonster3 extends Monster3{

//     attack2 = () => {
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!") //자식이 접근 가능
//         this.power = 30 //자식이 수정 가능
//     }
// }

// const myMonster3 = new FlyMonster3(20)
// myMonster3.attack1()
// myMonster3.attack2()

// console.log(myMonster3.power) //밖에서 접근 불가
// myMonster3.power = 20 //밖에서 수정도 불가