function navbar() {
    const nav = document.createElement("nav");
    function createTab(name) {
        const tab = document.createElement("div");
        const btn = document.createElement("button");
        btn.classList.add("tab__btn");
        btn.id = `${name.toLowerCase()}`;
        btn.textContent = name;
        tab.classList.add("tab");
        tab.classList.add(`tab--${name.toLowerCase()}`);
        tab.appendChild(btn);
        return tab;
    }
    nav.appendChild(createTab("Home"));
    nav.appendChild(createTab("Menu"));
    nav.appendChild(createTab("Contacts"));
    return nav;
}

export { navbar };
