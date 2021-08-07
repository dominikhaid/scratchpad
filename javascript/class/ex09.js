class Person {

    constructor(name, city = 'Bangalore') {
        this.name = name;
        this.city = city;
    }

    printInfo() {
        console.log('Name = ', this.name);
        console.log('City = ', this.city);
    }
}

let p1 = new Person();
console.log(typeof(p1));
console.log(p1);

let p2 = new Person('Vinod');
let p3 = new Person('John', 'Dallas');

p1.printInfo();
p2.printInfo();
p3.printInfo();