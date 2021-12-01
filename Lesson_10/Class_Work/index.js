// window - global - globalThis
// window.navigator.userAgent;
// console.log(window.history.go);

// console.log(window.innerHeight);

// let myDivs = document.querySelectorAll(".my_div");
// console.log(myDivs);

// let myId = document.getElementById("my_id");
// console.log(myId);

// myId.style.background = "red";

// let myLovelyDiv = document.getElementsByClassName("my_div");
// const div = myLovelyDiv[0];
// div.outerHTML = " poka";

// console.log(div);

// let newDiv = document.createElement("div");
// newDiv.className = "test_div";
// newDiv.innerHTML = "Это мой div";
document.body.style.margin = 0;

let header = document.createElement("header");
header.className = "page-header";
header.innerHTML = "Это header";
header.style.background = "yellow";
header.style.height = "70px";
document.body.prepend(header);

// let pageTitle = document.createElement("span");
// pageTitle.className = "page-title";
// pageTitle.innerText = "Заголовок";
// header.prepend(pageTitle);

let section = document.createElement("section");
section.className = "page-section";
header.after(section);

let list = document.createElement("ol");
list.className = "list";
section.prepend(list);

for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.className = "list-element";
  li.innerHTML = `Элемент списка ${i}`;
  list.append(li);
}

let inputWrapper = document.createElement("div");
inputWrapper.className = "input-wrapper";
inputWrapper.style.display = "flex";
inputWrapper.style.flexDirection = "column";
inputWrapper.style.gap = "10px";
inputWrapper.style.width = "150px";
list.after(inputWrapper);

let input = document.createElement("input");
input.type = "text";
inputWrapper.after(input);

let button = document.createElement("button");
button.className = "btn";
button.innerHTML = "Добавить ToDo";
button.onclick = function () {
  let li = document.createElement("li");
  li.className = "list-element";
  li.innerHTML = `Элемент списка ${a.length + 1}`;
  list.append(li);
  //   console.log(this.innerHTML);
};
input.after(button);

button.addEventListener("click", function () {
  const inputValue = input.value;
  const newTodo = document.createElement("li");
  newTodo.innerHTML = `${inputValue}`;
  if (inputValue) {
    list.appendChild(newToDo);
  }
  input.value = "";
});

let a = list.getElementsByTagName("li");
console.log(a);

// function handleToDoAdd() {
//   const inputValue = input.value;
//   const newTodo = document.createElement("li");
//   newTodo.innerHTML = `${inputValue}`;
//   if (inputValue) {
//     list.appendChild(newToDo);
//   }
//   input.value = "";
// }
// contentSection.className = "container";
// contentSection.style.width = "500px";
// contentSection.style.height = "500px";
// contentSection.style.borderBlockColor = "black";
// header.after(contentSection);
