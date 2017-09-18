var js_open_modalContentMessage = document.querySelector(".js-open-modal-content-message");
var modalContentMessage = document.querySelector(".modal-content-message");
var js_close_modalContentMessage = modalContentMessage.querySelector(".modal-content-close");

var overflow = document.querySelector(".overflow");

js_open_modalContentMessage.addEventListener("click", function(event) {
  event.preventDefault();
  if (!modalContentMessage.classList.contains("visually-shown") && !overflow.classList.contains("visually-shown")) {
    modalContentMessage.classList.add("visually-shown");
    overflow.classList.add("visually-shown");
  }
});

js_close_modalContentMessage.addEventListener("click", function(event) {
  event.preventDefault();
  if (modalContentMessage.classList.contains("visually-shown")) {
    event.preventDefault();
    modalContentMessage.classList.remove("visually-shown");
    overflow.classList.remove("visually-shown");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalContentMessage.classList.contains("visually-shown") && overflow.classList.contains("visually-shown")) {
      modalContentMessage.classList.remove("visually-shown");
      overflow.classList.remove("visually-shown");
    }
  }
});