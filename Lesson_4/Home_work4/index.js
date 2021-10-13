// Работа с if-else

// 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let a = 0;

if (a === 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let b = -3;

if (b > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let c = 1;

if (c < 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let d = -3;

if (d >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let e = -3;

if (e <= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

let f = -3;

if (f !== 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

let g = 3;

if (g === "test") {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

let h = -3;

if (h === "1") {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// Работа с логическими переменными

//  1. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

let test1 = true;
if (test1 == true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

test1 == true ? console.log("Верно") : console.log("Неверно");

//  2. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

let test2 = false;
if (test2 != true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

test2 != true ? console.log("Верно") : console.log("Неверно");