function loginTracker(){
    let attempts=0;

    return function(){
        attempts++;
        console.log("Login Attempts",attempts);
    };
}

const login=loginTracker();

login();

login();

login();