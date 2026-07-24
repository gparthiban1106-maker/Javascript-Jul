function banking() {
    let balance=1000;

    function addMoney(value){
        balance=balance+value;
        return balance
    }
    function withdrawmoney(value){
        balance=balance-value;
        return balance
    }
    return{addMoney,withdrawmoney};
}

let balanceData=banking();
console.log(`I have balance`,balanceData.addMoney(1000));
console.log(`I have balance`,balanceData.withdrawmoney(5000));
