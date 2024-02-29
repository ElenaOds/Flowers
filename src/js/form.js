(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const subscribeForm = document.querySelector('.js-subscribe-form');
    const input = document.querySelector('.js-subscribe-input');
    const button = document.querySelector('.js-subscribe-button');
    const label = document.querySelector('.js-subscribe-label');

    subscribeForm.addEventListener('submit', onFormSubmit);
    input.addEventListener('input', onInputChange);
    input.addEventListener('input', onInputBlur);


    function onInputBlur(event) {
        if(event.currentTarget.value === '') {
        input.classList.remove('valid')
        
        input.classList.remove('invalid');
        }
    }

    function onFormSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData);
        
        event.currentTarget.reset();
        button.disabled = true;
        input.classList.remove('valid');
        input.classList.remove('invalid');
        label.classList.remove('valid');
        label.classList.remove('invalid');
    }

    function onInputChange(event) {
        input.classList.remove('valid');
        input.classList.remove('invalid');
        label.classList.remove('valid');
        label.classList.remove('invalid');

        if (event.currentTarget.value.match(emailRegex)) {

            button.disabled = false;
            input.classList.add('valid');
            label.classList.add('valid');
        } else {
          
            button.disabled = true;
            input.classList.add('invalid');
            label.classList.add('invalid')
        }
    }
})();
