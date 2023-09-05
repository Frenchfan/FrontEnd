/*
Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

Пример работы:

const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321);
*/

class Bank {

    addClient(client) {
        this.clients.push(client)
        console.log(this.clients);
    }

    findByClient(client) {
        for (const eachClient of this.clients) {
            if (eachClient === client) return eachClient;
        }
        return null;
    }

    openAccount(client, amount) {
        this.accounts.set(this.currentAccountID, amount);
        this.findByClient(client).linkAccount(this.currentAccountID);
        this.currentAccountID++;
        console.log(this.accounts);
        console.log(this.clients);

    }

    deposit(accountID,amount) {
        const currentBalance = this.accounts.get(accountID);
        const newBalance = currentBalance + amount;
        this.accounts.set(accountID, newBalance);
        // console.log(`the account was deposited, current balance = ${this.checkBalance(accountID)}`);
    }

    withdraw(accountID,amount) {
        const currentBalance = this.accounts.get(accountID);
        this.accounts.set(accountID, currentBalance - amount);
        // console.log(`the account got withdrawn, current balance = ${this.checkBalance(accountID)}`);
    }

    checkBalance(accountID) {
        return console.log(`${this.accounts.get(accountID)}`);
    }

    constructor(bankName) {
        this.bankName = bankName;
        this.clients = [];
        this.currentAccountID = 10000000;
        this.accounts = new Map();
    }
}

class Client {

    constructor(clientName, age) {
        this.clientName = clientName;
        this.age = age;
        this.clientAccounts = new Set();
    }

    linkAccount(accountID) {
        this.clientAccounts.add(accountID);
    }

}

const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(10000000, 200);
bank.withdraw(10000001, 100);
bank.checkBalance(10000000);
bank.checkBalance(10000001);