var feedbackLink = document.querySelector(".btn-feedback-form");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".close-popup");

var form = popup.querySelector("form");

var name = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

  feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    //name.focus(); // не работает фокус
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !message.value) {
      evt.preventDefault();
      console.log("Все поля обязательны для заполнения!");
    } else {

    }
  });

  