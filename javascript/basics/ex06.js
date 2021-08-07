let names = ['Vinod', 'Shyam', 'John', 'Jane'];

let chars = names.map(function (name, index) {
    return name.charAt(0);
});

console.log(names);
console.log(chars);

chars = names.map(name => name.charAt(0));
console.log(chars);

let index = names.findIndex(value=> value==='John');

console.log('John is found at index', index);