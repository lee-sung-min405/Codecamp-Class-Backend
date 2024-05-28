// //public, private, protected, readonly

// class Monster2 {
//     //public, private, protected, readonly 중 1개라도 있으면 생략가능 
//     //power =10

//     constructor(private power){
//         //public, private, protected, readonly 중 1개라도 있으면 생략가능 
//         //this.power = qqq 
//     }
    
//     attack1 = () => {
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!") //안에서 접근 가능
//         this.power = 30 //안에서 수정 가능
//     }

// }

// class FlyMonster2 extends Monster2{

//     attack2 = () => {
//         console.log("공격하자!!")
//         console.log("내 공격력은" + this.power + "야!!!") //자식이 접근 불가
//         this.power = 30 //자식이 수정 불가
//     }
// }

// const myMonster2 = new FlyMonster2(20)
// myMonster2.attack1()
// myMonster2.attack2()

// console.log(myMonster2.power) //밖에서 접근 불가
// myMonster2.power = 20 //밖에서 수정도 불가