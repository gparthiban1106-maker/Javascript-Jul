//Function Expression

let sayhello=function(){
    console.log("Function Expression way");
}
sayhello();

//Function with Argument

let sum=function (a,b) {
    console.log("Sum is ",a+b);
};

sum(5,10);

//Function with return

let add=function(a,b){
    return a+b;
}
let sumValue=add(5,7)
console.log("Value is",sumValue);
