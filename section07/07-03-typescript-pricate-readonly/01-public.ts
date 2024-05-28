//public, private, protected, readonly

class Monster {
    //public, private, protected, readonly 중 1개라도 있으면 생략가능 
    //power =10

    constructor(public power){
        //public, private, protected, readonly 중 1개라도 있으면 생략가능 
        //this.power = qqq 
    }
    
    attack1 = () => {
        console.log("공격하자!!")
        console.log("내 공격력은" + this.power + "야!!!") //안에서 접근 가능
        this.power =30 //안에서 수정 가능
    }

}

class FlyMonster extends Monster{

    attack2 = () => {
        console.log("공격하자!!")
        console.log("내 공격력은" + this.power + "야!!!") //자식에서 접근 가능
        this.power =30 //자식에서 수정 가능
    }
}

const myMonster1 = new FlyMonster(20)
myMonster1.attack1()
myMonster1.attack2()

console.log(myMonster1.power) //밖에서 접근 가능
myMonster1.power = 20 //밖에서 수정 가능