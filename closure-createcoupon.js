function createCoupon(code){
    let used=false;

    return function (){
        if(!used){
            used=true;
            console.log(code,"Applied Successfully");
        }else{
            console.log(code,"Already used");
        }
    };
}

const coupon=createCoupon("SAVE50");

coupon();

coupon();