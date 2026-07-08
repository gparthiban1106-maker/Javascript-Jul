//Variable : store the data
//Three types of Variables
//Var, Let, Const

var name="Parthiban"
console.log("Name is",name);

let city="Bangalore";
console.log("City is",city);

const state="Karnataka";
console.log("State is",state);

//Difference between var, let & const
/*
var: 
It can be Re-Declare
It can be Re-Initialised
*/
var a="John";
var a="johnson";
console.log(a); //Output is johnson

/*
Let:
It cannot be Re-Declare
It can be be Re_initilised

let b="Bangalore";
let b="Chennai"
console.log(b); //Error: Identifier 'b' has already been declared
*/
let c="Bangalore";
c="Chennai"
console.log(c); //Output is Chennai

/*
const:
It cannot be Re-Declare
It cannot be be Re_initilised

const street="RajajiNagar";
const street="RR Nagar";
console.log(street);// Error: Identifier 'street' has already been declared
*/
/*
const street="RajajiNagar";
street="RR Nagar";
console.log(street); //TypeError: Assignment to constant variable.
*/

const street="Rajajinagar";
console.log(street);

