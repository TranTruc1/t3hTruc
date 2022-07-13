class PersonInfo{
    constructor(nameParam, age){
        console.log("run");
        this.name = nameParam;
        this.age= age;
    }
    great(){
        return `My name is ${this.name} and Im ${this.age}`
    }
}

const Newperson = new PersonInfo("Trúc", 21);

Newperson.great();