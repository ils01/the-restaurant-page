import { createHTMLElement } from "./createElt";
import Icon from "../static/img/icons/anchor32.png";

function navbar() {
    const nav = createHTMLElement("nav", ["navbar"]);
    const navContainer = createHTMLElement("div", [
        "navbar-container",
        "container",
    ]);
    const checkbox = createHTMLElement("input", [], "", {
        type: "checkbox",
    });
    const hamburger = createHTMLElement("div", ["hamburger-lines"]);
    for (let i = 1; i < 4; i += 1) {
        const line = createHTMLElement("span", ["line", `line${i}`]);
        hamburger.appendChild(line);
    }
    const menuItemsList = createHTMLElement("ul", ["menu-items"]);
    const menuItems = ["Home", "Menu", "Contacts"];
    for (let menuItem of menuItems) {
        const li = createHTMLElement("li", ["tab"]);
        const btn = createHTMLElement("button", ["tab__btn"], `${menuItem}`, {
            id: `btn--${menuItem.toLowerCase()}`,
        });
        li.appendChild(btn);
        menuItemsList.appendChild(li);
    }
    navContainer.append(checkbox, hamburger, menuItemsList);

    const logo = createHTMLElement("div", ["logo"]);
    const myIcon = new Image();
    myIcon.src = Icon;
    logo.appendChild(myIcon);

    const rightSection = createHTMLElement("div", ["header__right"]);
    const status = createHTMLElement("div", ["status"]);
    const statusTime = createHTMLElement("div", ["status__time"]);
    const statusStatus = createHTMLElement("div", ["status__status"]);

    function refreshTime() {
        let dateString = new Date().toLocaleString("ru-Ru", {
            timeZone: "Asia/Tokyo",
        });

        let time = dateString.split(", ")[1].split(":");

        statusTime.textContent = `${time[0]}:${time[1]}`;

        if (time[0] >= 10 && time[0] <= 22) {
            statusStatus.textContent = "We're open";
        } else if (time[0] == 23) {
            statusStatus.textContent = "We're closing soon";
        } else {
            statusStatus.textContent = "We're closed";
        }
    }
    refreshTime();
    setInterval(refreshTime, 1000);

    status.append(statusTime, statusStatus);
    rightSection.append(status);

    nav.append(navContainer, logo, rightSection);

    return nav;
}

export { navbar };
