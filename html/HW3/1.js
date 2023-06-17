const celcius = parseFloat(prompt("Введите температуру в градусах Цельсия: "));
const farenheit = Math.round(((9 / 5) * celcius + 32) * 10) / 10;
alert(`Фаренгейт: ${farenheit}`)