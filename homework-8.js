// Задание 1. Объект с данными пользователя

const user = {
  name: "Hamida",
  patronymic: "Muratovna",
  email: "hamida@example.com",
  job: "Hajjam",
  position: "Specialist",
  age: 50,
  country: "Egypt",
  city: "Cairo",
  relationshipStatus: "single",
};
console.log(user);

// Задание 2. Объект автомобиля

const car = {
  brand: "Toyota",
  color: "black",
  year: 2020,
  model: "Camry",
  transmission: "automatic",
  owner: user,
};
console.log(car);

// Задание 3. Добавляем максимальную скорость

function addMaxSpeed(car) {
  if (!car.maxSpeed) {
    car.maxSpeed = 200;
  }
}

addMaxSpeed(car);
console.log(car);
function addMaxSpeed(car) {
  if (!("maxSpeed" in car)) {
    car.maxSpeed = 200;
  }
}

// Задание 4. Получаем значение свойства объекта

function getProperty(object, property) {
  console.log(object[property]);
}

getProperty(car, "brand");
getProperty(car, "maxSpeed");

// Задание 5. Массив продуктов

const products = ["Крем", "Масло", "Шампунь", "Мыло", "Бальзам"];
console.log(products);

// Задание 6. Массив книг

const books = [
  {
    title: "Сира пророка",
    author: "Сафи ар-Рахман аль-Мубаракфури",
    year: 1976,
    coverColor: "тёмно-бордовый",
    genre: "биография пророка Мухаммада (мир ему и благословение Аллаха)",
  },
  {
    title: "Сахих аль-Бухари",
    author: "Имам аль-Бухари",
    year: 846,
    coverColor: "коричневый",
    genre: "сборник хадисов",
  },
  {
    title: "Сахих Муслим",
    author: "Имам Муслим",
    year: 875,
    coverColor: "чёрный",
    genre: "сборник хадисов",
  },
  {
    title: "Фаваид",
    author: "Ибн аль-Кайим",
    year: 1350,
    coverColor: "чёрный",
    genre: "полезные наставления",
  },
  {
    title: "Острый меч, разящий колдунов вредящих",
    author: "Вахид Абд-ас-Салям Бали",
    year: 2010,
    coverColor: "чёрный",
    genre: "исламская литература",
  },
];
console.log(books);

// Задание 7. Добавляем ещё одну книгу

books.push({
  title: "Рияд ас-Салихин",
  author: "Имам ан-Навави",
  year: 1272,
  coverColor: "зелёный",
  genre: "сборник хадисов",
});
console.log(books);

// Задание 8. Второй массив книг и объединение массивов

const additionalBooks = [
  {
    title: "Сунан ат-Тирмизи",
    author: "Имам ат-Тирмизи",
    year: 892,
    coverColor: "коричневый",
    genre: "сборник хадисов",
  },
  {
    title: "Сунан Абу Дауд",
    author: "Имам Абу Дауд",
    year: 889,
    coverColor: "тёмно-зелёный",
    genre: "сборник хадисов",
  },
];
const allBooks = books.concat(additionalBooks);
console.log(allBooks);

// Задание 9. Добавляем свойство isRare

function addIsRare(books) {
  return books.map(function (book) {
    return {
      ...book,
      isRare: book.year > 2000,
    };
  });
}
const booksWithRare = addIsRare(allBooks);
console.log(booksWithRare);

// Задание 10. Выводим результат

console.log("Базовые фундаментальные книги:", booksWithRare);
