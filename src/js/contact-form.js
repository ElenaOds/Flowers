(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const nameRegex = /\b[^0-9\W]+\b/g;

    const contactForm = document.querySelector('.js-contact-form');
    const nameInput = document.querySelector('.js-contact-name-input');
    const emailInput = document.querySelector('.js-contact-email-input');
    const button = document.querySelector('.js-contact-button');
    const nameLabel = document.querySelector('.js-contact-name-label');
    const emailLabel = document.querySelector('.js-contact-email-label');

    contactForm.addEventListener('submit', onFormSubmit);
    nameInput.addEventListener('input', onNameInputChange);
    emailInput.addEventListener('input', onEmailInputChange);
    nameInput.addEventListener('input', onNameInputBlur);
    emailInput.addEventListener('input', onEmailInputBlur);


    function onFormSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log(formData);
        
        event.currentTarget.reset();
        button.disabled = true;
        nameInput.classList.remove('valid');
        nameInput.classList.remove('invalid');
        nameLabel.classList.remove('valid');
        nameLabel.classList.remove('invalid');
        emailInput.classList.remove('valid');
        emailInput.classList.remove('invalid');
        emailLabel.classList.remove('valid');
        emailLabel.classList.remove('invalid');
    }

    function onButtonEnabled () {
        if ((emailInput.value.match(emailRegex)) &&  (nameInput.value.match(nameRegex))){
            button.disabled = false;
            
        } else {
            button.disabled = true;
        }
      }

    function onNameInputChange() {
        nameInput.classList.remove('valid');
        nameInput.classList.remove('invalid');
        nameLabel.classList.remove('valid');
        nameLabel.classList.remove('invalid');
    
        if (nameInput.value.match(nameRegex)) {
            nameInput.classList.add('valid');
            nameLabel.classList.add('valid');
        } else {
            nameInput.classList.add('invalid');
            nameLabel.classList.add('invalid');
        }

        onButtonEnabled();
    }

    function onEmailInputChange() {
        emailInput.classList.remove('valid');
        emailInput.classList.remove('invalid');
        emailLabel.classList.remove('valid');
        emailLabel.classList.remove('invalid');
    
        if (emailInput.value.match(emailRegex)) {
            emailInput.classList.add('valid');
            emailLabel.classList.add('valid');
        } else {
            emailInput.classList.add('invalid');
            emailLabel.classList.add('invalid');
        }

        onButtonEnabled();
    }
    
    function onEmailInputBlur() {
        if(emailInput.value === '') {
            emailInput.classList.remove('valid')
            emailInput.classList.remove('invalid');
            emailLabel.classList.remove('valid');
            emailLabel.classList.remove('invalid');
        }
    }

    function onNameInputBlur() {
        if(nameInput.value === '') {
            nameInput.classList.remove('valid')
            nameInput.classList.remove('invalid');
            nameLabel.classList.remove('valid');
            nameLabel.classList.remove('invalid');
        }
    }
})();
