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
    inputEl.value = formData.email.trim();
    textareaEl.value = formData.message.trim();
  }
});

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const trimmedEmail = formData.email.trim();
  const trimmedMessage = formData.message.trim();

  if (trimmedEmail && trimmedMessage) {
    console.log({ email: trimmedEmail, message: trimmedMessage });
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    inputEl.value = "";
    textareaEl.value = "";
  } else {
    alert("Fill please all fields");
  }
});
