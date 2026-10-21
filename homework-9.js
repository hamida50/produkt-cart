console.log("JavaScript работает!");

import { comments } from "./comments.js";

console.log(comments.filter((comment) => comment.email.includes(".com")));

//задание 2. Создаём массив чисел от 1 до 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((number) => number >= 5);

console.log(filteredNumbers);

//задание 3. Проверяем, есть ли элемент в массиве

const books = ["Бухари", "Муслим", "Фаваид", "Сира"];

console.log(books.includes("Бухари"));
console.log(books.includes("Коран"));

//Задание 4. Переворачиваем массив
function reverseArray(array) {
  return array.reverse();
}

console.log(reverseArray(numbers));

console.log(reverseArray(books));

//Задание 5. Создаём файл comments.js

//Задание 6. Делаем константу экспортируемой

//Задание 7. Находим комментарии, где почта содержит .com

const comComments = comments.filter((comment) =>
  comment.email.includes(".com"),
);

console.log(comComments);

console.log(comments.toString());

console.log(comments.map((comment) => comment.email).join(","));

console.log(
  comments.filter((comment) => comment.email.includes(".com")).length,
);
console.log(
  comments.reduce((emails, comment) => {
    emails.push(comment.email);
    return emails;
  }, []),
);
console.log(
  comments.map((comment) => ({
    ...comment,
    postId: comment.id <= 5 ? 2 : 1,
  })),
);
console.log(
  comments.map((comment) => ({
    ...comment,
    isInvalid: comment.body.length > 180,
  })),
);
console.log(
  comments.map((comment) => ({
    id: comment.id,
    name: comment.name,
  })),
);
console.log(
  "ПРОВЕРКА isInvalid:",
  comments.map((comment) => comment.body.length > 180),
);
