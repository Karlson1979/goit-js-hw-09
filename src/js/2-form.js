const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('[name="email"]');
const textareaEl = document.querySelector('[name="message"]');
const btnEl = document.querySelector('button');
let formData = {
  email: '',
  message: '',
};

formEl.addEventListener('input', (e) => {
  if (e.target.name === 'email' || e.target.name === 'message') {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    inputEl.value = formData.email;
    textareaEl.value = formData.message;
  }
});

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    inputEl.value = "";
    textareaEl.value = "";
  } else {
    alert("Fill please all fields");
  }
});
