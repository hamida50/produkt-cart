// Домашнее задание №13
// Объектно-ориентированная система «Кафе с напитками»
class Drink {
  #temperature;

  constructor(
    name,
    size,
    price,
    temperature,
  ) {
    if (new.target === Drink) {
      throw new Error(
        "Нельзя создать обычный напиток напрямую!",
      );
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Название: ${this.name}, размер: ${this.size}, цена: ${this.price},
   температура: ${this.#temperature}°C`;
  }
  getTemperature() {
    return this.#temperature;
  }
  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #prepare() {
    console.log(
      `${this.name}: напиток готовится...`,
    );
  }

  serve() {
    this.#prepare();
    this.setTemperature(
      this.#temperature - 5,
    );
    console.log(`${this.name} подан!`);
  }
}
class Coffee extends Drink {
  constructor(
    name,
    size,
    price,
    temperature,
    beans,
    milk,
  ) {
    super(
      name,
      size,
      price,
      temperature,
    );

    this.beans = beans;
    this.milk = milk;
  }

  getInfo() {
    return `${super.getInfo()}, зёрна: ${this.beans}, молоко: ${this.milk}`;
  }
}
class Tea extends Drink {
  constructor(
    name,
    size,
    price,
    temperature,
    teaType,
    sugar,
  ) {
    super(
      name,
      size,
      price,
      temperature,
    );

    this.teaType = teaType;
    this.sugar = sugar;
  }

  getInfo() {
    return `${super.getInfo()}, сорт чая: ${this.teaType}, сахар: ${this.sugar}`;
  }
}
class Lemonade extends Drink {
  constructor(
    name,
    size,
    price,
    temperature,
    flavor,
    sparkling,
  ) {
    super(
      name,
      size,
      price,
      temperature,
    );

    this.flavor = flavor;
    this.sparkling = sparkling;
  }

  getInfo() {
    return `${super.getInfo()}, вкус: ${this.flavor}, газированный: ${this.sparkling}`;
  }
}
class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    console.log(`Кафе: ${this.name}`);
    console.log(
      `Местоположение: ${this.location}`,
    );
  }

  orderDrink(drink) {
    console.log(
      `Новый заказ в кафе ${this.name}`,
    );

    console.log(drink.getInfo());

    drink.serve();

    console.log(
      `Температура напитка: ${drink.getTemperature()}°C`,
    );
  }
}
// Создаём кафе
const myCafe = new Cafe(
  "Queen Cafe",
  "Cairo",
);

// Создаём напитки

const coffee = new Coffee(
  "Капучино",
  "Большой",
  80,
  65,
  "Арабика",
  "Молоко коровье",
);

const tea = new Tea(
  "Зелёный чай",
  "Средний",
  40,
  80,
  "Зелёный",
  "Без сахара",
);

const lemonade = new Lemonade(
  "Лимонад",
  "Большой",
  50,
  5,
  "Лимон",
  true,
);

// Информация о кафе
myCafe.getInfo();

// Информация о напитках
console.log(coffee.getInfo());
console.log(tea.getInfo());
console.log(lemonade.getInfo());

// Заказываем напитки
myCafe.orderDrink(coffee);
myCafe.orderDrink(tea);
myCafe.orderDrink(lemonade);

//Конспект лекции: объектно-ориентированное программирование (ООП)
//1. Что такое ООП?
//Объектно-ориентированное программирование — это способ написания программ, при котором мы создаём объекты, объединяющие данные и действия.
//Например, в нашем задании:
//- Кофе — объект.
//- Чай — объект.
//- Лимонад — объект.
//- Кафе — объект.

//2. Класс
//Класс — это шаблон, по которому создаются объекты.
//Пример:
//constructor(name, price) {
// this.name = name;
//this.price = price;
//)
//)

//3. Объект
//Объект — это конкретный экземпляр класса.
//const coffee = new Drink("Капучино", 80);

//4. Четыре основных принципа ООП
//- Инкапсуляция — объединение данных и методов внутри класса, а также ограничение прямого доступа к некоторым данным. Например, #temperature.
//- Наследование — создание новых классов на основе существующих. Например, Coffee, Tea и Lemonade наследуются от Drink.
//- Полиморфизм — возможность использовать общий метод у разных объектов, при этом каждый объект может реализовать его по-своему. Например, getInfo() у кофе, чая и лимонада.
//- Абстракция — выделение главных характеристик и действий объекта, скрывая ненужные детали. Например, Drink описывает общие свойства всех напитков.

//Сначала разберём один важный момент: почему #temperature — это инкапсуляция, а #prepare() — приватный метод.
//5. Приватные свойства и методы
//- #temperature — приватное свойство. Оно хранит температуру напитка и защищено от прямого доступа извне класса.
//- getTemperature() — метод, который позволяет получить температуру.
//- setTemperature() — метод, который позволяет изменить температуру.
//- #prepare() — приватный метод. Он выполняет внутреннее приготовление напитка и вызывается только внутри класса `Drink`

//      6. Ключевое слово extends
//extends используется для наследования одного класса от другого.
//Например:
//class Coffee extends Drink
//Это означает, что класс Coffee наследует свойства и методы класса Drink.

//7. Ключевое слово super
//super позволяет обратиться к родительскому классу.
//В нашем задании:
//super(name, size, price, temperature)
//Вызывает конструктор родительского класса `Drink` и передаёт ему необходимые данные.

//8. Переопределение методов
//Переопределение — это когда дочерний класс создаёт свой вариант метода, который уже есть в родительском классе.
//Например, getInfo() есть в классе Drink, но классы Coffee, Tea и Lemonade дополняют его своей информацией.

//9. Что такое абстрактный класс?
//Абстрактный класс — это общий шаблон, предназначенный для создания других классов.
//В JavaScript нет специального слова abstract, поэтому в нашем задании мы используем проверку:
//if (new.target === Drink)
//Она запрещает создавать объект непосредственно из класса Drink.

//10. Итог
//ООП помогает создавать программы, в которых код удобно разделён на классы и объекты. Наследование позволяет повторно использовать код, инкапсуляция защищает данные, полиморфизм позволяет по-разному реализовывать общие методы, а абстракция помогает выделять главное.
