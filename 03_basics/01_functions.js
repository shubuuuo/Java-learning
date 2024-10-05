
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

/*
In the result we are supposed to addTwoNumbers(3, 4) which would give us the result..
Those numbers are known as arguments.
And number1, and number2 are known as Parentthesis.
We can also get three different results by callig out these values...
Although they are not reliable.
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)
*/ 

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // console.log("Shubham");
    // return result
    // console.log("Shubham");
    return number1 + number2
}

/*
Now, here there is a rule in functions.
You can print nothing after result in a function.
It is kind an end point to it.
*/ 

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

/*
We can also use (username === undefined) instead of !username
But (!username) is kind of more professional because "!" makes true value false
and false value true.
And we need only true value.
We wrote sam befare as a failsafe if no value is given and if the value is given...
Then it gets overwrite... 
*/ 


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
