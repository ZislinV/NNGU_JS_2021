// Работа с if-else

// 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = -3;

// if (a === 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = -3;

// if (a > 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = 1;

// if (a < 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = -3;

// if (a >= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = -3;

// if (a <= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// let a = -3;

// if (a !== 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

// let a = 3;

// if (a === "test") {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

// let a = 3;

// if (a === "1") {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// Работа с логическими переменными

//  1. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// let test = true;
// if (test == true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let test = true;
// test == true ? console.log("Верно") : console.log("Неверно");

//  2. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// let test = false;
// if (test != true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let test = false;
// test != true ? console.log("Верно") : console.log("Неверно");

// Работа с && (и) и || (или)

//  1. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let value = 2;
// let result = value > 0 && value < 5 ? "Верно" : "Неверно";
// console.log(result);

//  2. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = 2;
// a == 0 || a == 2 ? (a = a + 7) : (a = a / 10);
// console.log(a);

//  3. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let a = 3;
// let b = 5;
// a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);

//  4. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = 1;
// let b = 6;
// (a > 2 && a < 11) || (b >= 6 && b <= 14)
//   ? console.log("Верно")
//   : console.log("Неверно");

//   На switch-case

//  1. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// let num = 4;
// let result;
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "лето";
//     break;
//   default:
//     result = "осень";
//     break;
// }
// console.log(result);

// Общие задачи

//  1. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = 1;
// let dec =
//   day < 11 ? "Первая деката" : day < 21 ? "Вторая деката" : "Третья деката";
// console.log(dec);
// Другие значения не проверяю, так как в условии сказано, что могут быть числа только в интервале от 1 до 31.

//  2. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let month = 8;
// let season =
//   month == 12 || month < 3
//     ? "Зима"
//     : month < 6
//     ? "Весна"
//     : month < 9
//     ? "Лето"
//     : "Осень";
// console.log(season);

//  3. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = "abcde";
// str[0] === "a" ? console.log("Верно") : console.log("Неверно");

//  4. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = "12345";
// switch (+str[0]) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Да");
//     break;
//   default:
//     console.log("Нет");
//     break;
// }

//  5. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// let str = "276";
// let sum = +str[0] + +str[1] + +str[2];
// console.log(sum);

//  6. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = "235532";
// +str[0] + +str[1] + +str[2] == +str[3] + +str[4] + +str[5]
//   ? console.log("да")
//   : console.log("нет");

// Циклы while и for

//  Решите эти задачи сначала через цикл while, а затем через цикл for.

//  1. Выведите столбец ычисел от 1 до 100.

// let i = 1;
// while (i < 101) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i < 101; i++) {
//   console.log(i);
// }

//  2. Выведите столбец чисел от 11 до 33.

// let i = 11;
// while (i < 34) {
//   console.log(i);
//   i++;
// }

// for (let i = 11; i < 34; i++) {
//   console.log(i);
// }

//  3. Выведите столбец четных чисел в промежутке от 0 до 100.

// let i = 0;
// while (i < 101) {
//   if (i % 2 == 1) continue;
//   console.log(i);
//   i += 2;
// }

// for (let i = 0; i < 101; i += 2) {
//   console.log(i);
// }

//  4. С помощью цикла найдите сумму чисел от 1 до 100.

// let sum = 0;
// let i = 1;
// while (i < 101) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// let sum = 0;
// for (i = 1; i < 101; i++) {
//   sum += i;
// }
// console.log(sum);

// Работа с for для массивов

//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// Задачи общие.

//  1. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= 3 || arr[i] >= 10) continue;
//   console.log(arr[i]);
// }

//  2. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let arr = [2, -5, 9, -15, 0, 4, -72, 1];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= 0) continue;
//   sum += arr[i];
// }
// console.log(sum);

//  3. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 4) continue;
//   console.log("Есть");
//   break;
// }

//  4 Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   let numb = arr[i] + "";
//   if (+numb[0] === 1 || +numb[0] === 2 || +numb[0] === 5) {
//     console.log(arr[i]);
//   }
// }

//  5. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = "-";
// for (let i = 0; i < arr.length; i++) {
//   str = str + arr[i] + "-";
// }
// console.log(str);

//  6. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let arr = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "Суббота") {
//     let b = arr[i].bold();
//     console.log(b);
//   } else if (arr[i] == "Воскресенье") {
//     let b = arr[i].bold();
//     console.log(b);
//   } else {
//     console.log(arr[i]);
//   }
// }

//  7. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

// let arr = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];
// let day = "Четверг";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == day) {
//     let today = arr[i].italics();
//     console.log(today);
//   } else {
//     console.log(arr[i]);
//   }
// }

//  8. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n = 1000;
// let num = 0;
// while (n >= 50) {
//   n = n / 2;
//   num++;
// }
// console.log("Последнее число:", n);
// console.log("Колличество необходимых итераций:", num);
