var bank = {
    name: "Austin",
    balance: 0,
    takeMoney: function(amt){
        if (this.balance>= amt){
            var remainMoney = this.balance - amt
            this.balance = remainMoney
        } else{
            console.log("no money") 
        }
    }
}

module.exports = bank