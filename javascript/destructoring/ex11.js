let p1 = {
    name: 'Vinod',
    city: 'Bangalore',
    email: 'vinod@vinod.co'
};

let {name, email, country} = p1;

console.log(name);
console.log(email);
console.log(country);

let nums = [10, 20, 33, 49, 55];
let [n1, n2, ...restNums] = nums;
console.log('n1 =', n1);
console.log('n2 =', n2);
console.log('restNums =', restNums);