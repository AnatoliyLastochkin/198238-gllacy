var feedbackLink=document.querySelector(".btn-feedback-form");var popup=document.querySelector(".modal-feedback");var close=popup.querySelector(".close-popup");var form=popup.querySelector("form");var nameField=popup.querySelector("[name=fullname]");var email=popup.querySelector("[name=email]");var message=popup.querySelector("[name=message]");var isStorageSupport=true;var storage="";try{storage=localStorage.getItem("nameField")}catch(err){isStorageSupport=false}feedbackLink.addEventListener("click",function(a){a.preventDefault();popup.classList.add("modal-show");if(storage){nameField.value=storage;email.focus()}else{nameField.focus()}});close.addEventListener("click",function(a){a.preventDefault();popup.classList.remove("modal-show")});form.addEventListener("submit",function(a){if(!nameField.value||!email.value||!message.value){a.preventDefault();console.log("Все поля обязательны для заполнения!")}else{if(isStorageSupport){localStorage.setItem("nameField",nameField.value)}}});window.addEventListener("keydown",function(a){if(a.keyCode===27){a.preventDefault();if(popup.classList.contains("modal-show")){popup.classList.remove("modal-show")}}});