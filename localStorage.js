const contactForm = document.querySelector('.form-main');
const fullName = document.querySelector('#client-name');
const emailAddr = document.querySelector('#mail');
const message = document.querySelector('#client-message');

fullName.value = '';
emailAddr.value = '';
message.value = '';

function dataSave() {
  const dataForm = {
    name: fullName.value,
    email: emailAddr.value,
    message: message.value,
  };
  localStorage.setItem('userInfo', JSON.stringify(dataForm));
}

contactForm.addEventListener('focusin', dataSave);