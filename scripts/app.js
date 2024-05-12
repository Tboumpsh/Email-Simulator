let email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  sendBtn = document.querySelector("#sendBtn"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.getElementById("email-form");

//* Events initialize
document.addEventListener("DOMContentLoaded", renderPage);

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
    checkInput()
  });
}

//* Check inputs value function

function checkInput(){
  if( email.value.length > 0){
    email.setAttribute("class","success")
    email.style.borderBottomColor = "green"

  }

  else{
    email.setAttribute("class","error")
    email.style.borderBottomColor = "red"

  }
}
