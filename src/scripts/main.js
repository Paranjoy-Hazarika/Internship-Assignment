import '../style/style.css'
import '../style/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const sidebarOpenBtn = document.querySelector(".hamburger-menu");
const sidebarCloseBtn = document.querySelector(".sidebar-cls");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay")

const body = document.body

sidebarOpenBtn.addEventListener('click', (e) => {
    e.preventDefault();

    sidebar.style.transform = "translateX(0%)"
    sidebar.ariaExpanded = "true";
    body.style.overflowY = 'hidden';

    overlay.classList.add('active');
})

sidebarCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    sidebar.style.transform = "translateX(100%)";
    sidebar.ariaExpanded = "false";
    body.style.overflowY = 'scroll';

    overlay.classList.remove('active');
})