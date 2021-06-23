const form = document.querySelector('form');
const pattern = /^[a-zA-Z0-9]{6,}$/;
const feedback = document.querySelector('.feedback');


form.addEventListener('submit', e => {
    e.preventDefault();
    const result = pattern.test(form.username.value);
    if(result) {
        feedback.textContent = 'This is a valid username';
        form.username.value = '';
    }
    else {
        feedback.textContent = 'Only alpha-numeric characters allowed (min. 6 characters)';
        form.username.value = '';
    }
});


form.username.addEventListener('keyup', e => {
    // console.log(e.target.value);
    if (pattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success')
    }
    else {
        form.username.setAttribute('class', 'error')
    }
});

