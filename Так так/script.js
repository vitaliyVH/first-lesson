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

  let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers:{},
    open: false,
    discount: false,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (var i = 0; i < 5; i++) {
          let a = prompt("Какой тип товаров будем продавать?");
          if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
              console.log('Все верно');
              mainList.shopGoods[i] = a;
          }   else {
                i = i - 1;
              }
          }
    },
      workTime: function workTime(time) {
        if (time < 0) {
          colsole.log('Такого не может быть');
        }
          else if (time > 8 && time < 20) {
            console.log('Время работать');
            mainList.open = true;
        }
            else if ( time < 24) {
              console.log('Уже поздно');
            }
             else {
               console.log ('В сутка 24 часа, сука!');
             }
        },
    dayBudget: function dayBudget() {
    alert("Ежедневный бюджет" + mainList.budget / 30);
  },
  makeDiscount: function makeDiscount() {
  if (mainList.discount == true) {
    price = (price/100)*80;
  }
},
  hireEmployers: function hireEmployers() {
    for (i = 1; i < 4; i++) {
      let name = prompt("Имя сотрудника", "");
      mainList.employers[i] = name;
    }
  },
  chooseShopItems: function chooseShopItem() {
    let items = prompt('Перечислите через запятую ваши товары', '');

    mainList.shopItems = items.split(',');
    mainList.shopItems.push(prompt('Подождите еще ', ''));
    mainList.shopItems.sort();
  }
}
mainList.chooseShopItems();
let i = 1;
mainList.shopItems.forEach(function(item, i, shopItems) {
  console.log(i + ' : ' + item + ' массив: ' + mainList.shopItems + ")");
});


console.log(mainList);
