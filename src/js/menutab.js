function menu() {
    const page = document.createElement("div");
    page.classList.add("page");
    const name = document.createElement("div");
    name.textContent = `Menu`;

    page.appendChild(name);
    return page;
}

export { menu };
