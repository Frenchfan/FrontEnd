/*
1. Создайте объект riddles
2. Добавьте свойства question, answer
3. создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
4. Если ответил неверно, то в консоль выводится текст: “вы проиграли”
5. * По желанию, создать 2 подсказки, если пользователь ответил неверно
*/

const riddles = {
  question: "Сколько будет 2+2?",
  answer: "4",
  hintCounter: 0,
  hints: ["Это больше, чем 3", "Это меньше, чем 5"],
  askQuestion(answer, question) {
    const userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer) {
      console.log("Угадал");
    } else {
      if (this.hintCounter < 2) {
        this.giveHint(this.hintCounter);
      } else {
        console.log("Вы проиграли");
      }
    }
  },
  giveHint(hintCounter) {
    console.log(this.hints[hintCounter]);
    this.hintCounter++;
    this.askQuestion(this.answer, this.question);
  },
};

riddles.askQuestion(riddles.answer, riddles.question);
