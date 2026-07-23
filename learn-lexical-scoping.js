let product="Five Star"; // global scope   //  global variable

function outer(){
    let artist1="ramesh"; //local Scope

    function innner(){
        let artist2="suresh"; //nested scope
        if (true) {
            let message="Ads is Completed" //block scope
            console.log("Message is",message); 
            console.log("artist two",artist2);
            console.log("artist one",artist1);
            console.log("Product is", product);
        }
    }
    innner();
}
outer();
// console.log("artist one",artist1); //It is not available outside function


