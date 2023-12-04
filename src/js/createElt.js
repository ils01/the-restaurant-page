function createHTMLElement(type, classList = [], text = "", attrs = {}) {
    const elt = document.createElement(type);
    classList.forEach(function (className) {
        elt.classList.add(className);
    });
    elt.textContent = text;

    for (const attr in attrs) {
        elt[attr] = attrs[attr];
    }
    return elt;
}

export { createHTMLElement };
