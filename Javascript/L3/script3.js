function askQuestion(answer, question) {
  const userAnswer = prompt(question);

  if (userAnswer.toLowerCase() === answer) {
    console.log("Угадал");
  } else {
    console.log("Не угадал");
  }
}


function puzzle() {
  askQuestion(
    "лук",
    "Сидит дед во сто шуб одет, кто его раздевает, тот слезы проливает"
  );
  askQuestion("елка", "Зимой и летом одним цветом");
}
