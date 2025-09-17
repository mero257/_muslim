const nav_links = document.querySelectorAll('.nav-items a');
const darkModeToggle = document.querySelector('.fa-moon');

nav_links.forEach(li => {
    li.addEventListener('click', (e) => {
        e.preventDefault();
        nav_links.forEach(l => l.classList.remove('active'))
        li.classList.add('active')
    })
});
