function restaurantRating(name){
    let totalstars=0;
    let totalusers=0;

    return function(rating){
        totalstars+=rating;
        totalusers++;
        console.log(name,"Average Rating",totalstars/totalusers);
    };
}

const pizzahut=restaurantRating()

pizzahut(50)
pizzahut(40)
pizzahut(30)