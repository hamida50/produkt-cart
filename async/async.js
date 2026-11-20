const message =
  document.getElementById("message");
const usersContainer =
  document.getElementById(
    "users-container",
  );

const deleteAllButton =
  document.getElementById("delete-all");
const getAllButton =
  document.getElementById("get-all");

const savedUsers =
  localStorage.getItem("users");
let users =
  savedUsers !== null
    ? JSON.parse(savedUsers)
    : [];

function renderUsers() {
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    const card =
      document.createElement("div");

    card.innerHTML = `
      <h3>${user.name} ${user.surname}</h3>
      <p>Email: ${user.email}</p>
      <p>Возраст: ${user.age}</p>
    `;

    const deleteButton =
      document.createElement("button");

    deleteButton.textContent =
      "Удалить";

    deleteButton.addEventListener(
      "click",
      () => {
        users = users.filter(
          (item) => item.id !== user.id,
        );

        saveUsers();
        renderUsers();

        message.textContent =
          "Пользователь удалён";
      },
    );

    card.append(deleteButton);

    usersContainer.append(card);
  });
}
function saveUsers() {
  localStorage.setItem(
    "users",
    JSON.stringify(users),
  );
}
async function loadUsers() {
  try {
    message.textContent =
      "Данные загружаются";

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    const response = await fetch(
      "./users.json",
    );

    if (!response.ok) {
      throw new Error(
        "Не удалось загрузить данные",
      );
    }

    const data = await response.json();

    users = data.users;

    saveUsers();
    renderUsers();

    message.textContent = "";
  } catch (error) {
    message.textContent =
      "Ошибка при загрузке данных";
    console.error(error);
  }
}

deleteAllButton.addEventListener(
  "click",
  () => {
    users = [];

    saveUsers();
    renderUsers();

    message.textContent =
      "Все карточки удалены";
  },
);
getAllButton.addEventListener(
  "click",
  () => {
    if (users.length === 5) {
      message.textContent =
        "Все пользователи уже отображены";
      return;
    }

    loadUsers();
  },
);
if (savedUsers !== null) {
  message.textContent = "";
  renderUsers();
} else {
  loadUsers();
}
