const account = {
  balance: 500,
  transactionHistory: [
    {
      date: new Date().toDateString(),
      debitCredit: 0,
      balance: this.balance
    }
  ],

  getBalance() {
    return this.balance;
  },

  deposit(amount) {
    const newDeposit = {
      date: new Date().toDateString(),
      debitCredit: amount,
      balance: (this.balance += amount)
    };
    this.transactionHistory.push(newDeposit);
    return this.balance;
  },

  withdraw(amount) {
    if (this.balance > amount) {
      const newWithdrawal = {
        date: new Date().toDateString(),
        debitCredit: -amount,
        balance: (this.balance -= amount)
      };
      this.transactionHistory.push(newWithdrawal);
      return this.balance;
    } else {
      return "Not enough fund";
    }
  },

  statement() {
    return this.transactionHistory;
  }
};

module.exports = account;
