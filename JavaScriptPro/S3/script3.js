/*
Напишите конструктор объекта BankAccount, который будет
представлять банковский счет. Конструктор должен принимать два
аргумента: accountNumber (строка) и balance (число). Конструктор
должен создавать объект с указанными свойствами accountNumber и
balance и следующими методами:
1. deposit(amount): принимает аргумент amount (число) и увеличивает
баланс на указанную сумму.
2. withdraw(amount): принимает аргумент amount (число) и уменьшает
баланс на указанную сумму, если на счету есть достаточно средств.
Если средств недостаточно, выводится сообщение "Недостаточно
средств на счете.".
3. getBalance(): возвращает текущий баланс счета.
*/

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;    
  }

  withdraw(amount) {
    if ((this.balance - amount) < 0) {
        console.log('Not enough funds');
        return;
    }
    this.balance -= amount;    
  }

  getBalance() {
    return this.balance;
  }
}

const myAcc = new BankAccount(123, 1000);
myAcc.withdraw(800);
console.log(myAcc.getBalance());
myAcc.withdraw(400);
console.log(myAcc.getBalance());
myAcc.deposit(500);
console.log(myAcc.getBalance());

