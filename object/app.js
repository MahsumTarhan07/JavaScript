
/*
let user ={
    name : "Jhon",
    age : 21,
    "likes birds ": true
}

console.log(user.name)
console.log(user.age)

// delete

if(delete user.age ){
    console.log("User Delete")
    console.log(user.age)
}
*/

let fruit = prompt("Which fruit to buy ?", "Kiwi");

let bag = {
    [fruit]:4,
};

console.log(bag.Kiwi) // 5 if fruit="apple"

