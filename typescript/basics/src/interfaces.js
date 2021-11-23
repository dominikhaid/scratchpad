"use strict";
exports.__esModule = true;
var LionKing = /** @class */ (function () {
    function LionKing(name) {
        var _this = this;
        this.run = function () {
            console.log(_this.name + " runs fast and roos loudly");
        };
        this.walk = function () {
            console.log(_this.name + " walks silently");
        };
        this.name = name;
    }
    return LionKing;
}());
var lionKing = new LionKing('Simba');
lionKing.run();
lionKing.walk();
//# sourceMappingURL=interfaces.js.map