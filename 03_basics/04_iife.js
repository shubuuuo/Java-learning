// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

/*
To remove the pollution created by global scope... we use parenthetis and use them both as block.
*/ 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')