const form = document.querySelector('.form-main');
const clientname = document.querySelector('#client-name');
const email = document.querySelector('#mail');
const clienttext = document.querySelector('#client-message');
const error = document.querySelector('.error');
const submi = document.querySelector('#sumission');

submi.addEventListener('click', (e) => {
  e.preventDefault();
  error.innerHTML = '';
  if (clientname.value === '' || clientname.value == null) {
    error.innerHTML = 'enter your name';
    error.className = 'error active';
  } else if (email.value === '' || email.value == null) {
    error.innerHTML = ' enter your email';
  } else if (email.value !== email.value.toLocaleLowerCase()) {
    error.innerHTML = 'Invalid email! Please use lower case ONLY';
    email.className = 'invalid';
    error.className = 'error';
    error.className = 'error active';
  } else if (clienttext.value === '' || clienttext.value == null) {
    clienttext.className = 'invalid';
    error.innerHTML = 'Please enter your message';
    error.className = 'error';
  } else {
    form.submit();
  }
});
