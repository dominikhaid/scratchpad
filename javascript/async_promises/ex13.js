function divide(n1, n2) {

    return new Promise((resolve, reject) => {
        if (typeof n1 !== 'number') {
            reject('first argument is not a number');
        }
        if (typeof n2 !== 'number') {
            reject('second argument is not a number');
        }
        if (n2 === 0) {
            reject('can not divide by zero');
        }
        resolve(n1 / n2);
    });

}

console.log('start of script');
let a = 'asd', b = 5;
setTimeout(async ()=>{
    try {
        let result = await divide(a, b);
        console.log('Result of division', result);
    } catch (err) {
        console.log('There was an erro', err)
    }
    
}, 0);
console.log('end of script');