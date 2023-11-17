const input = document.querySelector(".input-box input");
const toggleEye = document.querySelector(".toggle-eye");
const showMessage = document.querySelector(".message-box");
const messageColor = document.querySelector(".message-text");
const messageText = document.querySelector(".text");

// Toggle show & hide icon password
toggleEye.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    toggleEye.classList.replace("ri-eye-off-line", "ri-eye-line");
  } else {
    input.type = "password";
    toggleEye.classList.replace("ri-eye-line", "ri-eye-off-line");
  }
});

// Validate password with regex
const alphabet = /[a-zA-Z]/; //a to z and A to Z
const number = /[0-9]/; //numbers 0 to 9
const sChar = /[!,@.#,$,%,^,&,*,?,_,(,),-,+,=,~]/; //Special Characters;

input.addEventListener("keyup", () => {
  showMessage.classList.add("active");

  const iVal = input.value;
  if (iVal.match(alphabet) || iVal.match(number) || iVal.match(sChar)) {
    messageText.textContent = "Password is weak";
    messageColor.style.color = "#dc2626";
    toggleEye.style.color = "#dc2626";
    input.style.borderColor = "#dc2626";
  }

  if (iVal.match(alphabet) && iVal.match(number) && iVal.length >= 6) {
    messageText.textContent = "Password is medium";
    messageColor.style.color = "#eab308";
    toggleEye.style.color = "#eab308";
    input.style.borderColor = "#eab308";
  }

  if (iVal.match(alphabet) && iVal.match(number) && iVal.length >= 6) {
    messageText.textContent = "Password is medium";
    messageColor.style.color = "#eab308";
    toggleEye.style.color = "#eab308";
    input.style.borderColor = "#eab308";
  }

  if (
    iVal.match(alphabet) &&
    iVal.match(number) &&
    iVal.match(sChar) &&
    iVal.length >= 8
  ) {
    messageText.textContent = "Password is strong";
    messageColor.style.color = "#22c55e";
    toggleEye.style.color = "#22c55e";
    input.style.borderColor = "#22c55e";
  }

  if (iVal == "") {
    showMessage.classList.remove("active");
    messageColor.style.color = "";
    toggleEye.style.color = "";
    input.style.borderColor = "";
  }
});
