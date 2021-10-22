// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// const getSquare = (a) => a * a;
// console.log(getSquare(3));

// 2. Сделайте функцию, которая возвращает сумму двух чисел.

// const getSum = (a, b) => a + b;
// console.log(getSum(5, 124));

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// const getResult = (a, b, c) => (a - b) / c;
// console.log(getResult(15, 3, 4));

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// const showDay = (a) => {
//   if (a === 1) {
//     return "Понедельник";
//   } else if (a === 2) {
//     return "Вторник";
//   } else if (a === 3) {
//     return "Среда";
//   } else if (a === 4) {
//     return "Четверг";
//   } else if (a === 5) {
//     return "Пятница";
//   } else if (a === 6) {
//     return "Суббота";
//   } else if (a === 7) {
//     return "Воскресенье";
//   } else return "Неверное число";
// };
// console.log(showDay(7));

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// const checkEquality = (a, b) => (a === b ? true : false);
// console.log(checkEquality(5, 5));

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// больше 10 - пусть вернет true, а если нет то - false.

// const checkExpression = (a, b) => ((a + b) > 10 ? true : false);
// console.log(checkExpression(2, 9));

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// const checkNegative = (a) => (a < 0 ? true : false);
// console.log(checkNegative(2));

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = a => (a > 0 && a < 10 ? true : false);
// console.log(isNumberInRange(1));

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// const arr = [1, -5, 4, -3, 67, 0, 8, 2, -2, -24, 5];
// let newArr = [];
// const isNumberInRange = (a) => (a > 0 && a < 10 ? true : false);
// for (i = 0; i < arr.length; i++) {
//   if (isNumberInRange(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// const getDigitsSum = (digit) => {
//   let stringDigit = digit + "";
//   let sum = 0;
//   for (i = 0; i < stringDigit.length; i++) {
//     sum = sum + +stringDigit[i];
//   }
//   return sum;
// };

// console.log(getDigitsSum(10723));

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// const getDigitsSum = (digit) => {
//   let stringDigit = digit + "";
//   let sum = 0;
//   for (let i = 0; i < stringDigit.length; i++) {
//     sum = sum + +stringDigit[i];
//   }
//   return sum;
// };

// let arrSum13 = [];
// for (let i = 1; i < 2021; i++) {
//   if (getDigitsSum(i) === 13) {
//     arrSum13.push(i);
//   }
// }
// console.log(arrSum13);

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// const isEven = (digit) => (digit % 2 === 0 ? true : false);
// console.log(isEven(232));

// 13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// const isEven = (digit) => (digit % 2 === 0 ? true : false);

// const arr = [234, 341, 236, 2, -45, -32, 0];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (isEven(arr[i]) === true) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// const getDivisors = (number) => {
//   let arr = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

// console.log(getDivisors(152));

// 15. Дан массив с числами. Выведите последовательно его элементы.

// const arr = [2, -45, -56, 3, 0, 23];
// const showElements = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// };
// showElements(arr);

// 16. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// let number = 42356252;
// const getDigitsSum = (number) => {
//   let stringDigit = number + "";
//   let sum = 0;
//   for (i = 0; i < stringDigit.length; i++) {
//     sum = sum + +stringDigit[i];
//   }
//   return sum;
// };

// while (getDigitsSum(number) >= 9) {
//   number = getDigitsSum(number);
// }

// console.log(getDigitsSum(number));

// 17. Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

// const checkPalindrome = (str) => {
//   let pal = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[str.length - 1 - i]) {
//       pal = pal + str[i];
//     }
//   }
//   if (str === pal) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkPalindrome("шалаш"));
