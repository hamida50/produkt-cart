const subscribeForm = document.querySelector("#subscribe-form");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!subscribeForm.checkValidity()) {
    subscribeForm.reportValidity();
    return;
  }

  const email = document.querySelector("#email").value;

  console.log({ email });
});

const openRegistrationButton = document.querySelector(
  "#open-registration-modal",
);

const registrationOverlay = document.querySelector("#registration-overlay");

const registrationModal = document.querySelector("#registration-modal");

const closeRegistrationButton =
  registrationModal.querySelector(".modal__close");

openRegistrationButton.addEventListener("click", () => {
  registrationOverlay.classList.add("modal-showed");
  registrationModal.classList.add("modal-showed");
});

closeRegistrationButton.addEventListener("click", () => {
  registrationOverlay.classList.remove("modal-showed");
  registrationModal.classList.remove("modal-showed");
});

let user = null;

const registrationForm = document.querySelector("#registration-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    alert("Регистрация отклонена: форма заполнена неправильно!");
    registrationForm.reportValidity();
    return;
  }

  const formData = new FormData(registrationForm);

  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (password !== confirmPassword) {
    alert("Регистрация отклонена: пароли не совпадают!");
    return;
  }

  user = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    birthDate: formData.get("birthDate"),
    login: formData.get("login"),
    password: password,
    createdOn: new Date(),
  };
  const userWithoutPassword = { ...user };
  delete userWithoutPassword.password;
  console.log(userWithoutPassword);

  alert("Регистрация прошла успешно. Поздравляем!");
  registrationOverlay.classList.remove("modal-showed");
  registrationModal.classList.remove("modal-showed");
});
