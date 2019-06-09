let money,
    name,
    time,
    price

function start() {
  money = prompt("Ваш бюджет?");

  while (isNaN(money) || money == '' || money == null) {
  money = prompt("Ваш бюджет?");
  }
  name = prompt("Название вашего магазина");
  time = 21;
}
start();

  var mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers:{},
    open: false,
    discount: true
}
function chooseGoods(){
for (var i = 0; i < 5; i++) {
  var a = prompt("Какой тип товаров будем продавать?");
  if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a;
  }   else {
        i = i - 1;
      }
  }
}
chooseGoods();

function workTime(time) {
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
}

workTime(18);
function dailyBudget() {
alert("Ежедневный бюджет" + mainList.budget / 30);
}

price = 18;
function dicountSystem() {
  if (mainList.discount = true) {
  alert(price * 0.8);
  }
}
dicountSystem();

function takeEmployers() {
  for (var b = 1; b < 6; b++) {
  var v = prompt("Имя?");
  if ((typeof(v)) === 'string' && (typeof(v)) != null && v != '' && v.length < 50) {
      console.log('Все верно');
      mainList.employers[b] = v;
  }   else {
        b = b - 1;
      }
  }
}
takeEmployers();
console.log(mainList.employers)
