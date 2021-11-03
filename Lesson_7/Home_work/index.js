// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// let newArr = vegetables.map((el) => el.length);
// console.log(newArr);

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// const currentSums = (numbers) => {
//   const newArr = [];
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     newArr.push(numbers[i]);
//     result.push(newArr.reduce((accum, el) => accum + el));
//   }
//   return result;
// };
// console.log(currentSums(numbers));

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// (1) Первый вариант с повторяющимися числами в парах:
// const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// const sumSeven = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.find((el) => el === 7 - arr[i])) {
//       newArr.push(`${arr[i]}:${arr[arr.find((el) => el === 7 - arr[i])]}`);
//     }
//   }
//   return newArr;
// };
// console.log(sumSeven(arr));

// (2) Второй вариант без повторных чисел в парах:

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// const sumSeven = (arr) => {
//   const newArr = [];
//   const arrUsed = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arrUsed.find((e) => e === arr.find((el) => el === 7 - arr[i])) ===
//       undefined
//     ) {
//       newArr.push(`${arr[i]}:${arr[arr.find((el) => el === 7 - arr[i])]}`);
//       arrUsed.push(arr[i]);
//     }
//   }
//   return newArr;
// };
// console.log(sumSeven(arr));

// 4. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

// const str = "Каждый охотник желает знать, где сидит фазан.";
// function stringToArray(str) {
//   str = str + " ";
//   let newArr = [str.slice(0, str.indexOf(" "))];
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] === " ") {
//       newArr.push(str.slice(i + 1, str.indexOf(" ", i + 1)));
//     }
//   }
//   return newArr;
// }
// const getFirstLetter = (strArr) => {
//   const letterArr = [];
//   strArr.forEach((e) => letterArr.push(e[0]));
//   return letterArr;
// };
// console.log(getFirstLetter(stringToArray(str)));

// 5. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// const str = "JavaScript";

// const strSymbols = (str) => {
//   const newArr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (i === 0) {
//       newArr.push(`${str[i] + str[i + 1]}`);
//     } else if (i === str.length - 1) {
//       newArr.push(`${str[i - 1] + str[i]}`);
//     } else {
//       newArr.push(`${str[i - 1] + str[i] + str[i + 1]}`);
//     }
//   }
//   return newArr;
// };
// console.log(strSymbols(str));

// 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// const numerics = [5, 7, 2, 9, 3, 1, 8];
// const decrease = (numerics) => {
//   const newArr = [];
//   let maxNum;
//   for (let j = 0; j < numerics.length; j++) {
//     maxNum = 0;
//     for (let i = 0; i < numerics.length; i++) {
//       if (newArr.find((el) => el === numerics[i]) === undefined) {
//         maxNum = Math.max(numerics[i], maxNum);
//       }
//     }
//     newArr.push(maxNum);
//   }
//   return newArr;
// };
// console.log(decrease(numerics));

// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [7, 8, 9];

// const getArr = (a, b, c) => {
//   const jointArr = a.concat(b).concat(c);
//   const newArr = [];
//   let maxNum;
//   for (let j = 0; j < jointArr.length; j++) {
//     maxNum = 0;
//     for (let i = 0; i < jointArr.length; i++) {
//       if (newArr.find((el) => el === jointArr[i]) === undefined) {
//         maxNum = Math.max(jointArr[i], maxNum);
//       }
//     }
//     newArr.push(maxNum);
//   }
//   const result = [`${newArr[0]}`];
//   for (let r = 1; r < newArr.length; r++) {
//     result[0] += " " + newArr[r];
//   }
//   return result;
// };

// console.log(getArr(a, b, c));

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

// 1ый вариант (for(for))////////////////////////////////////////

// const arr = [[1, 2, 3], [4, 5], [6]];

// const getSum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//   }
//   return sum;
// };
// console.log(getSum(arr));

// 2ой вариант c reduce и map:////////////////////////////////////

// const arr = [[1, 2, 3], [4, 5], [6]];

// const getSum = (arr) => {
//   return arr
// .map((e) => e.reduce((accum, e) => accum + e))
// .reduce((accum, e) => accum + e);
// };
// console.log(getSum(arr));

// 9. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];

// const getSum = (arr) => {
//   return arr
//     .map((e) =>
//       e
//         .map((e) => e.reduce((accum, e) => accum + e))
//         .reduce((accum, e) => accum + e)
//     )
//     .reduce((accum, e) => accum + e);
// };

// console.log(getSum(arr));

// 10. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = [1, 3, 5, 0, 10];
// const getReverseArr = (arr) => {
//   const newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// };
// console.log(getReverseArr(arr));

// 11. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const arr = [1, 3, 5, 0, 2, 3];

// const getIteration10 = (arr) => {
//   let sum = 0;
//   let elements = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (sum <= 10) {
//       elements += 1;
//       sum += arr[i];
//     }
//   }
//   return elements;
// };
// console.log(
//   `нужно сложить первые ${getIteration10(
//     arr
//   )} элемента(ов), чтобы в сумме было больше 10`
// );

// 12. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (element, n) => {
//   const newArr = [];
//   let i = 0;
//   while (i < n) {
//     i += 1;
//     newArr.push(element);
//   }
//   return newArr;
// };

// console.log(arrayFill("x", 5));
