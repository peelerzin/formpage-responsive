import "./style.css";

import axios from "axios";

export {};

const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formEntries = formData.entries();
  const data = Object.fromEntries(formData.entries());

  const user = await axios.post("http://0.0.0.0:3000/users", data);

  console.log(user.data);

  alert(`Successfully registered! Your user id is: ${user.data.id}`);
});
