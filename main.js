const nav_links = document.querySelectorAll('.nav-items a');
const darkModeToggle = document.querySelector('.fa-moon');

nav_links.forEach(li => {
    li.addEventListener('click', (e) => {
        e.preventDefault();
        nav_links.forEach(l => l.classList.remove('active'))
        li.classList.add('active')
        document.querySelector(".sec1").style.display = "none";
        document.querySelector(".time-pray").style.display = "none";
        const navlinktodisplay = document.querySelector(".nav-items a.active");
        if (navlinktodisplay.textContent.trim() === "الرئيسية") {
            document.querySelector(".sec1").style.display = "block";
        }
        else if (navlinktodisplay.textContent.trim() === "مواقيت الصلاة") {
            document.querySelector(".time-pray").style.display = "flex";
        }
    })
});
