//if condition

let vaibhavScore=2;

if (vaibhavScore>=50) {
    console.log("He will get chance");
}
else{
    console.log("Thrown out from team");
}

//if condition
if(vaibhavScore<10){
    console.log("Fans are disappointed");    
}

//if-else-if
let orderStatus="Preparing";

if(orderStatus=="ordered"){
    console.log("Res will pickthe order"); 
}
else if(orderStatus=="Preparing"){
    console.log("Chef is Preparing the order");  
}
else{
    console.log("Order has not reached the restaurant");
    
}


//Switch
let ordersts="Dispatched"

switch(ordersts){
    case"Order":
       console.log("I have order the item");
       break;
    case "Dispatched":
        console.log("Item is dispatched and in transit");
        break;
    case "Out of Delivery":
        console.log("Item is out of delivery");
        break;
    default:
        console.log("Product not servicable");
}

//Switch example two
let amount=6000;

switch (true){
    case amount>5000:
        console.log("VIP / Premium Customer");
        break;
    case amount>2000 && amount<=5000:
        console.log("Give 20% Discount");
        break;
    default:
        console.log("Shop more to get discount");   
}
