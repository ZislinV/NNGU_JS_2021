// 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// const str = "Каждый охотник желает знать";
// function stringToarray(str) {
//   str = str + " ";
//   let newArr = [str.slice(0, str.indexOf(" "))];
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] === " ") {
//       newArr.push(str.slice(i + 1, str.indexOf(" ", i + 1)));
//     }
//   }
//   return newArr;
// }

// console.log(stringToarray(str));

// 2. Удаление указанного количества символов из строки.
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const str = "Каждый охотник желает знать";

// function stringToarray(str) {
//   str = str + " ";
//   let newArr = [str.slice(0, str.indexOf(" "))];
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] === " ") {
//       newArr.push(str.slice(i + 1, str.indexOf(" ", i + 1)));
//     }
//   }
//   return newArr;
// }

// воспользуемся функцией из предыдущей задачи

// function delete_characters(str, length) {
//   for (let i = 0; i < stringToarray(str).length; i++) {
//     if (stringToarray(str)[i].length === length) return stringToarray(str)[i];
//   }
// }

// console.log(delete_characters(str, 6));

// 3. Вставить тире между словами строки.
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// const str = "HTML JavaScript PHP";
// const insert_dash = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     str[i] === " " ? (newStr += "-") : (newStr += str[i].toUpperCase());
//   }
//   return console.log(newStr);
// };
// insert_dash(str);

// 4. Сделать первую букву строки прописной.
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const str = "string not starting with capital";
// const cursive_letter = (str) => {
//   return str.trim()[0].toUpperCase() + str.trim().slice(1);
// };
// console.log(cursive_letter(str));

// 5. Первая буква каждого слова заглавная.
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// const str = "каждый охотник желает знать";

// function stringToarray(str) {
//   str = str + " ";
//   let newArr = [str.slice(0, str.indexOf(" "))];
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] === " ") {
//       newArr.push(str.slice(i + 1, str.indexOf(" ", i + 1)));
//     }
//   }
//   return newArr;
// }
// воспользуемся функцией из первой задачи

// const capitalize = (str) => {
//   let newStr = "";
//   for (let i = 0; i < stringToarray(str).length; i++) {
//     newStr +=
//       stringToarray(str)[i][0].toUpperCase() +
//       stringToarray(str)[i].slice(1) +
//       " ";
//   }
//   return newStr.trim();
// };
// console.log(capitalize(str));
