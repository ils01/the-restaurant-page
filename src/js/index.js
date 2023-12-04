import { header, footer, home, menu, contacts } from "./_index.js";
import "../scss/style.scss";

const headerElt = header();
const footerElt = footer();
const homePage = home();
const menuPage = menu();
const contactsPage = contacts();

const content = document.querySelector("#content");
const main = document.createElement("main");

main.appendChild(homePage);
content.appendChild(headerElt);
content.appendChild(main);
content.appendChild(footerElt);

const btns = document.querySelectorAll(".tab__btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        handleTab(event.target.id);
    });
});

function handleTab(btnId = "btn--home") {
    main.innerHTML = "";
    if (btnId === "btn--home") {
        main.appendChild(homePage);
    } else if (btnId === "btn--menu") {
        main.appendChild(menuPage);
    } else if (btnId === "btn--contacts") {
        main.appendChild(contactsPage);
    }
}
