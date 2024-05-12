let email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  sendBtn = document.querySelector("#sendBtn"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.getElementById("email-form");

document.addEventListener("DOMContentLoaded", renderPage);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function renderPage() {}
