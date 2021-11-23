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
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(height, age, something) {
        this.height = 5;
        this.age = 10;
        this.something = 10;
        this.age = age;
        this.height = height;
        this.something = something;
    }
    Tree.prototype.use = function () {
        console.log(this.something, this.age);
    };
    return Tree;
}());
exports.Tree = Tree;
var Eiche = /** @class */ (function (_super) {
    __extends(Eiche, _super);
    function Eiche() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.height = 50;
        _this.age2 = _this.age;
        return _this;
    }
    return Eiche;
}(Tree));
var newEiche = new Eiche();
console.log(newEiche.height);
//console.log(newEiche.age)  // => error
console.log(newEiche.age2); // => ok
//console.log(newEiche.something) // => error
//# sourceMappingURL=modifiers.js.map