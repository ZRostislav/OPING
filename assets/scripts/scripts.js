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

const post2Element = document.querySelector(".post2-class");
const knowledgeElement = document.querySelector(".knowledge-class");
const salaryElement = document.querySelector(".salary-class");
const gradeElement = document.querySelector(".grade-class");

const TrensElement = document.querySelector(".trens");
const FullRateElement = document.querySelector(".full_rate");

const NewinputPost2 = document.getElementById("post__input__1");
const NewInputKnowledge = document.getElementById("post__input__2");
const NewInputSalary = document.getElementById("post__input__3");
const NewInputGrade = document.getElementById("post__input__4");

const classCreateInstances = [];

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

  post() {
    console.log(this.NewinputPost);
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

class ClassCreateNewPost extends ClassCreateNew {
  constructor(
    name,
    surname,
    post,
    experience,
    years,
    city,
    id,
    knowledge,
    salary,
    grade
  ) {
    super(name, surname, post, experience, years, city, id);

    this.NewInputKnowledge = knowledge;
    this.NewInputSalary = salary;
    this.NewInputGrade = grade;
  }

  knowledge() {
    console.log(this.NewInputKnowledge);
  }

  salary() {
    console.log(this.NewInputSalary);
  }

  grade() {
    console.log(this.NewInputGrade);
  }
}

const postSelect = document.getElementById("postSelect");
var selectedIndex = postSelect.selectedIndex;

postSelect.addEventListener("change", () => {
  if (postSelect.value !== "option1") {
    NewinputPost.disabled = true;
    closePosting();
    NewinputPost2.value = "";
    NewinputPost.value = "";
  } else {
    NewinputPost.disabled = false;
  }
});

const postSelectData = [
  { post__s: "", knowledge__s: "", salary__s: "", grade__s: "" },
];

createButton.addEventListener("click", () => {
  // Получаем значения из полей ввода
  const name = NewinputName.value;
  const surname = NewinputSurname.value;
  const post = NewinputPost.value;
  const experience = NewinputExperience.value;
  const years = NewinputYears.value;
  const city = NewinputCity.value;

  const knowledge = NewInputKnowledge.value;
  const salary = NewInputSalary.value;
  const grade = NewInputGrade.value;

  if (!name || !surname || !experience || !years || !city) {
    // Если какое-либо поле не заполнено, не создаем экземпляр
    alert("Заполните все поля перед созданием.");
    return;
  }

  if (knowledge.trim() !== "") {
    if (salary.trim() === "" || grade.trim() === "") {
      alert("Заполните все поля перед созданием.");
      return;
    } else {
      const newOption = document.createElement("option");
      newOption.textContent = post;
      postSelect.appendChild(newOption);
      postSelect.value = "option1";
      closePosting();

      const newPostData = {
        post__s: post,
        knowledge__s: knowledge,
        salary__s: salary,
        grade__s: grade,
      };

      postSelectData.push(newPostData);

      // console.log(postSelectData);
    }
  }

  // if (salary.trim() !== "") {
  //   if (knowledge.trim() === "" || grade.trim() === "") {
  //     alert("Заполните все поля перед созданием.");
  //     return;
  //   }
  // }

  // if (grade.trim() !== "") {
  //   if (salary.trim() === "" || knowledge.trim() === "") {
  //     alert("Заполните все поля перед созданием.");
  //     return;
  //   }
  // }

  // if (knowledge && salary && grade && postSelect.value !== "option1") {
  //   const newOption = document.createElement("option");
  //   newOption.textContent = post;
  //   postSelect.appendChild(newOption);
  //   postSelect.value = "option1";
  //   NewinputPost.disabled = true;
  // } else {
  //   alert("Заполните все поля перед созданием!");
  //   return;
  // }

  const ristors = salary * grade;
  // console.log(ristors);

  const result = years - experience;
  // console.log(result);

  nameElement.textContent = `Имя: ${name}`;
  surnameElement.textContent = `Фамилия: ${surname}`;
  postElement.textContent = `Должность: ${post}`;
  experienceElement.textContent = `Опыт: ${experience}`;
  yearsElement.textContent = `Лет: ${years}`;
  cityElement.textContent = `Город: ${city}`;

  const randomId = generateRandomId(3);
  idElement.textContent = `ID: ${randomId}`;

  post2Element.textContent = `Должность: ${post}`;
  knowledgeElement.textContent = `Знания: ${knowledge}`;
  salaryElement.textContent = `Зарплата: ${salary} $`;
  gradeElement.textContent = `Оценка: ${grade}`;

  TrensElement.textContent = `Полная Ставка: ${ristors} $`;
  FullRateElement.textContent = `Учился: ${result} года`;

  // Создаем экземпляр класса ClassCreateNew
  const ClassCreate = new ClassCreateNew(
    name,
    surname,
    post,
    experience,
    years,
    city,
    randomId
  );

  // Создаем экземпляр класса ClassCreateNewPost
  const ClassCreatePost = new ClassCreateNewPost(
    name,
    surname,
    post,
    experience,
    years,
    city,
    randomId,
    knowledge,
    salary,
    grade
  );

  ClassCreatePost.ristors = ristors;
  ClassCreatePost.result = result;

  if (postSelect.value !== "option1") {
    const selectedIndex = postSelect.selectedIndex;
    if (selectedIndex >= 0 && selectedIndex < postSelectData.length) {
      ClassCreatePost.NewinputPost = postSelectData[selectedIndex].post__s;
      ClassCreatePost.NewInputKnowledge =
        postSelectData[selectedIndex].knowledge__s;
      ClassCreatePost.NewInputSalary = postSelectData[selectedIndex].salary__s;
      ClassCreatePost.NewInputGrade = postSelectData[selectedIndex].grade__s;

      console.log(selectedIndex);
      console.log(postSelectData[selectedIndex].knowledge__s);

      postElement.textContent = `Должность: ${ClassCreatePost.NewinputPost}`;
      post2Element.textContent = `Должность: ${ClassCreatePost.NewinputPost}`;
      knowledgeElement.textContent = `Знания: ${ClassCreatePost.NewInputKnowledge}`;
      salaryElement.textContent = `Зарплата: ${ClassCreatePost.NewInputSalary} $`;
      gradeElement.textContent = `Оценка: ${ClassCreatePost.NewInputGrade}`;
    }
  }

  // classCreateInstances.push(ClassCreate);
  classCreateInstances.push(ClassCreatePost);
  // console.log(classCreateInstances);
  console.log(ClassCreatePost);
  // console.log(classCreateInstances);

  // Очищаем поля ввода
  NewinputName.value = "";
  NewinputSurname.value = "";
  NewinputPost.value = "";
  NewinputExperience.value = "";
  NewinputYears.value = "";
  NewinputCity.value = "";

  NewinputPost2.value = "";
  NewInputKnowledge.value = "";
  NewInputSalary.value = "";
  NewInputGrade.value = "";
});

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentInstanceIndex = 0; // Индекс текущего экземпляра в массиве

prevButton.addEventListener("click", () => {
  if (currentInstanceIndex > 0) {
    currentInstanceIndex--;
    updateDisplay();
  }
});

nextButton.addEventListener("click", () => {
  if (currentInstanceIndex < classCreateInstances.length - 1) {
    currentInstanceIndex++;
    updateDisplay();
  }
});

const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", () => {
  if (classCreateInstances.length === 0) {
    alert("Нечего удалять");
  } else if (
    currentInstanceIndex >= 0 &&
    currentInstanceIndex < classCreateInstances.length
  ) {
    try {
      classCreateInstances.splice(currentInstanceIndex, 1); // Удаляем элемент по текущему индексу
      if (currentInstanceIndex >= classCreateInstances.length) {
        currentInstanceIndex = classCreateInstances.length - 1; // Обновляем индекс, если он выходит за границы массива
      }
      updateDisplay();
    } catch (error) {
      nameElement.textContent = `Имя:`; // Установить текст, если произошла ошибка
      surnameElement.textContent = `Фамилия:`;
      postElement.textContent = `Должность:`;
      experienceElement.textContent = `Опыт:`;
      yearsElement.textContent = `Лет:`;
      cityElement.textContent = `Город:`;
      idElement.textContent = `ID:`;

      post2Element.textContent = `Должность:`;
      knowledgeElement.textContent = `Знания:`;
      salaryElement.textContent = `Зарплата:`;
      gradeElement.textContent = `Оценка:`;

      TrensElement.textContent = `Полная Ставка:`;
      FullRateElement.textContent = `Учился:`;
    }
  } else {
    alert("Некорректный индекс.");
  }
});

