function loadComponent(targetId, filePath, callback) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
            if (callback) callback();
        });
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header', 'components/header.html');
    loadComponent('hero', 'components/hero.html');
    loadComponent('about-us', 'components/about-us.html');
    loadComponent('section-lavique', 'components/section-lavique.html');
    loadComponent('section-kevyn', 'components/section-kevyn.html');
    loadComponent('section-esdras', 'components/section-esdras.html');
    loadComponent('text-members', 'components/text-members.html');
    loadComponent('progress', 'components/progress.html');
    loadComponent('footer', 'components/footer.html');

    loadComponent('newsletter', 'components/newsletter.html', initContactForm);
});

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

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        formSuccess.textContent = '';
        formSuccess.classList.remove('visible');

        if (validateFields()) {
            formSuccess.textContent = 'Success! Check your email.';
            formSuccess.classList.add('visible');
            
            fullName.value = '';
            email.value = '';
        }
    });
}



