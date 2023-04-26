const email = document.getElementById('email');
const submit = document.querySelector('.submit-btn');
const form = document.getElementById('form')
const errorText = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error')



submit.addEventListener('click', (e) => {
    e.preventDefault();
    const regEx = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
   
    if(email.value.match(regEx)){
        errorIcon.classList.add('hidden');
        errorText.classList.add('hidden');
    } else {
        errorIcon.classList.remove('hidden');
        errorText.classList.remove('hidden');
    }
});

