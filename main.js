function loadComponent(targetId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
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
});
