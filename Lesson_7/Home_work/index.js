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
