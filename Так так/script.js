var howBudget = prompt("Ваш бюджет?", 1), nameMagaze = prompt("Название вашего магазина?", 'Холя моля');
mainList = {
 budget: howBudget,
 name: nameMagaze,
 shopGoods: [],
}
var a, b, c;
a = prompt('Какой тип товаров будем продавать?', ' ');
b = prompt('Какой тип товаров будем продавать?', ' ');
c = prompt('Какой тип товаров будем продавать?', ' ');
mainList.shopGoods.unshift(a, b, c);
alert ('Ваш бюджет на день: ' + mainList.budget/30);
