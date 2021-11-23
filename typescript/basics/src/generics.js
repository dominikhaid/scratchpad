"use strict";
exports.__esModule = true;
exports.MyDog = void 0;
var myArray = [412, 23, 5456];
var MyDog = /** @class */ (function () {
    function MyDog(name) {
        this.legs = 4;
        this.name = name;
    }
    MyDog.prototype.bark = function () {
        console.log(this.name + " says Wuff");
    };
    return MyDog;
}());
exports.MyDog = MyDog;
var Container = /** @class */ (function () {
    function Container() {
        var _this = this;
        this.publicBark = function (index) {
            _this.elements[index].bark();
        };
    }
    return Container;
}());
function arrGen(param) {
    return param[0];
}
function id(param) {
    return param;
}
var container = new Container();
container.elements = [new MyDog('Rex')];
container.num = 4;
console.log(container.publicBark(0));
console.log(container.num);
console.log(id(40));
console.log(id('40'));
console.log(arrGen(myArray));
//console.log(id<number>('40'))// => Error
//# sourceMappingURL=generics.js.map