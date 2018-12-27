var feedbackLink = document.querySelector(".btn-feedback-form");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".close-popup");

var form = popup.querySelector("form");

var nameField = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("nameField");
} catch (err) {
  isStorageSupport = false;
}

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
  });

  form.addEventListener("submit", function (evt) {
    if (!nameField.value || !email.value || !message.value) {
      evt.preventDefault();
      console.log("Все поля обязательны для заполнения!");
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

  