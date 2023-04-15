/*
let obj: any = {x:0};

obj.foo();
obj();
obj.bar = 100;
obj = "Hello World";
const n: number = obj;
console.log(n);
*/

/*
let myName = "Alice";

document.writeln(myName);
*/

/*
function greet(name: string){
    document.writeln("Hello Everyone :" + name.toUpperCase() +  "!!");
}

greet("Mahsum");
*/

/*
function getFavaritoNumber(): number{
    return 7;
}

*/

/*
const names = ["Alice","Mayk","Steven"];

names.forEach(function(s){
    document.writeln(s.toUpperCase());
});
*/


// Obeject type
/*
function printCoord(pt: {x:number; y:number}){
    document.writeln("The coordinate's x value is " + pt.x);
    document.writeln("The coordinate's y value is " + pt.y);
};

printCoord({x: 10, y:20});

*/

/*
let outTuple  : [number, boolean,string];

outTuple = [5, false, 'Codding God was here'];

outTuple.push("Someting new and wrong");//last add
console.log(outTuple);
*/

const car :{type: string,model: string,year: number} = {
    type : "Toyota",
    model : "Corola",
    year : 1999
}
