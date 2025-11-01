import '../style/style.css'
import '../style/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const sidebarOpenBtn = document.querySelector(".hamburger-menu");
const sidebarCloseBtn = document.querySelector(".sidebar-cls");
const sidebar = document.querySelector(".sidebar");

sidebarOpenBtn.addEventListener('click', (e) => {
    e.preventDefault();

    sidebar.style.transform = "translateX(0%)"
    document.body.style.overflowY = 'hidden';
})

sidebarCloseBtn.addEventListener('click', (e) => {
    e. preventDefault();

    sidebar.style.transform = "translateX(100%)";
    document.body.style.overflowY = 'scroll';
})