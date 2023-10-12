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

///

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

///

const NewinputName = document.getElementById("input__name");
const NewinputSurname = document.getElementById("input__surname");
const NewinputPost = document.getElementById("input__post");
const NewinputExperience = document.getElementById("input__experience");
const NewinputYears = document.getElementById("input__years");
const NewinputCity = document.getElementById("input__city");

const createButton = document.getElementById("createButton");
const output = document.getElementById("output");
const randomId = generateRandomId(3);

createButton.addEventListener("click", () => {
  const ClassCreate = new ClassCreateNew(
    NewinputName.value,
    NewinputSurname.value,
    NewinputPost.value,
    NewinputExperience.value,
    NewinputYears.value,
    NewinputCity.value,
    randomId
  );
  console.log(ClassCreate);

  NewinputName.value = "";
  NewinputSurname.value = "";
  NewinputPost.value = "";
  NewinputExperience.value = "";
  NewinputYears.value = "";
  NewinputCity.value = "";
});

class ClassCreateNew {
  constructor(name, surname, post, experience, years, city, id) {
    this.NewinputName = name;
    this.NewinputSurname = surname;
    this.NewinputPost = post;
    this.NewinputExperience = experience;
    this.NewinputYears = years;
    this.NewinputCity = city;
    this.randomId = id;
  }

  name() {
    console.log(this.NewinputName);
  }

  surname() {
    console.log(this.NewinputSurname);
  }

  experience() {
    console.log(this.NewinputExperience);
  }

  years() {
    console.log(this.NewinputYears);
  }

  city() {
    console.log(this.NewinputCity);
  }

  id() {
    console.log(this.generateRandomId);
  }
}

function generateRandomId(length) {
  const characters = "0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}

///

const showPost = document.getElementById("input__post");
const closePost = document.getElementById("closePost");
const post = document.getElementById("post__working");

const inputName = document.getElementById("input__name");
const inputSurname = document.getElementById("input__surname");
const inputExperience = document.getElementById("input__experience");
const inputYears = document.getElementById("input__years");
const inputCity = document.getElementById("input__city");

inputName.addEventListener("click", handleInputClick);
inputSurname.addEventListener("click", handleInputClick);
inputExperience.addEventListener("click", handleInputClick);
inputYears.addEventListener("click", handleInputClick);
inputCity.addEventListener("click", handleInputClick);

// const inputs = document.querySelectorAll("[id^='input__']");

// inputs.forEach((input) => {
//   if (input.id !== "input__post") {
//   }
// });

showPost.addEventListener("click", () => {
  if (!post.classList.contains("hidden")) {
    return;
  }

  post.classList.remove("hidden");
  post.classList.add("fadeRieght");
  setTimeout(() => {
    post.classList.remove("fadeRieght");
  }, 500);
});

function handleInputClick() {
  post.classList.add("fadeLeft");
  setTimeout(() => {
    post.classList.add("hidden");
    post.classList.remove("fadeLeft");
  }, 500);
}

// inputs.forEach((input) => {
//   input.addEventListener("click", () => {
//     post.classList.add("fadeLeft");
//     setTimeout(() => {
//       post.classList.add("hidden");
//       post.classList.remove("fadeLeft");
//     }, 500);
//   });
// });

closePost.addEventListener("click", () => {
  post.classList.add("fadeLeft");
  setTimeout(() => {
    post.classList.add("hidden");
    post.classList.remove("fadeLeft");
  }, 500);
});

///
