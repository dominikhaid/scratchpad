"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Bully = exports.Breed = exports.Dog = exports.House = void 0;
var House = /** @class */ (function () {
    function House(zimmer, qm, balkon) {
        this.zimmer = zimmer;
        this.qm = qm;
        this.balkon = balkon;
    }
    House.prototype.preis = function () {
        var sum = this.zimmer * this.qm;
        return sum;
    };
    return House;
}());
exports.House = House;
var myHouse = new House(50, 600, true);
console.log(myHouse);
console.log(myHouse.preis());
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
        this.legs = 4;
    }
    Dog.prototype.bark = function () {
        console.log(this.name + " says Wuff");
    };
    return Dog;
}());
exports.Dog = Dog;
var Breed = /** @class */ (function (_super) {
    __extends(Breed, _super);
    function Breed(name, breed) {
        var _this = _super.call(this, breed) || this;
        _this.breed = breed;
        _this.name = name;
        return _this;
    }
    Breed.prototype.bark = function () {
        console.log(this.name + " says Wuff, he is a " + this.breed);
    };
    return Breed;
}(Dog));
exports.Breed = Breed;
var Bully = /** @class */ (function (_super) {
    __extends(Bully, _super);
    function Bully() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.legs = 6;
        return _this;
    }
    return Bully;
}(Breed));
exports.Bully = Bully;
var rex = new Breed('Rex', 'Schäferhund');
rex.bark();
console.log(rex.legs);
var bully = new Bully('MyBullyDog', 'Bully');
bully.bark();
console.log(bully.legs);
var dogs = [new Dog('Dog1'), new Breed('Dog2', 'Dackel')];
console.log(dogs.forEach(function (dog) { return dog.bark(); }));
//# sourceMappingURL=class.js.map