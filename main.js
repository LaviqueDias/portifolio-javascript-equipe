function loadComponent(targetId, filePath, callback) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
            if (callback) callback();
        });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const formSuccess = document.getElementById('formSuccess');

    function validateFields() {
        let valid = true;

        if (!fullName.value.trim() || fullName.value.trim().split(' ').length < 2) {
            fullName.nextElementSibling.textContent = 'Please enter your full name';
            fullName.nextElementSibling.style.display = 'block';
            valid = false;
        } else {
            fullName.nextElementSibling.style.display = 'none';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
            email.nextElementSibling.textContent = 'Please enter a valid email';
            email.nextElementSibling.style.display = 'block';
            valid = false;
        } else {
            email.nextElementSibling.style.display = 'none';
        }

        return valid;
    }

    fullName.addEventListener('input', validateFields);
    email.addEventListener('input', validateFields);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formSuccess.textContent = '';

        if (validateFields()) {
            formSuccess.textContent = 'Form submitted successfully!';
            form.reset();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header', 'components/header.html');
    loadComponent('hero', 'components/hero.html');
    loadComponent('about-us', 'components/about-us.html');
    loadComponent('section-lavique', 'components/section-lavique.html');
    loadComponent('section-kevyn', 'components/section-kevyn.html');
    loadComponent('text-members', 'components/text-members.html');
    loadComponent('progress', 'components/progress.html');
    loadComponent('footer', 'components/footer.html');

    loadComponent('form-contact', 'components/form-contact.html', initContactForm);
});
