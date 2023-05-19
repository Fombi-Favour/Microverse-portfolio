const form = document.querySelector('.form-main');
const clientname=document.querySelector('#client-name')
const email = document.querySelector('#mail');
const clienttext=document.querySelector('#client-message')
const error = document.querySelector('.error');
const submi=document.querySelector('#sumission')


submi.addEventListener('click', (e) => {
  e.preventDefault();
  error.innerHTML = '';
  if (clientname.value === '' || clientname.value == null) {
    error.innerHTML = 'enter your name';
  } else if (email.value === '' || email.value == null) {
    error.innerHTML = ' enter your email';
  } else if (email.value !== email.value.toLocaleLowerCase()) {
    error.innerHTML = 'Please use lower case ONLY';
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




// checking if the email field is empty
// window.addEventListener('load', () => {
//   const isValid = email.value.length === 0 || regex.test(email.value);
//   email.className = isValid ? 'valid' : 'invalid';
// });

// email.addEventListener('input', () => {
//   const isValid = email.value.length === 0 || regex.test(email.value);
//   if (isValid) {
//     email.className = 'valid';
//     email.textContent = '';
//     error.className = 'error';
//   } else {
//     email.className = 'invalid';
//   }
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const isValid = email.value.length === 0 || regex.test(email.value);
//   if (!isValid) {
//     email.className = 'invalid';
//     error.textContent = 'Invalid email address!';
//     error.className = 'error active';
//   } else {
//     email.className = 'valid';
//     error.textContent = '';
//     error.className = 'error';
//   }
// });