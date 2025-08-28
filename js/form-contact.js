document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const formSuccess = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formSuccess.textContent = '';
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(el => el.style.display = 'none');

        let valid = true;

        if (!fullName.value.trim() || fullName.value.trim().split(' ').length < 2) {
            const error = fullName.nextElementSibling;
            error.textContent = 'Please enter your full name';
            error.style.display = 'block';
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
            const error = email.nextElementSibling;
            error.textContent = 'Please enter a valid email';
            error.style.display = 'block';
            valid = false;
        }

        if (valid) {
            formSuccess.textContent = 'Form submitted successfully!';
            form.reset();
        }
    });
});
