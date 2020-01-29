var link = document.querySelector(".profile__button");
var popup = document.querySelector(".modal-business");
var close = document.querySelector(".business-rates__button-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-business--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-business--show");
});
