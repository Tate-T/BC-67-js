// стек викликів:

// console.log(test1());

function test1(params) {
    return ('це функція test1');
}

function test2(params) {
     console.log(test1());
    return ('це функція test2');
}
    


function test3(params) {
    console.log(test2());
    console.log('запрошую на тест');
    return ('це функція test3');
}

// console.log(test2());

console.log(test3());



