function home() {
    const page = document.createElement("div");
    page.classList.add("page");
    const name = document.createElement("div");
    name.textContent = `Home`;

    page.appendChild(name);
    return page;
}

export { home };
