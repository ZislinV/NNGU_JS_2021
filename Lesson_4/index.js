// if (1) {
//   console.log("TRUE");
// }

// if (0) {
//   console.log("FALSE");
// }

// console.log("START");
// const value = -5;

// if (value > 0) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// console.log("FINISH");
/////////////////////////////////////////

// console.log("START");

// let value = 5;

// if (value === 0) {
//   console.log(value, " = value");
// } else if (value > 1) {
//   console.log(value, " > 1");
// } else if (value < -1) {
//   console.log(value, " < -1");
// } else {
//   console.log(value);
// }

// console.log("Finish");
////////////////////////////

// const age = 12;
// const result = age >= 18 ? "Доступ разрешен" : "Доступ запрещен";

// console.log(result);
////////////////////////////////////////

// switch ("Ivan") {
//   case "Ivan":
//     console.log("IVAN");
//     break;
//   case "Alex":
//     console.log("ALEX");
//     break;
//   case "Max":
//     console.log("MAX");
//     break;
//   default:
//     console.log("Имени нет в списке");
// }

// console.log("FINISH");
////////////////////////////

// ЗАДАЧА №1

// const dlina = 1;
// const shirina = 8;
// const vysota = 17;

// if ((dlina > shirina, dlina > vysota)) {
//   console.log(dlina, " наибольшее значение");
// } else if ((shirina > dlina, shirina > vysota)) {
//   console.log(shirina, " наибольшее значение");
// } else {
//   console.log(vysota, " наибольшее значение");
// }

//ЗАДАЧА №1 от Алексея//

// const a = 1;
// const b = 2;
// const c = 3;

// if (a > b) {
//   a > c ? console.log(a) : console.log(c);
// } else {
//   b > c ? console.log(b) : console.log(c);
// }

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// ЗАДАЧА №2

// const temp = 37;

// if (temp < -30) {
//   console.log("Оставайтесь дома!");
// } else if (temp <= -10) {
//   console.log("Сегодня холодно");
// } else if (temp <= 5) {
//   console.log("Не холодно");
// } else if (temp <= 15) {
//   console.log("Тепло");
// } else if (temp <= 25) {
//   console.log("Очень тепло");
// } else if (temp <= 35) {
//   console.log("Жарко");
// } else {
//   console.log("Пекло!");
// }

// // ЗАДАЧА №3

// const admin = { name: "John", age: 38, favouriteDrink: "Cola" };
// const manager = { name: "Martin", age: 29, favouriteDrink: "Tea" };
// const user = { name: "Olga", age: 22, favouriteDrink: "Coffee" };

// switch (user) {
//   case admin:
//     console.log(admin);
//     break;
//   case manager:
//     console.log(manager);
//     break;
//   case user:
//     console.log(user);
//     break;
//   default:
//     console.log("Нет в списке");
// }

// Задача №3 от Алексея

// const userRole = "manager";

// switch (userRole) {
//   case "user":
//     console.log("user info");
//     break;
//   case "admin":
//     console.log("admin info");
//     break;
//   case "manager":
//     console.log("manager info");
//     break;
//   default:
//     console.log("no info");
// }

/// ИЛИ ///

// const a = 0;
// const b = 1;

// const result1 = a || b;
// console.log(result1);

/// И ///

// const a = 10;
// const b = "dS";

// const result = a && b;

// console.log(result);

///////

// console.log(!!"Alex");

///////// WHILE ///////

// console.log ("start");
// while (false) {console.log("loop");
// }
// console.log("end");

// let i = 0;
// // while (i < 10) {
// //   console.log(i);
// //   i += 1;
// // }
// // console.log("end");

// do {
//   console.log("WORK");
// } while (i);
// console.log("end");

/// Практика ///
/// Задача 1 ///

// for (let i = 0; i < 10; i += 1) {
//   console.log("loop");
// }

// let b = 0;
// while (b < 10) {
//   b += 1;
//   console.log("string");
// }

/// Задача 2 ///

// let i = 0;
// let m = 10;
// let n = 20;
// while (n >= m) {
//   (n = n / 2), (i += 1);
// }
// console.log(i, " дней");

// let days = 0;
// let m = 10;
// let n = 20;
// for (let i = n; i >= m; i = i / 2) {
//   days = days + 1;
// }
// console.log(days, " дней");

/// Задача 2 от Алексея ///

let M = 100;
let N = 26;
let days = 0;

while (M >= N) {
  M /= 2;
  days += 1;
}

console.log(days);
