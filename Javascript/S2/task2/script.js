// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// alert(a); 
// ```
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('abc' * 3);
// ```
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert(1 / 0);
// alert(-1 / 0);
// ```
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('2' * '3');
// ```
 
// Тайминг: 20 минут.

const a = 13;
const b = 5;
console.log(a%b);
//let a; - ошибка
alert(a);
alert('abc' * 3); // Nan
alert(1 / 0); // infinity
alert(-1 / 0); // -infinity
alert('2' * '3'); // 6