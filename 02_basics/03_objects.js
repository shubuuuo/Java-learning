// singleton
// Object.create

/* This is an outdated method to call an object. */

// object literals

const mySym = Symbol("key1")

/*
Symbol in JavaScript is a primitive data type that represents a unique identifier.
*/ 

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/*
So, there are so many things...
1) We prefer to use [] This box method more than {.} the dot approach... 
Reason: The dot method can't access some data types like symbols... And if the data is declared 
        in the box then it would be impossible for the dot command to access it. 
2) We can declare the objects in strings("") and we can leave it as it is too.
Reason: JavaScript takes it as same if we use any tpe of data types and declare it symbol or not.
3) We can use all the datatypes in objects.
4) If we freeze the object then we can't change it later.
5) In order to ass the element in the existing object, we use "this" function. It's syntax is writtern below.
*/ 

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

// We had to comment the freeze function becaus it will give error and not let the function to run.

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());