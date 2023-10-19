// Получаем ссылки на оба input элемента по их id
const firstInput = document.getElementById("input__post");
const secondInput = document.getElementById("post__input__1");

// Добавляем обработчик события input к первому input
firstInput.addEventListener("input", function () {
  // Копируем значение из первого input во второй input
  secondInput.value = this.value;
});

secondInput.addEventListener("input", function () {
  // Копируем значение из первого input во второй input
  firstInput.value = this.value;
});
