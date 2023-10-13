const showPopupButton = document.getElementById("showPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

showPopupButton.addEventListener("click", () => {
  if (!popup.classList.contains("hidden")) {
    // Если popup уже открыт, выходим из функции, ничего не делая
    return;
  }

  popup.classList.remove("hidden");
  popup.classList.add("fadeTo");
  setTimeout(() => {
    popup.classList.remove("fadeTo");
  }, 500);
});

closePopupButton.addEventListener("click", () => {
  popup.classList.add("fadeOut"); // Добавляем класс анимации
  setTimeout(() => {
    popup.classList.add("hidden"); // После завершения анимации скрываем popup
    popup.classList.remove("fadeOut"); // Удаляем класс анимации
  }, 500); // Здесь 500 миллисекунд (0.5 секунды) соответствует длительности анимации
});
