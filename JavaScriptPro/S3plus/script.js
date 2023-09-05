console.log(_.chunk(["a", "b", "c", "d"], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(_.chunk(["a", "b", "c", "d"], 3));
// => [['a', 'b', 'c'], ['d']]
//Работает в браузере, в ноде - нет!!!

const moveTo = new MoveTo({
  duration: 5800
});

const btn = document.querySelector('.btn');

moveTo.registerTrigger(btn);

tippy(btn, {
  content: 'Это кнопка-якорь!',
});