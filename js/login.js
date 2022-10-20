const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login");

const greetingContainer = document.getElementById("greeting-container");
const greetingWord = document.getElementById("greeting-word");
const greetingUser = document.getElementById("greeting-user");

const logoutBtn = document.getElementById("logout");

const todoContainer = document.getElementById("todo-container");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
  loginForm.style.display = "none";
  greetingContainer.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  todoContainer.classList.remove(HIDDEN_CLASSNAME);
  greetingUser.innerText = ` ${username}!`;
  const date = new Date();
  let time = date.getHours();
  if (time < 12 && time > 5) {
    greetingWord.innerText = `Good morning, `;
  } else if (time >= 12 && time < 18) {
    greetingWord.innerText = `Good afternoon, `;
  } else {
    greetingWord.innerText = `Good evening, `;
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function onLogout() {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
}

logoutBtn.addEventListener("click", onLogout);
