const accountId = 123
let accountEmail = "linyor@google.com"
var accountPassword = "2345"
accountCity = "Mumbai"

// accountId = 2 // This is not allowed cause const needs to single variable

accountEmail = "kalf@gmail.com"
accountPassword = "lkjslfdz"
accountCity = "Delhi"
let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Avoid using Var because it is outdate
and it creates problem with block Element
like {} 
*/

