// const isUserAuth = true;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }
// checkAccess();

// function writeMessage() {
//   if (isUserAuth) {
//     console.log("Привет пользователь");
//   } else {
//     console.log("Привет гость");
//   }
// }
// writeMessage();

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(1, 0);
// sum(16);

// function getName(name) {
//   console.log("до return");
//   return name;
//   console.log("после return");
// }
// const userName = getName("Ivan");
// console.log(userName);

// let name = "Alex";
// function getName(userName) {
//   return userName;
// }
// const nameUserOne = getName(name);
// console.log(nameUserOne);

// name = "Ivan";

// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// let name = "Alex";
// console.log(name, "1");
// function sayHi(userName) {
//   userName = "Petr";
//   console.log(userName, "function");
// }
// sayHi(name);
// console.log(name, "2");

// let a = 0;
// let b = 0;
// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

// Практика

// let userName = "Alex";
// function hiUser(userName = "Гость") {
//   console.log(`Привет ${userName}`);
// }
// hiUser(userName);

// function math(a, b = 1) {
//   console.log(a ** b);
// }
// math(2);

// let arr = [1, 2, 12];

// function sr(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   console.log(sum / arr.length);
// }
// sr(arr);

// function sr(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(sr([1, 23, 6]));

// const sayName = function (name) {
//   return name;
// };

// const copy = sayName;
// console.log(sayName("Alex"));
// console.log(copy("Ivan"));

// const getName = function () {
//   console.log("Alex");
// };
// const getUserInfo = function (callBack) {
//   console.log("USER INFO");
//   callBack();
// };
// getUserInfo(getName);

// test();
// function test() {
//   console.log("test");
// }

// const test2 = function () {
//   console.log("test 2");
// };
// test2();

// const myFirstArrowFunc = () => console.log("!!");

// const test1 = (name, age) => console.log(name, age);
// test1("Alex", 19);

// const test1 = (name) => {
//   // func body
//   return name;
// };
// console.log(test1("Alex"));

// const getLog = () => console.log("LOG");
// getLog();

// FD
// function example1(param) {
//   return param;
// }
// example1(1);
// // FE
// const example2 = function (param) {
//   return param;
// };
// example2(2);
// //   AF.1
// const example3 = (param) => param;
// example3(3);
// // AF.2
// const example4 = (param) => {
//   // big body
//   return param;
// };
// example4(3);

// Ex1
// const test = (str, n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(str);
//   }
// };
// test("SOS", 5);

// Ex2
// let letter = "A";
// const glasn = (letter) =>
//   letter === "a" ||
//   letter === "e" ||
//   letter === "i" ||
//   letter === "o" ||
//   letter === "u" ||
//   letter === "y" ||
//   letter === "A" ||
//   letter === "E" ||
//   letter === "I" ||
//   letter === "O" ||
//   letter === "U" ||
//   letter === "Y"
//     ? true
//     : false;
// console.log(glasn(letter));

// Задача про палиндромы

// const palindrome = (str) => {
//   let rever = str.split("").reverse().join("");
//   if (rever === str) {
//     console.log("да");
//   } else {
//     console.log("нет");
//   }
// };
// palindrome("шалаш");

const palindrome = (str) => {
  let pal = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      pal = pal + str[i];
    }
  }
  if (str === pal) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("шалаш"));
