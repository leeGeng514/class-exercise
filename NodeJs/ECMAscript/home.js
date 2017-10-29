// var a=100;
//
// console.log(a);


// var date=new Date();
//
// console.log(`时间戳:${date.getTime()},${date.getFullYear()}年${date.getMonth()-1}月${date.getDate()}日`);

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        console.log(this.name);
    }
}

class Huang extends Person{
    constructor(name,job){
        super(name);
        this.job=job;
    }
}

var p1=new Person('lee',27);
var p2=new Huang('黄',24,'医生');

console.log(p1.age);
console.log(p2.age);