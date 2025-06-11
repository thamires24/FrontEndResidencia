

let formElement = document.querySelector(".form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData.entries());

  fetch("https://681bdd866ae7c794cf70058e.mockapi.io/clientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(alert("Enviado com sucesso"))
    .catch((error) => console.error("Error"));
});