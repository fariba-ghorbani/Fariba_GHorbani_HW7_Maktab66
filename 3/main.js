const hamburgerToggle = document.getElementsByClassName("hamburger")[0];
const logoLabel = document.getElementsByClassName("logo")[0];
const allLinks = document.getElementsByClassName("navbar-items")[0];
const navigationBar = document.getElementsByClassName("navbar")[0];

hamburgerToggle.addEventListener('click', () => {
    allLinks.classList.toggle('active');
    logoLabel.classList.toggle('active');
    navigationBar.classList.toggle('active');
})