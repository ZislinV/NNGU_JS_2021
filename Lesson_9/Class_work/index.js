// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}`;
// }

// console.log(sayFullName("Alex", "Shirokov"));

// console.log(sayFullName.call({ phrase: "Hello!!" }, "Ivan", "Smirnov"));

// let boundFullName = sayFullName.bind({ phrase: "Bye!" }, "Max", "Petrov");
// console.log(boundFullName);
// console.log(boundFullName());

// let bound2 = sayFullName.bind({ phrase: "Hello!" }, "Kate");
// console.log(bound2("Petrova"));
// console.log(bound2("Smirnova"));

//////Практика///////

// const town = {
//   townName: "London",
//   population: "13 ml",
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// const town2 = {
//   townName: "Moscow",
//   population: "15 ml",
// };

// console.log(town.getTownName.call(town2));
// console.log(town.getPopulation.call(town2));

// const newtown2 = town.setSomeValue.bind(town2, "townName", "Norilsk");
// newtown2();
// console.log(town2);

//////Пример с собеса////

// function test(b) {
//   const a = 0;
//   console.log(b);
// }

// const bound = test.bind({ a: 10 }, 8);
// bound();

///////////////////ЗАМЫКАНИЯ/////////////////

// let a = 0;
// console.log(a);

// const test = () => {
//   a = 10;
// };

// test();
// console.log(a);

///////

// function getFullName() {
//   const firstName = "Alex";

//   function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   }

//   return getSecondName;
// }

// const clouser = getFullName();
// console.log(clouser("Shirokov"));

////////

// const getArea = (a) => {
//   return (b) => a * b;
// };

// const areaWithTen = getArea(10);
// console.log(areaWithTen(8));
// console.log(areaWithTen(5));

// const areaWithFour = getArea(4);
// console.log(areaWithTen(3));
// console.log(areaWithTen(21));

///// Практика /////

// const getVolume = (a) => {
//   return (b, c) => a * b * c;
// };
// const volumeHeightTen = getVolume(10);
// console.log(volumeHeightTen(10, 10));
// console.log(volumeHeightTen(5, 5));

/////////

// const getVol = (height) => (width, length) => height * width * length;
// const getAll = getVol(10);
// console.log(getAll(4, 5));

// const getAll2 = getVol(8);
// console.log(getAll(4, 2));

/////////////////////////////////////////////////////////////////////////

///////////////////////////Прототипы и классы////////////////////////////

/////////////////////////////////////////////////////////////////////////

// const people = {
//   getName: function () {
//     return this.name;
//   },
// };

// const user = {
//   name: "Alex",
//   __proto__: people,
// };

// const admin = {
//   name: "Vasya",
//   __proto__: people,
// };
// // console.log(people.getName());
// console.log(user.getName());
// console.log(admin.getName());

//////
// let animal = {
//   jumps: "Прыжок!",
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: "Заяц прыгнул!",
// };

// console.log(rabbit.jumps); // ? (1)
// delete rabbit.jumps;
// console.log(rabbit.jumps); // ? (2)
// delete animal.jumps;
// console.log(rabbit.jumps); // ? (3)

/////

// const arr = [];
// console.log(arr.__proto__);

//////////////// Функции конструкторы ////////////////////

// function CreateUser(name, age) {
//   (this.userName = name), (this.userAge = age);
// }

// CreateUser.prototype.sayHi = function () {
//   return `Hello! My name is ${this.userName}`;
// };
// const userOne = new CreateUser("Alex", 25);
// const userTwo = new CreateUser("Max", 30);

// // console.log(userOne);
// // console.log(userTwo);
// console.log(userOne.sayHi());
// console.log(userTwo.sayHi());

///// Практика /////
// мой вариант

// function Postcard(from, to) {
//   this.from = from;
//   this.to = to;
//   this.show = function (from, to) {
//     return `От: ${this.from}. Кому: ${this.to}`;
//   };
// }

// Postcard.prototype.newFrom = function (newFrom) {
//   this.from = newFrom;
// };
// const postCardOne = new Postcard("Kate", "Max");
// console.log(postCardOne);
// postCardOne.newFrom("Ivan");
// console.log(postCardOne);
// console.log(postCardOne.show());

// вариант Алексея

// function CreatePostCard(from, to) {
//   this.from = from;
//   this.to = to;
// }

// CreatePostCard.prototype.show = function () {
//   console.log(`${this.from} отправил открытку ${this.to}`);
// };

// CreatePostCard.prototype.setFromValue = function (newFrom) {
//   this.from = newFrom;
// };

// const firstCard = new CreatePostCard("Alex", "Ivan");
// console.log(firstCard);
// firstCard.show();
// firstCard.setFromValue("Max");
// console.log(firstCard);
// firstCard.show();

////////////// КЛАССЫ ///////////////

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     return `Привет, мое имя ${this.name}`;
//   }
// }

// const firstParent = new Parent("Max");
// console.log(firstParent);
// console.log(firstParent.sayName());

// class Child extends Parent {
//   constructor(name, lastName) {
//     super(name);
//     // this.lastName = lastName;
//   }
//   sayName() {
//     console.log("Это внутренний метод");
//   }
//   sayFullName() {
//     const nameString = `${super.sayName()} ${this.lastName}`;
//     return nameString;
//   }
// }

// get lastName(){
//     return this._lastName;
// }

// set lastName(newValue){this._lastName}

// getLastName(){return this.lastName}

// const firstChild = new Child("Ivan", "Petrov");

// console.log(firstChild);
// console.log(firstChild.sayFullName());
// firstChild.sayName();

/////////////////// Практика ////////////////////

class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `Имя: ${this.name}, Фамилия: ${this.surname}`;
  }
}

const firstPeople = new People("Ivan", "Ivanov");
console.log(firstPeople.getFullName());

class Worker extends People {
  constructor(name, surname, rate, daysCount) {
    super(name, surname);
    this.rate = rate;
    this.daysCount = daysCount;
  }
  getSalary() {
    return `${this.getFullName()}. Получает ${this.rate * this.daysCount} руб.`;
  }
}

const firstWorker = new Worker("Semen", "Petrov", 1500, 20);
console.log(firstWorker.getSalary());

const secondWorker = new Worker("Petr", "Molotov", 2900, 20);
console.log(secondWorker.getSalary());
