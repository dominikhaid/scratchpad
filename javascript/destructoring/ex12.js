let p1 = {
    name: 'Vinod',
    city: 'Bangalore',
    email: 'vinod@vinod.co'
};


function sayHello({name, city}) {
    console.log(`Hello ${name}, how's weather in ${city}?`);
}

sayHello(p1);