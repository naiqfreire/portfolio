const toggleThemeButton = document.getElementById('toggle-theme-btn');

function switchTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    body.classList.toggle('light');

    if (body.classList == 'dark') {
        toggleThemeButton.innerText = 'light_mode';
    }

    if (body.classList == 'light') {
        toggleThemeButton.innerText = 'moon_stars';
    }
}

toggleThemeButton.addEventListener('click', switchTheme)