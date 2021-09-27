alert ("Hello World!"); //(1)


let age = 25;
let physicsNumber = 23n;
const nameMySister = "Olya";
const youAreWoman = false;
let howMuchMoney = null;
let namePat = undefined;
const myAccountData = {age:30, zodiacSign:"Весы"};
let userID = Symbol ("id"); //(2)

console.log(age);
console.log(physicsNumber);
console.log(nameMySister);
console.log(youAreWoman);
console.log(howMuchMoney);
console.log(namePat);
console.log(myAccountData);
console.log(userID); //(3)

console.log (typeof age);
console.log (typeof physicsNumber);
console.log (typeof nameMySister);
console.log (typeof youAreWoman);
console.log (typeof howMuchMoney);
console.log (typeof namePat);
console.log (typeof myAccountData);
console.log (typeof userID); //(4)

try {
    nameMySister = "Maria";
console.log (typeof nameMySister)
} 
catch (err) {console.log ("Ошибка")}; //(5)

try {
    myAccountData = {age:31, zodiacSign:"Рак"};
    console.log (typeof myAccountData)} 
catch (err) {console.log ("Ошибка")}; // (6) 

let userData = {age:25, zodiacSign:"Овен"};
userData = {age:24, zodiacSign:"Рыбы"};
console.log (userData); //(7)

var userName = {firstName:"Саша", lastName:"Пономарёв"};
userData = {firstName:"Вова", lastName:"Петров"};
console.log (userData); //(8)