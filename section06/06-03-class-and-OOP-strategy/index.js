class Fly{
    run = () =>{
        console.log("날라서 도망가자!!")
    }
}

class Fool{
    run = () =>{
        console.log("뛰어서 도망가자!!")
    }
}

class Monster {
    power =10

    HRun;

    //생성자
    constructor(qqq){
        this.HRun = qqq
    }
    
    attack = () => {
        console.log("공격하자!!")
        console.log("내 공격력은" + this.power + "야!!!")
    }
    
    run = () => {
        this.HRun.run()
    }
}

const myMonster1 = new Monster(new Fly())
myMonster1.attack()
myMonster1.run()


const myMonster2 = new Monster(new Fool())
myMonster2.attack()
myMonster2.run()