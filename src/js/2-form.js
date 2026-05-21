const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');
const storageKey = "feedback-form-state";

const savedItem = localStorage.getItem(storageKey); 

form.addEventListener('input', (event) => {
    const {name, value} = event.target;

    if (!name) return;
    formData[name] = value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
});


if (savedItem) {
    const data = JSON.parse(savedItem);
    formData.email = data.email || "";
    formData.message = data.message || "";

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);

  formData.email = "";
  formData.message = "";

  form.reset();
});