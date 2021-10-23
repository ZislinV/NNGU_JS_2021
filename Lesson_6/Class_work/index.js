// Разбор дз

// 16. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// const evenNine = (num) => {
//   num = `${num}`;
//   let sum = 0;
//   for (let i = 1; i < num.length; i += 1) {
//     sum += +num[i];
//   }

//   if (sum > 9) {
//     return evenNine(sum);
//   } else {
//     return sum;
//   }
// };
// console.log(evenNine(2472));

// 15. Дан массив с числами. Выведите последовательно его элементы.

// const arr = [2, 4, 3, 1];

// const arrSort = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!i) {
//       result[i] = arr[i];
//       continue;
//     }
//     if (arr[i] > result[i - 1]) {
//       result[i] = arr[i];
//     } else {
//       const a = result[i - 1];
//       result[i - 1] = arr[i];
//       result[i] = a;
//       i -= 1;
//     }
//   }
//   console.log(result);
// };
// console.log(arrSort(arr));
// не вышло=)

// Объекты

// let num1 = 1;
// let num2 = num1;

// console.log(num1, num2);

// num1 = 2;

// console.log(num1, num2);

// это примитивы, а теперь объекты:

// const obj1 = { name: "Alex" };
// const obj2 = obj1;
// console.log(obj1, obj2);

// obj1.name = "Ivan";
// console.log(obj1, obj2);

/////

// const obj = {};
// obj.name = 1;
// console.log(obj);

// [object Object]

// const obj = {};
// console.log(obj);

// obj.age = "12";
// obj["name-user"] = "Ivan";
// console.log(obj);
// console.log(obj.age, obj["name-user"]);

// obj.age = "18";
// obj["name-user"] = "Max";
// console.log(obj);

// delete obj.age;
// console.log(obj);
// console.log(obj.age);

/////////////////

// const obj = {
//   sayHi: function (name) {
//     console.log("Hi User", name);
//   },
// };

// obj.sayHi("Max");

/////////////////////////

// const myFavoriteFilm = {
//   name: "Scrubs",
//   Date: "1995",
//   director: "Zack",
//   country: "USA",
// };
// console.log(myFavoriteFilm);

// myFavoriteFilm.proceeds = "20М";
// console.log(myFavoriteFilm);

// myFavoriteFilm.showFilm = function () {
//   console.log(myFavoriteFilm.name);
// };

// delete myFavoriteFilm.Date;
// console.log(myFavoriteFilm);

/////////////////////////

// const str = "string";
// console.log(str);
// str[0] = "S";
// console.log(str);

/////////////////////////

// Практика

// 1. Реализовать функцию которая будет принимать числовой диапазон в качестве
// параметров [min, max] и будет возвращать случайное целое число из данного
// диапазона.

// const randomNumber = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// console.log(randomNumber(4.256, 54.23));

////

// const getRandom = (min, max) => {
//   const rand = Math.random() * (max - min);
//   const result = min + rand;
//   return Math.round(result);
// };

// console.log(getRandom(1, 100));

// 2. Реализовать функцию которая будет определять, в каком регистре записан n
// элемент переданной строки, если в верхнем то вернуть true, в противном случае
// вернуть false.

const checkRegistr = (str, n) => {
  if (n > str.length) {
    console.log("неверные параметры задачи");
    return;
  }
  if (str[n] === str[n].toUpperCase()) {
    return true;
  } else {
    return false;
  }
};
console.log(checkRegistr("паНама", 2));

// 3. Реализовать функцию которая заменяет в строке str, все вхождения подстроки
// find, на подстроку replace.

// const customReplaceAll = (str, find, replaceStr) => {
//   while (str.includes(find)) {
//     str = str.replace(find, replaceStr);
//   }
//   return str;
// };

// console.log(customReplaceAll("hi is, hi it me", "hi", "Hello"));

///////////////////

const customReplaceAll = (str, find, replaceStr) => {
  str = str.replace(find, replaceStr);
  if (str.includes(find)) {
    return customReplaceAll(str, find, replaceStr);
  } else {
    return str;
  }
};

console.log(customReplaceAll("hi is, hi it me", "hi", "Hello"));
