import { createHTMLElement } from "./createElt";
import "/src/scss/home.scss";
import barImg from "/src/static/img/home/pub.jpg";
import burgerImg from "/src/static/img/home/burgers.jpeg";
import beerImg from "/src/static/img/home/beer.jpg";

const rows = [
    [
        "FROM BURGERS TO STEAK TO PIZZA, CHECK OUT OUR MENU",
        burgerImg,
        "",
        "The dubble cheese burger is a favourite here with our clients. Match it with a kraken blond.",
    ],
    [
        "ENJOY SOME FUN UNIQUE EXPERIENCES AT OUR PUB",
        beerImg,
        "Be the bartender with a taptable",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente labore dignissimos velit ex molestias incidunt illumamet quae. Omnis asperiores suscipit, natus cumque neque officiaex impedit fuga hic aliquam.",
    ],
];

function home() {
    const page = document.createElement("div");
    page.classList.add("page", "page--home");

    const title = createHTMLElement(
        "h1",
        ["title"],
        "VISIT OUR GASTROPUB, FOOD AND DRINKS"
    );

    const barImage = new Image();
    barImage.src = barImg;
    barImage.classList.add("img-main");

    const paraMain = createHTMLElement(
        "p",
        ["para", "para--main"],
        "Enjoy good food and fresh drinks with your friends and familiy. El leu magna. Fusce                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias commodi est fuga nemo, ratione dolor a sequi, laudantium officiis tempora nihil voluptatem! Similique sit corrupti consequatur totam adipisci"
    );

    const titleContainer = createHTMLElement("div", ["container"]);
    titleContainer.append(title, barImage, paraMain);

    page.appendChild(titleContainer);

    for (let i = 0; i < rows.length; i += 1) {
        const sectionContainer = createHTMLElement("div", ["container"]);
        const title = createHTMLElement("h2", ["title"], rows[i][0]);
        const image = new Image();
        image.src = rows[i][1];
        const subtitle = createHTMLElement("h3", ["subtitle"], rows[i][2]);
        const para = createHTMLElement("p", ["para"], rows[i][3]);

        const textElt = createHTMLElement("div", ["row__text"]);
        if (rows[i][2]) {
            textElt.appendChild(subtitle);
        }
        if (rows[i][3]) {
            textElt.appendChild(para);
        }

        if (rows[i][0]) {
            sectionContainer.appendChild(title);
        }
        if (rows[i][1]) {
            sectionContainer.appendChild(image);
        }

        sectionContainer.appendChild(textElt);
        page.append(sectionContainer);
    }

    return page;
}

export { home };
