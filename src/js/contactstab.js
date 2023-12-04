function contacts() {
    const page = document.createElement("div");
    page.classList.add("page");
    const name = document.createElement("div");
    name.textContent = `Contacts`;

    page.appendChild(name);
    return page;
}

export { contacts };
