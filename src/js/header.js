import { navbar } from "./navbar.js";

function header() {
    const headerElt = document.createElement("header");
    headerElt.appendChild(navbar());

    return headerElt;
}

export { header };
