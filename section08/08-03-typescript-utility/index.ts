interface IProfile{
    name : string;
    age : number;
    school: string;
    hobby?: string;
}

// 1. Partial 타입 (필수 아닌 타입)
type aaa =Partial<IProfile>


// 2. Required 타입 (전부 필수 타입)
type bbb = Required<IProfile>

// 3. Pick 타입 (사용할 key값만 선택해서 타입 지정)
type ccc = Pick<IProfile, "name" | "age">


// 4. Omit 타입 (제외할 key값만 선택해서 타입 제외)
type ddd = Omit<IProfile, "school">


// 5. Record 타입
type eee = "철수" | "영희" | "훈이" //Union 타입
//철수 영희 훈이만 가능
let child1:eee ="영희"
let child2:eee ="철수"
let child3:eee ="훈이"
//철수, 영희, 훈이, 사과, 바나나 다 됨
let child4:string ="사과"