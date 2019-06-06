let howBudget = prompt("Ваш бюджет?", 1);
let nameMagaze = prompt("Название вашего магазина?", 'Холя моля');

let time = 19;

let mainList = {
    budget: howBudget,
    name: nameMagaze,
    shopGoods: [],
    employers: {},
    open: false
}

for (let i = 0; i < 5; i++) {

  let a = prompt("Какой тип товаров будем продавать?");

  if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a;
      }
      else {
      }
  }

if (time < 0) {
  colsole.log('Такого не может быть');
}
  else if (time > 8 && time < 20) {
    console.log('Время работать');
}
    else if ( time < 24) {
      console.log('Уже поздно');
    }
     else {
       console.log ('В сутка 24 часа, сука!');
     }

alert(mainList.budget / 30);
