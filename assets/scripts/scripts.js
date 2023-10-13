const NewinputName = document.getElementById("input__name");
const NewinputSurname = document.getElementById("input__surname");
const NewinputPost = document.getElementById("input__post");
const NewinputExperience = document.getElementById("input__experience");
const NewinputYears = document.getElementById("input__years");
const NewinputCity = document.getElementById("input__city");

const createButton = document.getElementById("createButton");
const output = document.getElementById("output");

const nameElement = document.querySelector(".name-class");
const surnameElement = document.querySelector(".surname-class");
const postElement = document.querySelector(".post-class");
const experienceElement = document.querySelector(".experience-class");
const yearsElement = document.querySelector(".years-class");
const cityElement = document.querySelector(".city-class");
const idElement = document.querySelector(".id-class");

createButton.addEventListener("click", () => {
  // Получаем значения из полей ввода
  const name = NewinputName.value;
  const surname = NewinputSurname.value;
  const post = NewinputPost.value;
  const experience = NewinputExperience.value;
  const years = NewinputYears.value;
  const city = NewinputCity.value;

  // Проверяем, что все поля заполнены
  if (!name || !surname || !post || !experience || !years || !city) {
    // Если какое-либо поле не заполнено, не создаем экземпляр
    alert("Заполните все поля перед созданием.");
    return;
  }

  nameElement.textContent = `Имя: ${name}`;
  surnameElement.textContent = `Фамилия: ${surname}`;
  postElement.textContent = `Должность: ${post}`;
  experienceElement.textContent = `Опыт: ${experience}`;
  yearsElement.textContent = `Лет: ${years}`;
  cityElement.textContent = `Город: ${city}`;

  const randomId = generateRandomId(3);
  idElement.textContent = `ID: ${randomId}`;

  const ClassCreate = new ClassCreateNew(
    name,
    surname,
    post,
    experience,
    years,
    city,
    randomId
  );

  console.log(ClassCreate);

  // Очищаем поля ввода
  NewinputName.value = "";
  NewinputSurname.value = "";
  NewinputPost.value = "";
  NewinputExperience.value = "";
  NewinputYears.value = "";
  NewinputCity.value = "";
});

// // Получите ссылки на существующие элементы <p>
// const nameElement = document.querySelector(".name-class");
// const surnameElement = document.querySelector(".surname-class");
// const postElement = document.querySelector(".post-class");
// const experienceElement = document.querySelector(".experience-class");
// const yearsElement = document.querySelector(".years-class");
// const cityElement = document.querySelector(".city-class");
// const idElement = document.querySelector(".id-class");

// createButton.addEventListener("click", () => {
//   // Получаем значения из полей ввода
//   const name = NewinputName.value;
//   const surname = NewinputSurname.value;
//   const post = NewinputPost.value;
//   const experience = NewinputExperience.value;
//   const years = NewinputYears.value;
//   const city = NewinputCity.value;

//   // Проверяем, что все поля заполнены
//   if (!name || !surname || !post || !experience || !years || !city) {
//     // Если какое-либо поле не заполнено, не создаем экземпляр
//     alert("Заполните все поля перед созданием.");
//     return;
//   }

//   // Обновляем содержимое существующих элементов <p> с новыми значениями
//   nameElement.textContent = `Имя: ${name}`;
//   surnameElement.textContent = `Фамилия: ${surname}`;
//   postElement.textContent = `Должность: ${post}`;
//   experienceElement.textContent = `Опыт: ${experience}`;
//   yearsElement.textContent = `Лет: ${years}`;
//   cityElement.textContent = `Город: ${city}`;

//   // Генерируем новый случайный ID
//   const randomId = generateRandomId(3);
//   idElement.textContent = `ID: ${randomId}`;

//   // Очищаем поля ввода
//   NewinputName.value = "";
//   NewinputSurname.value = "";
//   NewinputPost.value = "";
//   NewinputExperience.value = "";
//   NewinputYears.value = "";
//   NewinputCity.value = "";
// });

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
