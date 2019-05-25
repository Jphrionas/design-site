import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import  '../sass/main.scss';

document
    .querySelector("body")
    .prepend(new Header({}, new Navbar()).render());


document
    .querySelector(".header__hamburguer")
    .addEventListener('click', (event)=> {
        event.preventDefault();
        document.querySelector(".nav").classList.toggle("nav--show");
});

document.querySelectorAll(".nav__link")
.forEach(item => {
    item.addEventListener("click", () => {
        event.preventDefault();
        document.querySelector(".nav").classList.toggle("nav--show");
    })
})
