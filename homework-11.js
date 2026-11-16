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
