/* 
Syntax of Function
function "fn_name" (){

}
*/
function first() {
    console.log("This is my First Function");
}

first();

//Function with Argument
function sum(a,b) {
    console.log(a+b);
}

sum(5,10);

//Function with return Statement

function add(a,b) {
    return a+b;
}
sumValue=add (10,15)
console.log("Sum Value is",sumValue);




function hello() {
    {
    let name="david";
    console.log("Inside",name);
    }
    console.log("Outside",name);
}
hello();

