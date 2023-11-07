//Используйте объект history для управлеиня историей переходов на веб-странице. Создайте кнопки Назад и Вперед для перемещения по истории
const backButton = document.createElement("button");
backButton.textContent = "Назад";
backButton.addEventListener("click", () => {
    window.history.back();
});

const forwardButton = document.createElement("button");
forwardButton.textContent = "Вперед";
forwardButton.addEventListener("click", () => {
    window.history.forward();
});

document.body.appendChild(backButton);
document.body.appendChild(forwardButton);