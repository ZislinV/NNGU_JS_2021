// Разбор ДЗ
// Ex.15
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// const str = "String Random";
// const substr = "Random";

// String.prototype.endsWith = (str, substr) => {
//   const findStr = String(str.match(/(\S+)$/g));
//   if (substr === findStr) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(String.prototype.endsWith(str, substr));

// Ex.16
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// const str = "Астрономия — Наука о небесных телах";

// const getSubstr = (str, char, pos) => {
//   if (pos === "до") {
//     return str.slice(0, char);
//   } else if (pos === "после") {
//     return str.slice(char);
//   } else {
//     return "Error";
//   }
// };

// console.log(getSubstr(str, 10, "после"));

// Ex.19
// 19. Количество вхождений символа в строке.
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// const str = "Астрономия это наука о небесных объектах";

// const count = (str, strSymbol) => {
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === strSymbol) {
//       count += 1;
//     }
//   }
//   return count;
// };

// console.log(count(str, "а"));

// ОБЪЕКТЫ

// const arr1 = new Array(4, 5, 66, 8, 9);

// console.log(arr1.length);

// const arr2 = new Array(4);

// console.log(arr2);

// const arr3 = [1, 2, 3, 4, 5];
// console.log(arr3);

// arr3[3] = 10;
// console.log(arr3);

// const data = [
//   {
//     name: "Alex",
//     age: "20",
//   },
//   {
//     name: "Ivan",
//     age: "21",
//   },
//   {
//     name: "Alena",
//     age: "32",
//   },
// ];

// console.log(data[0].name);

// const arr = [];
// console.log(arr);

// arr[0] = "Ноль";
// console.log(arr);

// arr[10] = "Десять";
// console.log(arr);

// arr[5] = "Пять";
// console.log(arr);

// console.log(arr.length);

///////

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr);

// arr.length = 2;
// console.log(arr);

///////

// const arr = [];

// const testLength = arr.push(1);
// console.log(testLength);
// arr.push(10);

// console.log(arr);

// arr.push(10, 100, 120);
// console.log(arr);

///////

// const customFind = (arr, arrSymbol) => {
//   let result;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arrSymbol) {
//       result = arr[i];
//     }
//   }
//   return result;
// };

// console.log(customFind([1, 2, 3, 4], 3));
// console.log([1, 2, 3, 4].find((el) => el === 3));

///////

// const data = [
//   { title: "First", writer: "Alex" },
//   { title: "Second", writer: "Ivan" },
//   { title: "Third", writer: "Alex" },
//   { title: "Four", writer: "Max" },
//   { title: "Five", writer: "Max" },
//   { title: "Six", writer: "Ivan" },
//   { title: "Seven", writer: "Alex" },
// ];

// console.log(data);
// const filterData = data.filter((el) => el.writer === "Alex");
// console.log(filterData);
// console.log(data);

///////

// const data = [
//   { title: "First", writer: "Alex" },
//   { title: "Second", writer: "Ivan" },
//   { title: "Third", writer: "Alex" },
//   { title: "Four", writer: "Max" },
//   { title: "Five", writer: "Max" },
//   { title: "Six", writer: "Ivan" },
//   { title: "Seven", writer: "Alex" },
// ];

// const newData = data.map((el, i) => {
//   el.index = i;
//   return el;
// });

// console.log(newData);

///////

// const data = [
//   { title: "First", writer: "Alex" },
//   { title: "Second", writer: "Ivan" },
//   { title: "Third", writer: "Alex" },
//   { title: "Four", writer: "Max" },
//   { title: "Five", writer: "Max" },
//   { title: "Six", writer: "Ivan" },
//   { title: "Seven", writer: "Alex" },
// ];

// const testForEach = data.forEach((el) => console.log(el.title));
// console.log(testForEach);

///////

// const data = [
//   { value: 2, month: "январь" },
//   { value: 3, month: "февраль" },
//   { value: 5, month: "март" },
// ];

// const valueSum = data.reduce((acum, curValue) => acum + curValue.value, 0);
// console.log(valueSum);

///////

// Практика

// 1. Написать функцию, которая будет принимать массив чисел, содержащий целые
// положительные и целые отрицательные числа, в качестве результата возвращать
// сумму четных положительных элементов переданного массива.

// const arr = [1, 2, -3, 4, -5, -6];
// const posSum = (arr) =>
//   arr
//     .filter((el) => el > 0 && el % 2 === 0)
//     .reduce((acum, value) => acum + value);

// console.log(posSum(arr));

// 2. Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного.

const arr = [1, 2, -3, 4, -5, 4, 2, -3, -6];

// const uniqArr = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(uniqArr(arr));

// const uniqArr = (arr) => {
//   const result = [];
//   arr.forEach((el) => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };
// проверить на ошибку

// 3.Написать функцию которая будет принимать два массива, и будет сравнивать
// их, если они идентичны (элементы совпадают по значению и по индексу) то
// функция возвращает true, в противном случае false.

// const arr1 = [1, 4, 5, -6];
// const arr2 = [1, 4, 5, -6, 7];
// const isEqualArr = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return !arr1.map((el, i) => el === arr2[i]).includes(false);
// };
// console.log(isEqualArr(arr1, arr2));

///////2ой вариант решения///////

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const isArr = (array1, array2) => array1.toString() === array2.toString();
console.log(isArr(arr1, arr2));
