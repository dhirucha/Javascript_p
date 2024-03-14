let swapTwoNumbers = function(){
    let a = 10
    let b = 5

    console.log('Before swapping:-')
    console.log('a =:',a);
    console.log('b =:',b);

    //sawapping

    a = a + b
    b = a - b
    a = a-b

    console.log('after swapping:-')
    console.log('a =:',a);
    console.log('b =:',b);
}

swapTwoNumbers()