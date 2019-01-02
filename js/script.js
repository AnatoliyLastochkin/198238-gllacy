var loginForm = document.querySelector(".login-form");

var loginField = loginForm.querySelector("[name=login]");
var passwordField = loginForm.querySelector("[ name=password]");
var loginPopup = document.querySelector(".login-form-wrapper");

var feedbackLink = document.querySelector(".btn-feedback-form");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".close-popup");

var feedbackForm = popup.querySelector("form");
var btnFeedback = popup.querySelector(".btn-send");

var nameField = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";
var storageLogin = "";

try {
  storage = localStorage.getItem("nameField");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageLogin = localStorage.getItem("loginField");
} catch (err) {
  isStorageSupport = false;
}

  loginForm.addEventListener("submit", function (evt) {
    if (!loginField.value || !passwordField.value) {
      evt.preventDefault();
      loginPopup.classList.toggle("modal-error");
    } 
  });

  feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      nameField.value = storage;
      email.focus();
    } else {
      nameField.focus(); 
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    if (popup.classList.contains("modal-error")) {
      popup.classList.remove("modal-error");
    }
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (!nameField.value || !email.value || !message.value) {
      evt.preventDefault();
      console.log("Все поля обязательны для заполнения!");
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("nameField", nameField.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }  
  })

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (!nameField.value || !emailField.value || !messageArea.value) {
      evt.preventDefault();
      console.log("Все поля обязательны для заполнения!");
      popup.classList.add("modal-error");
    } 
    
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }  
  })

  