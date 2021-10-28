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

// 6. Смена регистра символов строки.
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

// const change_register = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       newStr += " ";
//     } else if (str[i] === str[i].toUpperCase()) {
//       newStr += str[i].toLowerCase();
//     } else {
//       newStr += str[i].toUpperCase();
//     }
//   }
//   return newStr;
// };

// console.log(change_register(str));

// 7. Удалить все не буквенно-цифровые символы.
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

// const remove_char = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     (str[i] >= "0" && str[i] <= "9") ||
//     (str[i] >= "A" && str[i] <= "Z") ||
//     (str[i] >= "a" && str[i] <= "z")
//       ? // || str[i] === " "
//         (newStr += str[i])
//       : false;
//   }
//   return newStr;
// };
// console.log(remove_char(str));

// 8. Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// function zeros(num, len, sign) {
//   let newStr = sign;
//   let difference = len - (num + "").length;
//   for (let i = 0; i < difference; i++) {
//     newStr += 0;
//   }
//   return (newStr += num + "");
// }
// console.log(zeros(123, 6, "+"));

// 9. Сравнение строк без учёта регистра.
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const comparison = (str1, str2) => {
//   if (str1.toUpperCase() > str2.toUpperCase()) {
//     return console.log("Строка №1 больше строки №2");
//   } else if (str2.toUpperCase() > str1.toUpperCase()) {
//     return console.log("Строка №2 больше строки №1");
//   } else {
//     return console.log("Строки равны (без учёта регистра)");
//   }
// };
// comparison("Борода", "борода");

// 10. Поиск без учета регистра.
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const insensitive_search = (str1, str2) => {
//   str1.toUpperCase().includes(str2.toUpperCase())
//     ? console.log(`строка -${str2}- найдена`)
//     : console.log(`строка -${str2}- не найдена`);
// };
// insensitive_search("Каждый охотник желает знать", "ЗНАТЬ");

// 11. ВерблюжийРегистр (CamelCase).
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// const str = "hEllo woRld";

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

// function initCap(str) {
//   let newStr = "";
//   for (let i = 0; i < stringToarray(str).length; i++) {
//     newStr +=
//       stringToarray(str)[i][0].toUpperCase() +
//       stringToarray(str)[i].slice(1).toLowerCase();
//   }
//   return newStr;
// }
// console.log(initCap(str));

// 12. Змеиный_регистр (snake_case).
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// const str = "HelloWorldHobbit";
// const initSnake = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     str[i] === str[i].toUpperCase() && i !== 0
//       ? (newStr += "_" + str[i])
//       : (newStr += str[i]);
//   }
//   return newStr.toLowerCase();
// };

// console.log(initSnake(str));

// 13. Повторить строку n раз.
// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// 1ый вариант:

// const repeatStr = (str, n) => {
//   return str.repeat(n);
// };

// console.log(repeatStr("SOS!", 5));

// 2ой вариант:

// const str = "SOS!";
// const repeatStr = (str, n) => {
//   let newStr = "";
//   while (n > 0) {
//     newStr += str;
//     n--;
//   }
//   return newStr;
// };
// console.log(repeatStr("SOS!", 5));

// 14. Получить имя файла.
// Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// const pathname = "/home/user/dir/file.txt";

// const path = (pathname) => {
//   return pathname.slice(pathname.lastIndexOf("/") + 1);
// };
// console.log(path(pathname));

// 15. Заканчивается ли строка символами другой строки.
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// 1ый вариант:
// const str = "Каждый охотник желает знать";
// const substring = "знать";

// String.prototype.endsWith = function (str, substring) {
//   if (str.slice(str.lastIndexOf(" ") + 1) === substring) {
//     return console.log(`Строка заканчивается подстрокой "${substring}"`);
//   } else {
//     return console.log(`Строка не заканчивается подстрокой "${substring}"`);
//   }
// };

// String.prototype.endsWith(str, substring);

// 2ой вариант:

// const str = "Каждый охотник желает знать";
// const substring = "знать";

// if (str.endsWith(substring)) {
//   return console.log(`Строка заканчивается подстрокой "${substring}"`);
// } else {
//   return console.log(`Строка не заканчивается подстрокой "${substring}"`);
// }

// 16. Подстрока до/после указанного символа.
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// const str = "Астрономия — Наука о небесных телах";

// const getSubstr = (str, char, pos) => {
//   if (pos === "before" && str.includes(char)) {
//     return str.slice(0, str.indexOf(char));
//   } else if (pos === "after" && str.includes(char)) {
//     return str.slice(str.indexOf(char) + 1);
//   } else {
//     return "Неверный параметр";
//   }
// };
// console.log(getSubstr(str, "—", "before"));

// 17. Вставить подстроку в указанную позицию строки.
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// const str = "привет друг";
// const insert = (str, substr, pos = 0) => {
//   let newStr = "";
//   if (substr) {
//     newStr = str.slice(0, pos) + substr + str.slice(pos);
//     return newStr;
//   } else {
//     return "Подстрока не введена";
//   }
// };
// console.log(insert(str, "мой "));
// console.log(insert(str, "мой ", 7));
// console.log(insert(str));

// 18. Ограничить длину строки.
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// const str = "Каждый охотник желает знать";
// const limitStr = (str, n, symb = "...") => {
//   let newStr = "";
//   if (n < str.length && symb) {
//     return (newStr = str.slice(0, n) + symb);
//   } else {
//     return "значение 'n' не задано или оно больше длины строки";
//   }
// };
// console.log(limitStr(str, 14, "!"));

// 19. Количество вхождений символа в строке.
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// const symb = "о";
// const str = "Астрономия это наука о небесных объектах";
// const count = (str, symb) => {
//   let result = 0;
//   let start = 0;
//   while (str.indexOf(symb, start) != -1) {
//     result += 1;
//     start = str.indexOf(symb, start) + 1;
//   }
//   return result;
// };
// console.log(
//   `Количество раз, когда встречается символ "${symb}" : ${count(str, symb)}`
// );

// 20. Удалить лишние пробелы из строки.
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// const str = "    Max is a good      boy     ";

// const strip = (str) => {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       newStr = newStr.trim();
//       newStr += str[i];
//     } else newStr += str[i];
//   }
//   return newStr;
// };
// console.log(strip(str));

// 21. Удалить лишние слова из строки.
// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// const str = "Сила тяжести приложена к центру масс тела";

// const cutString = (str, n) => {
//   let a = 0;
//   let start = 0;
//   str = str + " ";
//   let newStr = "";
//   while (a < n && newStr.length < str.length) {
//     newStr += str.slice(start, str.indexOf(" ", start)) + " ";
//     start = str.indexOf(" ", start) + 1;
//     a += 1;
//   }
//   return newStr.trim();
// };
// console.log(cutString(str, 6));

// 22. Найти слово в строке.
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// const str = "abc def ghi jkl mno pqr stu";

// const findWord = (word, str) => {
//   if (!word.includes(" ") && word) {
//     return str.includes(word) ? true : false;
//   } else {
//     return "Неправильный формат слова для поиска";
//   }
// };
// console.log(findWord("pqr", str));
