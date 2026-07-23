let obj={
    name:"David",
    company:"Apple",
    salary:"10000"
}
for(let key in obj){
    console.log(`${key} , value: ${obj.key}`);
    
}

let score=[65,75,80,82,90];

for(let num of score){
    console.log(num);
    
    if (num>=75){
        console.log("it's a distinction",num);  
    }
}