/*
Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
*/

//option1
function findElementByClass(className, element = document.documentElement) {
    if (element && element.classList && element.classList.contains(className)) {
      return element.parentNode;
    }
  
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      const foundElement = findElementByClass(className, children[i]);
      if (foundElement) {
        return foundElement;
      }
    }
  
    return null;
  }
  

const parentElement = findElementByClass("myclass");
if (parentElement) {
  console.log(parentElement.className);
} else {
  console.log("Element not found");
}

function findElementByClass2(className) {
  const elements = document.getElementsByTagName("*");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains(className)) {
      return elements[i].parentNode;
    }
  }
  return null;
}

const parentElement2 = findElementByClass2("myclass");
if (parentElement2) {
  console.log(parentElement2.className);
} else {
  console.log("Element not found");
}