function updateDisplay() {
  const currentInstance = classCreateInstances[currentInstanceIndex];

  nameElement.textContent = `Имя: ${currentInstance.NewinputName}`;
  surnameElement.textContent = `Фамилия: ${currentInstance.NewinputSurname}`;
  postElement.textContent = `Должность: ${currentInstance.NewinputPost}`;
  experienceElement.textContent = `Опыт: ${currentInstance.NewinputExperience}`;
  yearsElement.textContent = `Лет: ${currentInstance.NewinputYears}`;
  cityElement.textContent = `Город: ${currentInstance.NewinputCity}`;
  idElement.textContent = `ID: ${currentInstance.randomId}`;

  post2Element.textContent = `Должность: ${currentInstance.NewinputPost}`;
  knowledgeElement.textContent = `Знания: ${currentInstance.NewInputKnowledge}`;
  salaryElement.textContent = `Зарплата: ${currentInstance.NewInputSalary} $`;
  gradeElement.textContent = `Оценка: ${currentInstance.NewInputGrade}`;

  TrensElement.textContent = `Полная Ставка: ${currentInstance.ristors} $`;
  FullRateElement.textContent = `Учился: ${currentInstance.result} года`;
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

  closeDocuments2();

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

function closePosting() {
  post.classList.add("fadeLeft");
  setTimeout(() => {
    post.classList.add("hidden");
    post.classList.remove("fadeLeft");
  }, 500);
}

///

const showDocuments = document.getElementById("showDocuments");
const closeDocuments = document.getElementById("closeExprience");
const experience = document.getElementById("post__exprience");

showDocuments.addEventListener("click", () => {
  if (!experience.classList.contains("hidden")) {
    // Если popup уже открыт, выходим из функции, ничего не делая
    return;
  }

  closePosting();

  experience.classList.remove("hidden");
  experience.classList.add("fadeToDocument");
  setTimeout(() => {
    experience.classList.remove("fadeToDocument");
  }, 500);
});

closeDocuments.addEventListener("click", () => {
  experience.classList.add("fadeOutDocument"); // Добавляем класс анимации
  setTimeout(() => {
    experience.classList.add("hidden"); // После завершения анимации скрываем popup
    experience.classList.remove("fadeOutDocument"); // Удаляем класс анимации
  }, 500); // Здесь 500 миллисекунд (0.5 секунды) соответствует длительности анимации
});

function closeDocuments2() {
  experience.classList.add("fadeOutDocument"); // Добавляем класс анимации
  setTimeout(() => {
    experience.classList.add("hidden"); // После завершения анимации скрываем popup
    experience.classList.remove("fadeOutDocument"); // Удаляем класс анимации
  }, 500); // Здесь 500 миллисекунд (0.5 секунды) соответствует длительности анимации
}
