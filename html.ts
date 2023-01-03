//let a : number[] = [1,2,34];
let a = [1,2];
let b : string[] = ['il', 'hello'];
let c : boolean[] = [true, true];

const player={
    name: "yso",
    age : 245,
}

const player2 :{
    name : string,
    age ?: number,
} = {
    name : "yso",
    age : 25,
}

if(player2.age && player2.age > 10){ // player2.age의 존재여부 부터 묻고, 그 이후에 age가 10보다 큰지 확인 

}
type Age = number;
type Name = string;
type info ={
    name : Name,
    age ?: Age,
}


const player3 : info = {
    name : "yso",
}

function playerMaker(name:string) : info { // 함수 return 값의 타입을 지정하는 방법 
    return {
        name // name : name의 줄임말 
    } 
}

const yso = playerMaker("유선옥");
yso.age =12;


const person :{
    name : string,
    age ?: number,
}={
    name : "유선옥",
}

person.age =15;
