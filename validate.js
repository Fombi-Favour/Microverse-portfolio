const form = document.querySelector('.contact');
const email = document.getElementById('mail');
const error = email.nextElementSibling;

const regex = /[a-z]/;

// checking if the email field is empty
window.addEventListener('load', () => {
  const isValid = email.value.length === 0 || regex.test(email.value);
  email.className = isValid ? 'valid' : 'invalid';
});

email.addEventListener('input', () => {
  const isValid = email.value.length === 0 || regex.test(email.value);
  if (isValid) {
    email.className = 'valid';
    email.textContent = '';
    error.className = 'error';
  } else {
    email.className = 'invalid';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isValid = email.value.length === 0 || regex.test(email.value);
  if (!isValid) {
    email.className = 'invalid';
    error.textContent = 'Invalid email address!';
    error.className = 'error active';
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  }
});