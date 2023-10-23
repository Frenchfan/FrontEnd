const symbol = Symbol();
const dogID = Symbol("dog");
const dog1 = Symbol("dog");
const dog2 = Symbol("dog");

console.log(dog1);
console.log(dog2);
console.log(dog1 === dog2);

//alert(dogID); - выдает ошибку
console.log(dogID);

const dog2Id = Symbol("super dog");
console.log(dog2Id);
console.log(dogID.description);

let id = Symbol("id");
let buddy = {
  [id]: "Жучка",
};

console.log(buddy[id]);

buddy[id] = "Бобик";

console.log(buddy[id]);

let budies = {
  [Symbol("Жучка")]: "Жучка",
  [Symbol("Мурка")]: "Мурка",
  [Symbol("Таракашка")]: "Таракашка",
  elephant: "Слон",
};

console.log(budies);

let newBuddies = {};
Object.assign(newBuddies, budies);

budies.cat = "Барсик";

console.log(newBuddies);
console.log(budies);

let id2 = Symbol.for("id");
let idAgain = Symbol.for("id");
//глобальные символы не пересоздаются
alert(id2 === idAgain);
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));

//итерируемые объекты - работа со строкой как с массивом
const string = "Hello";
console.log(string[2]);
console.log(string.length);

for (let str of string) {
  console.log(str);
}

let range = {
  from: 1,
  to: 17,
};

range[Symbol.iterator] = function () {
  // она возвращает объект итератора:
  return {
    current: this.from,
    last: this.to,
    //вызывается на каждой итерации цикла for
    next() {
      //он должен вернуть значение в виде объекта {done:..., value:...}
      return this.current <= this.last
        ? { done: false, value: this.current++ }
        : { done: true };
    },
  };
};

//теперь работает

for (let number of range) {
  console.log(number);
}

let pseudo = {
  0: "first",
  1: "second",
  length: 2,
};

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());

let pseudo2 = "It`s array like!";
let array2 = Array.from(pseudo2);
console.log(array2);

let map = new Map();

map.set("1", "str1");
map.set(1, "num");
map.set(true, "bool1");

console.log(map);

console.log(map.get(1));
console.log(map.get("1"));
console.log(map.size);

let map2 = new Map();
map2.set("1", "we").set("2", "are").set("3", "three");

console.log(map2);

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomato", 300],
  ["onion", 50],
]);

console.log(recipeMap);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

for (let vegetable of recipeMap.values()) {
  console.log(vegetable);
}

for (let vegetable of recipeMap.entries()) {
  console.log(vegetable);
}

recipeMap.forEach((value, key) => {
  console.log(`${key} - ${value}`);
})