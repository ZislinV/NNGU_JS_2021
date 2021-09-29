console.log("Hello World!"); // Вывод строки в терминал

let age = 25;
let physicsNumber = 23n;
const nameMySister = "Olya";
const youAreWoman = false;
let howMuchMoney = null;
let namePat = undefined;
const myAccountData = { age: 30, zodiacSign: "Весы" };
let userID = Symbol("id_Object"); // Создание переменных под каждый тип данных

console.log(age);
console.log(physicsNumber);
console.log(nameMySister);
console.log(youAreWoman);
console.log(howMuchMoney);
console.log(namePat);
console.log(myAccountData);
console.log(userID); // Вывод в консоль созданные переменные

console.log(typeof age);
console.log(typeof physicsNumber);
console.log(typeof nameMySister);
console.log(typeof youAreWoman);
console.log(typeof howMuchMoney);
console.log(typeof namePat);
console.log(typeof myAccountData);
console.log(typeof userID); // Вывод типов переменных

try {
  nameMySister = "Maria";
  console.log(nameMySister);
} catch (err) {
  console.log("Ошибка");
} // Попытка изменить переменную, объявленную через const

try {
  myAccountData = { age: 31, zodiacSign: "Рак" };
  console.log(myAccountData);
} catch (err) {
  console.log("Ошибка");
} // Попытка изменить переменную с типом object, объявленную через const

let userData = { age: 25, zodiacSign: "Овен" };
userData = { age: 24, zodiacSign: "Рыбы" };
console.log(userData); // Попытка изменить переменную с типом object, объявленную через let

var userName = { firstName: "Саша", lastName: "Пономарёв" };
userName = { firstName: "Вова", lastName: "Петров" };
console.log(userName); // Попытка изменить переменную с типом object, объявленную через var
