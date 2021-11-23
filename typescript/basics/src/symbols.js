"use strict";
var _a;
exports.__esModule = true;
exports.sym = void 0;
exports.sym = Symbol('key');
var sym2 = Symbol('key');
var obj = (_a = {},
    _a[exports.sym] = function () { return 'Wert 2'; },
    _a[sym2] = 'Wert 2',
    _a);
obj[sym2] = 'Wert';
console.log(obj[exports.sym]());
console.log(obj[sym2]);
//# sourceMappingURL=symbols.js.map