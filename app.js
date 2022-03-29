const passContainer = document.getElementById('pass-container');
const pass = document.getElementById('pass');
const passConfirm = document.getElementById('pass-verify');
const message = document.getElementById('pass-message');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    if (pass.value != passConfirm.value) {
        e.preventDefault();
        message.textContent = 'Passwords must match';
        pass.classList.add('error');
        passConfirm.classList.add('error');
    }
})
