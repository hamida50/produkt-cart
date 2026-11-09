import "./homework-12.js";

import Modal from "./Modal.js";
import Form from "./Form.js";

import "./homework-11.js";

//все карточки
alert("MAIN.JS РАБОТАЕТ"); //выводим сообщение в алерте, чтобы убедиться, что файл main.js подключен
console.log("main.js работает"); //выводим сообщение в консоль, чтобы убедиться, что файл main.js подключен
const allCards = document.querySelectorAll(".product-card"); //получаем все элементы с класом card
const firstCard = document.querySelector(".product-card"); //получаем только первый элемент
const greenColorHash = "#32CD32"; //создаем переменную с цветом зеленый
const redColorHash = "#FF0000"; //создаем переменную с цветом красный

console.log("все карточки", allCards);
console.log("количество карточек", allCards.length);

const changeAllCardsColorButton = document.getElementById(
  "change-all-cards-color-button",
);
changeAllCardsColorButton.addEventListener("click", () => {
  document.querySelectorAll(".product-card").forEach((card) => {
    card.style.backgroundColor = greenColorHash;
  }); //при клике на кнопку меняем цвет всех карточек на зеленый

  console.log("кликнули на кнопку"); //при клике на кнопку выводим сообщение в консоль
});

//первая карточка
const changeFirstCardColorButton = document.getElementById(
  "change-first-card-color-button",
);
changeFirstCardColorButton.addEventListener("click", () => {
  //при клике на кнопку меняем цвет первой карточки на красный
  const firstCardNow = document.querySelector(".product-card");
  firstCardNow.style.backgroundColor = redColorHash;

  console.log("кликнули на кнопку"); //при клике на кнопку выводим сообщение в консоль
});

//кнопка перехода на гугл
const openGoogleButton = document.getElementById("open-google-button");
openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы уверены, что хотите перейти на Google?");
  if (answer === true) {
    window.open("https://www.google.com");
  }
}
// вывод текста через консоль
const outputConsoleLogButton = document.getElementById(
  "output-console-log-button",
);
outputConsoleLogButton.addEventListener("click", () => {
  outputConsoleLog("дз №6");
});

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Создаём модальное окно
const registrationModal = new Modal("registration-modal");

// Находим кнопку открытия
const openRegistrationButton = document.querySelector(
  "#open-registration-modal",
);

// При нажатии открываем модальное окно
openRegistrationButton.addEventListener("click", () => {
  registrationModal.open();
});
// Создаём объект формы регистрации
const registrationForm = new Form("registration-form");

// Обрабатываем отправку формы
registrationForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    alert("Регистрация отклонена: форма заполнена неправильно!");
    registrationForm.form.reportValidity();
    return;
  }

  const formValues = registrationForm.getValues();

  if (formValues.password !== formValues.confirmPassword) {
    alert("Регистрация отклонена: пароли не совпадают!");
    return;
  }

  const user = {
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    birthDate: formValues.birthDate,
    login: formValues.login,
    createdOn: new Date(),
  };

  console.log(user);

  alert("Регистрация прошла успешно. Поздравляем!");

  registrationForm.reset();
  registrationModal.close();
});
