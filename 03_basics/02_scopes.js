// var c = 300

/*
We don't use var because while using scope(don't confuse it with object) it creates
many problems.
Like, var runs in scope where it shouldn't and if we call out var somewhere else,
It gives scope priority which it shouldn't as we created new
Means that var always acts as global scope even where it shouldn't
If we decrale scope outside if then it is known as global scope.
And if it is inside if then it is known as block scope.
*/

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)

const addTwo = function(num){
    return num + 2
}

/*
So, basically addTwo will give error and addone won't cause addTwo has a array in which
it is stored.
And addone isn't. so we can call it upside of it.
*/ 