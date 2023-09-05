/*
Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная
от самого объекта и заканчивая глобальным объектом Object.prototype.
*/
const getPrototypeChain = (obj) =>  {
    let current = obj;
    const outArr = [];
    while (current) {
        outArr.push(current);
        current = Object.getPrototypeOf(current);
    }
    console.log(outArr);        
}

getPrototypeChain(Date);

class myClass1 {
    a = 1;
    b = 2;
}

class myClass2 extends myClass1 {
    c = 3;
}

class myClass3 extends myClass2 {
    d = 5;
}

const newClass = new myClass3;

getPrototypeChain(myClass3);
getPrototypeChain(newClass);

const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    c: 3
}

const obj3 = {
    d: 4
}

getPrototypeChain(obj3);