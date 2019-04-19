class BankAccount {
  constructor(initialBalance) {
    this.initialBalance = initialBalance;
    this.transactions = [];
  }

  calculateBalance() {
    this.transactions.forEach((transaction) => {
      initialBalance += transaction;
    });
    return initialBalance;
  }

  addTransactions(bills) {
    bills.forEach((bill) => {
      this.transactions.push(bill);
    });
  }
}

let initialBalance = 1000;
const bills = [-45, -99.95, -34.43];

const myBankAccount = new BankAccount(initialBalance);
myBankAccount.addTransactions(bills);
console.log(myBankAccount.calculateBalance());
