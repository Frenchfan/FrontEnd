//создайте высплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя. уверен лион в своем решении закрыть страницу
window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
    event.returnValue = null;
});