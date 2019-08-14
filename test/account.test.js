const account = require("../src/account");
const MockDate = require("mockdate");

beforeEach(() => {
  account.balance = 500;
  MockDate.set("2019-7-10");
  account.transactionHistory = [
    {
      date: new Date().toDateString(),
      debitCredit: 0,
      balance: account.balance
    }
  ];
});

describe("Show Balance", () => {
  it("should return the correct balance, 500 as a start", () => {
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(500);
  });
});

describe("Depost", () => {
  it("should return 600 when deposit of 100 is made", () => {
    account.deposit(100);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(600);
  });

  it("should return 700 when two deposit of 100 is made", () => {
    account.deposit(100);
    account.deposit(100);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(700);
  });
});

describe("Withdraw", () => {
  it("should return 400 when one withdrawal of 100 is made", () => {
    account.withdraw(100);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(400);
  });

  it("should return 300 when two withdrawal of 100 is made", () => {
    account.withdraw(100);
    account.withdraw(100);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(300);
  });

  it("should return `Not enough fund` when the withdrawal exceed the balance amount", () => {
    account.withdraw(100);
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(400);
    const response = account.withdraw(500);
    expect(response).toBe("Not enough fund");
  });
});

describe("Transaction History", () => {
  it("should show date, debit, credit and balance in the bank statement", () => {
    const myStatement = account.statement();
    expect(myStatement).toEqual([
      { date: "Wed Jul 10 2019", debitCredit: 0, balance: 500 }
    ]);
  });

  it("should list down two transactions if I make one deposit, with the deposited amount and balance.", () => {
    MockDate.set("2019-7-11");
    account.deposit(100);
    const myUpdatedStatement = account.statement();
    const expectedStatement = [
      { date: "Wed Jul 10 2019", debitCredit: 0, balance: 500 },
      { date: "Thu Jul 11 2019", debitCredit: 100, balance: 600 }
    ];
    expect(myUpdatedStatement).toEqual(expectedStatement);
  });

  it("should list down three transactions if I make one deposit and one withdrawal, with the respective debit-credit amount and balance.", () => {
    MockDate.set("2019-7-11");
    account.deposit(100);
    MockDate.set("2019-7-12");
    account.withdraw(200);
    const myUpdatedStatement = account.statement();
    const expectedStatement = [
      { date: "Wed Jul 10 2019", debitCredit: 0, balance: 500 },
      { date: "Thu Jul 11 2019", debitCredit: 100, balance: 600 },
      { date: "Fri Jul 12 2019", debitCredit: -200, balance: 400 }
    ];
    expect(myUpdatedStatement).toEqual(expectedStatement);
  });

  it("should not show a failed withdrawal in the statement.", () => {
    MockDate.set("2019-7-11");
    account.withdraw(200);
    MockDate.set("2019-7-12");
    account.withdraw(500);
    const myUpdatedStatement = account.statement();
    const expectedStatement = [
      { date: "Wed Jul 10 2019", debitCredit: 0, balance: 500 },
      { date: "Thu Jul 11 2019", debitCredit: -200, balance: 300 }
    ];
    expect(myUpdatedStatement).toEqual(expectedStatement);
  });
});
