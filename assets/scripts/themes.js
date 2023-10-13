const themeToggle = document.getElementById("theme-toggle");
const favicon = document.getElementById("favicon");

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
    favicon.href = "./assets/img/dark-icon.png"; // Замените на путь к иконке для темной темы
  } else {
    document.body.classList.remove("dark-mode");
    favicon.href = "./assets/img/light-icon.png"; // Замените на путь к иконке для светлой темы
  }
});
