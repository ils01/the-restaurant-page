import { createHTMLElement } from "./createElt";
import "/src/scss/contacts.scss";

function contacts() {
    const page = document.createElement("div");
    page.classList.add("page", "page-contacts");
    const name = createHTMLElement("div", ["title"]);
    name.textContent = `Contacts`;
    page.appendChild(name);

    const lines = [
        " All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy ",
        " Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes ",
        " and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work ",
    ];

    for (let i = 0; i < lines.length; i++) {
        const cont = createHTMLElement("div", ["line-container"]);
        const text = createHTMLElement(
            "div",
            ["line-text", `line-${i + 1}`],
            lines[i]
        );
        cont.appendChild(text);
        page.appendChild(cont);
    }

    return page;
}

export { contacts };
