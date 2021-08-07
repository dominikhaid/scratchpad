let nums = [10, 23, 45, 66, 30];

let anotherNums = [100, 200, ...nums];

console.log(nums);
console.log(anotherNums);

let nums2 = [...nums];
nums2.push(999);
console.log(nums);
console.log(nums2);

let p1 = {name: 'Vinod', email: 'vinod@vinod.co'};
let p2 = {city: 'Bangalore', ...p1, country: 'India'};

console.log(p1);
console.log(p2);

let p3 = p1;
console.log(p3===p1);