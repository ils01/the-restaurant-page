function createTab(name) {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.classList.add(`tab--${name.toLowerCase()}`);

    const btn = document.createElement("button");
    btn.classList.add("tab__btn");
    btn.id = `btn--${name.toLowerCase()}`;
    btn.textContent = name;

    tab.appendChild(btn);
    return tab;
}

function navbar() {
    const nav = document.createElement("nav");

    nav.appendChild(createTab("Home"));
    nav.appendChild(createTab("Menu"));
    nav.appendChild(createTab("Contacts"));
    return nav;
}

export { navbar };
