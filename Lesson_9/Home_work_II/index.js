// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return `Зарплата ${this.rate * this.days} руб.`;
//   }
//   getFullName() {
//     return `Полное имя: ${this.surname} ${this.name}`;
//   }
// }

// const worker = new Worker("Иван", "Иванов", 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName()); //выведет 'Иванов Иван'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

///////////////////////////////////////////////////////////////////
// 2.Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return `Зарплата ${this.rate * this.days} руб.`;
//   }
//   getFullName() {
//     return `Полное имя: ${this.surname} ${this.name}`;
//   }
// }

// class Boss extends Worker {
//   constructor(name, surname, rate, days, workers) {
//     super(name, surname, rate, days);
//     this.workers = workers;
//   }
//   getSalary() {
//     return `Зарплата ${this.rate * this.days * this.workers} руб.`;
//   }
// }

// const boss = new Boss("Иван", "Иванов", 10, 31, 10);
// console.log(boss.name); //выведет 'Иван'
// console.log(boss.surname); //выведет 'Иванов'
// console.log(boss.getFullName()); //выведет 'Иванов Иван'
// console.log(boss.rate); //выведет 10
// console.log(boss.days); //выведет 31
// console.log(boss.workers); //выведет 10
// console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10

///////////////////////////////////////////////////////////////////
// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }

//   getName() {
//     return this._name;
//   }
//   getSurname() {
//     return this._surname;
//   }
//   getRate() {
//     return this._rate;
//   }
//   getDays() {
//     return this._days;
//   }

//   getSalary() {
//     return `Зарплата ${this._rate * this._days} руб.`;
//   }
//   getFullName() {
//     return `Полное имя: ${this._surname} ${this._name}`;
//   }
// }

// const worker = new Worker("Иван", "Иванов", 10, 31);

// console.log(worker.getName()); //выведет 'Иван'
// console.log(worker.getSurname()); //выведет 'Иванов'
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
///////////////////////////////////////////////////////////////////

// 4. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// class Worker {
//   constructor(name, surname, rate, days) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }

//   getName() {
//     return this._name;
//   }
//   getSurname() {
//     return this._surname;
//   }
//   getRate() {
//     return this._rate;
//   }
//   getDays() {
//     return this._days;
//   }

//   getSalary() {
//     return `Зарплата ${this._rate * this._days} руб.`;
//   }
//   getFullName() {
//     return `Полное имя: ${this._surname} ${this._name}`;
//   }

//   setRate(rate) {
//     return (this._rate = rate);
//   }
//   setDays(days) {
//     return (this._days = days);
//   }
// }

// const worker = new Worker("Иван", "Иванов", 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10
///////////////////////////////////////////////////////////////////

// 5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//   constructor(newStr) {
//     this.newStr = newStr;
//   }

//   reverse() {
//     return this.newStr.split("").reverse().join("");
//   }

//   ucFirst() {
//     return this.newStr[0].toUpperCase() + this.newStr.slice(1);
//   }
//   ucWords() {
//     return this.newStr.replace(/( |^)[а-яёa-z]/g, function (u) {
//       return u.toUpperCase();
//     });
//   }
// }

// const str = new MyString("abcde");
// const strSecond = new MyString("abcde abcde abcde");

// console.log(str.reverse()); //выведет 'edcba'
// console.log(str.ucFirst()); //выведет 'Abcde'
// console.log(strSecond.ucWords()); //выведет 'Abcde Abcde Abcde'
///////////////////////////////////////////////////////////////////

// 6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

// class Validator {
//   constructor(email, domain, data, phone) {
//     this.email = email;
//     this.domain = domain;
//     this.data = data;
//     this.phone = phone;
//   }

//   isEmail() {
//     if (/\S+@\S+\.\S+/.test(this.email)) {
//       return "Корректный Email";
//     } else {
//       return "Некорректный Email";
//     }
//   }

//   isDomain() {
//     if (
//       /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/.test(
//         this.domain
//       )
//     ) {
//       return "Корректный Домен";
//     } else {
//       return "Некорректный Домен";
//     }
//   }

//   isDate() {
//     if (
//       /^(0?[1-9]|[12][0-9]|3[01])[\.\-](0?[1-9]|1[012])[\.\-]\d{4}$/.test(
//         this.data
//       )
//     ) {
//       return "Корректная дата";
//     } else {
//       return "Некорректная дата";
//     }
//   }

//   isPhone() {
//     if (
//       /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(
//         this.phone
//       )
//     ) {
//       return "Корректный номер телефона";
//     } else {
//       return "Некорректный номер телефона";
//     }
//   }
// }

// const validator = new Validator(
//   "phphtml@mail.ru",
//   "phphtml.net",
//   "12.05.2020",
//   "+375 (29) 817-68-92"
// );

// console.log(validator.isEmail());
// console.log(validator.isDomain());
// console.log(validator.isDate());
// console.log(validator.isPhone());

///////////////////////////////////////////////////////////////////
// 7. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   getFullName() {
//     return this.name + " " + this.surname;
//   }
// }
// class Student extends User {
//   constructor(name, surname, yearGo) {
//     super(name, surname);
//     this.yearGo = yearGo;
//   }

//   getCourse() {
//     const yearNow = new Date().getFullYear();
//     if (yearNow - this.yearGo <= 5 && yearNow - this.yearGo > 0) {
//       return `Текущий курс студента - ${yearNow - this.yearGo}`;
//     } else {
//       return "Неверная дата поступления";
//     }
//   }
// }

// const student = new Student("Иван", "Мухов", 2019);
// console.log(student.getCourse());
// console.log(student.getFullName());
