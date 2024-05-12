let email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  sendBtn = document.querySelector("#sendBtn"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.getElementById("email-form");

/**
 * Represents a form with email-related fields.
 * @typedef {Object} EmailForm
 * @property {HTMLElement} email - The input field for email address.
 * @property {HTMLElement} subject - The input field for email subject.
 * @property {HTMLElement} message - The textarea field for email message.
 * @property {HTMLElement} sendBtn - The button to send the email.
 * @property {HTMLElement} resetBtn - The button to reset the form.
 * @property {HTMLElement} form - The entire form element.
 */

//* Events initialize
document.addEventListener("DOMContentLoaded", renderPage);
email.addEventListener("blur", checkEmail);
subject.addEventListener("blur", checkSubject);
message.addEventListener("blur", checkMessage);

/**
 * Adds an event listener for the DOMContentLoaded event and calls the renderPage function when the event is triggered.
 *
 * @function renderPage
 * @returns {void}
 * @memberof document
 * @global
 */

function renderPage() {
  parentMain();
}

/**
 * Function to handle the main logic for the parent page.
 *
 * @function parentMain
 * @returns {void}
 */

function parentMain() {
  //* Submit event form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkEmail();
    checkSubject();
    checkMessage();
  });
}

/**
 * Checks the input value of the email field and updates its styling based on the input length.
 * If the email field has a value, sets the class to "success" and border color to green.
 * If the email field is empty, sets the class to "error" and border color to red.
 * @function checkInput
 */

function checkInput(inputs) {
  if (inputs.value.length > 0) {
    inputs.setAttribute("class", "success");
    inputs.style.borderBottomColor = "green";
  } else {
    inputs.setAttribute("class", "error");
    inputs.style.borderBottomColor = "red";
  }
}

function checkEmail() {
  checkInput(email);
}
function checkSubject() {
  checkInput(subject);
}
function checkMessage() {
  checkInput(message);
}
