import "./style.css";
import axios from "axios";

export {};

const form = document.getElementById("form") as HTMLFormElement;
const password = document.getElementById("password") as HTMLInputElement;
const passwordWeak = document.getElementById("p-weak") as HTMLElement;
const passwordMedium = document.getElementById("p-medium") as HTMLElement;
const passwordStrong = document.getElementById("p-strong") as HTMLElement;

password.addEventListener("input", () => {
  switch (true) {
    case password.value.length > 10:
      passwordStrong.style.backgroundColor = "green";
    case password.value.length > 8:
      passwordMedium.style.backgroundColor = "orange";
    case password.value.length > 6:
      passwordWeak.style.backgroundColor = "red";
  }
});
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formEntries = formData.entries();
  const data = Object.fromEntries(formData.entries()) as Record<
    string,
    string | string[]
  >;

  const user: Record<string, any> = await axios.post(
    "http://localhost:3000/users",
    data
  );

  console.log(user.data);
});
