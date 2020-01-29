var openCountry = document.querySelector(".step-two__open-country--open");
var popupCountry = document.querySelector(".modal-country");
var closeCountry = document.querySelector(".modal-country__button");

openCountry.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCountry.classList.add("modal-country-show");
});

closeCountry.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCountry.classList.remove("modal-country-show");
});
