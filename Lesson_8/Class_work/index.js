// Копирование объектов

// const obj1 = { a: "Hello" };
// const obj3 = { b: "Hello Alex" };
// const obj2 = Object.assign({}, obj1, obj3);

// console.log(obj1, obj2);
// obj1.a = "Goodbay";
// console.log(obj1, obj2);

/////////////

// const obj1 = {
//   sayHello: "Hello",
//   user: { name: "Alex", age: { date: "28", year: "1996", month: "03" } },
// };

// const obj2 = Object.assign({}, obj1);
// console.log(JSON.stringify(obj1));
// глубокое копирование:
// const obj2 = JSON.parse(JSON.stringify(obj1));

// console.log(obj1.user, obj2.user);

// obj1.user.age.year = "2021";
// console.log(obj1.user, obj2.user);

//////////////spread (...) ///////

// const arr1 = [1, 2, 3, 4];

// const arr2 = [7, 8, 9];

// const arr3 = [...arr1, 5, 6, ...arr2];
// console.log(arr3);

// const obj1 = { name: "Alex", age: "25" };
// const obj2 = { ...obj1, name: "Max" };

// console.log(obj1, obj2);
// obj1.name = "Ivan";
// console.log(obj1, obj2);

/////

// const obj1 = { name: "Alex", age: "25" };
// const obj2 = { ...obj1, key: "user1" };

// console.log(obj1, obj2);

///////// rest оператор /////////

// const getSum = (a, b, ...args) => {
//   console.log(args);
// };
// getSum(1, 2, 3, 4);

// функция, которая первым аргументом принимает действие (сумма, вычитание), после принимает параметры////
// const getSum = (type, ...args) => {
//   if (type === "sum") {
//     //сумма
//     console.log(Array.isArray(args), "sum");
//   } else {
//     //вычитать
//     console.log(args, "negative");
//   }
// };

// getSum("sum", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

//////////////for of/////////// перебор только для массива /////

// const arr = [1, 2, 3, 4];
// for (let elem of arr) {
//   console.log(elem);
// }

//////////////for in/////////// перебор для объекта ////////

// const obj = { a: 1, b: 2 };
// for (let elem in obj) {
//   // вызов ключей:
//   console.log(elem);
//   // вызов свойств ключей:
//   console.log(obj[elem]);
// }

///////// Практика //////////

// 1. Создайте объект и скопируйте данный объект с помощью: Object.assign() и
// spread оператора. Изменить любое свойство в копии объекта, и проверить не
// изменился ли исходный.

// const obj1 = { name: "Vasya", age: "31" };
// const obj2 = Object.assign({}, obj1);
// const obj3Spread = { ...obj1 };

// obj1.name = "Ivan";
// console.log(obj1, obj2, obj3Spread);

// 2. Написать функцию которая будет принимать n-ое количество аргументов, в
// качестве результата функция будет возвращать сумму всех четных элементов.
// Для решения использовать цикл for (... of …).

// const sumChet = (...args) => {
//   let sum = 0;
//   for (let elem of args) {
//     if (elem % 2 === 0) {
//       sum += elem;
//     }
//   }
//   return sum;
// };
// console.log(sumChet(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 3. Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во
// втором массиве.

// const arr1 = [1, 2, 3, 6, 6, 4];
// const arr2 = [4, 5, 6];

// const getNewArr = (arr1, arr2) => {
//   const newArr = [];
//   for (let el1 of arr1) {
//     if (arr2.find((el2) => el2 === el1) && !newArr.find((el3) => el3 === el1)) {
//       newArr.push(el1);
//     }
//   }
//   return newArr;
// };
// console.log(getNewArr(arr1, arr2));

//////////////////////////// PART II //////////////////////////////
//////////////// Продвинутая работа с функциями ///////////////////

// console.log(global);

// var name = "Alex";

// function example() {
//   console.log(this);
// }
// console.log(global.name);
// не заработало
//////////////////////
// const user = {
//   name: "Alex",
//   age: "25",
//   getName: function () {
//     console.log(this.name);
//   },
// };
// user.getName();
//////////////////////

// function getName() {
//   console.log(this.name);
// }

// function setName(newName) {
//   this.name = newName;
//   console.log(this.name);
// }

// const user = {
//   name: "Alex",
//   age: "25",
//   getUserName: getName,
//   setUserName: setName,
// };
// user.getUserName();

// const user1 = {
//   name: "Ivan",
//   age: "28",
//   getUserName: getName,
//   setUserName: setName,
// };
// user1.getUserName();

// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
//   setUserName: setName,
// };

// admin.getAdminName();

// console.log(user);
// user.setUserName("Ira");
// user.getUserName;
// console.log(user);

/////////

// function example() {
//   console.log(this);
// }
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();

///////////

// function startFight() {
//   return this.strange * this.agility;
// }

// const hero = {
//   name: "John",
//   strange: 20,
//   agility: 10,
//   health: 100,
//   fight: startFight,
// };

// const dracula = {
//   name: "Vlad",
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: startFight,
// };

// console.log(hero.fight(), dracula.fight());

// if (hero.fight() > dracula.fight()) {
//   console.log("Герой победил!! Ура!");
// } else {
//   console.log("Провал, вы погибли");
// }

///////////////////////// Практика /////////////////////////////

const city = {
  cityName: "Moscow",
  population: "15 ml",
  getCityName: function () {
    return this.cityName;
  },
  getPopulation: function () {
    return this.population;
  },
  setSomeValue: function (key, value) {
    this[key] = value;
  },
};
console.log(city);
city.setSomeValue("cityName", "Paris");
city.setSomeValue("population", "9 ml");
console.log(city);
