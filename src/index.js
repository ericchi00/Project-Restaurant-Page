import './style.css';
import { dom, homePage, menuPage, contactPage } from './dom.js';


const tabSwitch = (() => {

    homePage.createHomePage();
    const homeButton = document.querySelector('.home');
    homeButton.addEventListener('click', () => {
        while (dom.content.firstChild) {
            dom.content.removeChild(dom.content.lastChild);
        }
        homePage.createHomePage();
    });

    const menuButton = document.querySelector('.menu');
    menuButton.addEventListener('click', () => {
        while (dom.content.firstChild) {
            dom.content.removeChild(dom.content.lastChild);
        }
        dom.content.classList.add('menu');
        menuPage.createMenuPage();
    });

    const contactButton = document.querySelector('.contact');
    contactButton.addEventListener('click', () => {
        while(dom.content.firstChild) {
            dom.content.removeChild(dom.content.lastChild);
        }
        contactPage.createContactPage();
    });
})()