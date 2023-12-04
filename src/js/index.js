import { navbar } from "./navbar.js";
import { footer } from "./footer.js";
import { home } from "./hometab.js";
import { menu } from "./menutab.js";
import { contacts } from "./contactstab.js";
const navbarElt = navbar();
const footerElt = footer();
const homePage = home();
const menuPage = menu();
const contactsPage = contacts();

const content = document.querySelector("#content");
const main = document.createElement("main");

let currentTab = "home";
content.appendChild(navbarElt);
content.appendChild(main);
main.appendChild(homePage);
content.appendChild(footerElt);

const btns = document.querySelectorAll(".tab__btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        handleTab(event.target.id);
    });
});

function handleTab(tab) {
    if (tab !== currentTab) {
        currentTab = tab;
        main.innerHTML = "";
        if (tab === "home") {
            main.appendChild(homePage);
        } else if (tab === "menu") {
            main.appendChild(menuPage);
        } else if (tab === "contacts") {
            main.appendChild(contactsPage);
        }
    }
}
