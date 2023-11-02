//Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении

function printWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Width: ${width}px, Height: ${height}px`);
}

window.addEventListener('resize', printWindowSize);