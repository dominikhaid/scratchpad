let name = 'Vinod';
let age = 45;

let s1 = `${name} is ${age} years old.`;
console.log(s1);

function myTag(strings, ...values) {
    // console.log('strings', strings);
    // console.log('p1 is', p1, 'p2 is', p2);
    // console.log(arguments);
    console.log(values);
    return 'this is a sample output';
}

let s2 = myTag`${name} is ${age} years old.`;
console.log(s2);