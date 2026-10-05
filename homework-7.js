outputConsoleLogButton.addEventListener("click", () => {
  outputConsoleLog("homework-7.js");
});
// Задание 1
function showWeather(city, temperature) {
  console.log(
    `сейчас в  ${city} температура ${temperature} градусов по Цельсию`,
  );
}
showWeather("Каир", 24);
showWeather("Астана", 4);

// Задание 2
const speedOfLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedOfLight) {
    console.log("Субсветовая скорость");
  } else console.log("Скорость света");
}
checkSpeed(300000000);

// Задание 3
const product = "Крем";
const productPrice = 500;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference} $, пополните баланс.`);
  }
}

buyProduct(300); // бюджет не хватает на продукт.Пополните баланс.s
buyProduct(600); // бюджет хватает на продукт. Крем приобретен. Спасибо за покупку!

// Задание 4
function sayHello() {
  console.log("Привет!");
}
// Задание 5

const student = {
  name: "Hamida",
  age: 50,
  isStudent: true,

  one() {
    console.log(this.name);
  },

  two() {
    console.log(this.age);
  },

  three() {
    console.log(this.isStudent);
  },
};
