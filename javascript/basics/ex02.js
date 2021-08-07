function test() {
    for(let i=1; i<=5; i++) {
        console.log('inside the for loop, i is', i);
    }

    // console.log('outside of the for loop, i is', i);
}

test();


const name = 'Vinod';
console.log('name is', name);
name = name.toUpperCase();
console.log('name is', name);