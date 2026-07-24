//Rembering or Retaining outer variable value even after outer functions closed

function outer(){
    let count=0

    function innner() {
        count++;
        console.log("Count Value",count);
    }
    return innner;
}
let value=outer();
value();
value();