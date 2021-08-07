class Person {
    constructor() {
        this.name = undefined;
        this.city = undefined;
    }
}

class Employee extends Person {
    constructor() {
        super(); // is a must
        this.salary = 45000;
        this.department = undefined;
    }
}

let e1 = new Employee();
console.log(e1);