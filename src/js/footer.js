import { createHTMLElement } from "./createElt";

function footer() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const container = createHTMLElement("div", ["footer__container"]);
    const lists = [
        [
            "Opening times",
            "Ma t/m Do: 12.00 - 23.00u",
            "Vr: 12.00 - 02.00u",
            "Za: 12.00 - 02.00u",
            "Zo: 13.00 - 23.00u",
        ],
        [
            "Address",
            "Stadshaven Brouwerj",
            "Galileirstat 24",
            "3029 AM Rotterdam",
            "T: 010-1234567",
        ],
        ["Other", "Privacy", "Terms", "Jobs"],
    ];

    for (let i = 0; i < lists.length; i++) {
        const list = createHTMLElement("ul", ["footer__list"]);

        for (let j = 0; j < lists[i].length; j++) {
            if (j == 0) {
                list.appendChild(
                    createHTMLElement(
                        "li",
                        ["list-title", "list-item"],
                        lists[i][j]
                    )
                );
            } else {
                list.appendChild(
                    createHTMLElement("li", ["list-item"], lists[i][j])
                );
            }
        }

        container.appendChild(list);
    }

    footer.append(container);
    return footer;
}

export { footer };
