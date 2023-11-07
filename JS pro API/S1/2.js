// Вы должны создать веб-страницу, которая позволяет пользователю динамически управлять элементами на странице. Ниже приведены основные требования и функциональность:
//На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и "Клонировать элемент".
//При нажатии на кнопку "Добавить элемент" на страницу добавляется новый квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент должен иметь класс .box и содержать текст, указывающий порядковый номер элемента (1, 2, 3 и так далее).
//При нажатии на кнопку "Удалить элемент" удаляется последний добавленный элемент, если таковой имеется.
//При нажатии на кнопку "Клонировать элемент" создается копия последнего добавленного элемента и добавляется на страницу.
//Все элементы имеют класс .box и стилизованы с помощью CSS .
//Элементы могут быть добавлены, удалены и клонированы в любом порядке и в любом количестве.
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const cloneButton = document.getElementById("cloneButton");
addButton.addEventListener("click", () => { 
    const boxes = document.getElementsByClassName("box")
    const element = document.createElement("div");
    element.className = "box";
    let lastBoxNumber = boxes.length > 0 ? parseInt(boxes[boxes.length - 1].innerText) : 0;
    element.innerText = ++ lastBoxNumber;
    document.body.appendChild(element); 
})
removeButton.addEventListener("click", () => {
    const boxes = document.getElementsByClassName("box")
    if (boxes.length > 0) {
        boxes[boxes.length - 1].remove();
    }    
})
cloneButton.addEventListener("click", () => {
    const boxes = document.getElementsByClassName("box")
    const element = document.createElement("div");
    element.className = "box";
    element.innerText = boxes[boxes.length - 1].innerText;
    document.body.appendChild(element); 
})