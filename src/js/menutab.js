import { createHTMLElement } from "./createElt";
import dish1 from "/src/static/img/menu/dish1.jpeg";
import dish2 from "/src/static/img/menu/dish2.jpeg";
import dish3 from "/src/static/img/menu/dish3.jpeg";
import drink1 from "/src/static/img/menu/drink1.jpeg";
import drink2 from "/src/static/img/menu/drink2.jpeg";

import "/src/scss/menu.scss";

const foods = [
    [
        dish1,
        "Burger and chips",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quiaquam tenetur possimus assumenda facere! Quibusdam at temporibuseligendi fugiat, minima dolores praesentium, iste atque laudantiumrem aspernatur suscipit et.",
    ],
    [
        dish2,
        "Fish and peas, mmm... delicous",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quiaquam tenetur possimus assumenda facere! Quibusdam at temporibuseligendi fugiat, minima dolores praesentium, iste atque laudantiumrem aspernatur suscipit et.",
    ],
    [
        dish3,
        "Chips and wings",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quiaquam tenetur possimus assumenda facere! Quibusdam at temporibuseligendi fugiat, minima dolores praesentium, iste atque laudantiumrem aspernatur suscipit et.",
    ],
];

const drinks = [
    [
        drink1,
        "Drink numero uno",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quiaquam tenetur possimus assumenda facere! Quibusdam at temporibuseligendi fugiat, minima dolores praesentium, iste atque laudantiumrem aspernatur suscipit et.",
    ],
    [
        drink2,
        "Drink numero dos",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quiaquam tenetur possimus assumenda facere! Quibusdam at temporibuseligendi fugiat, minima dolores praesentium, iste atque laudantiumrem aspernatur suscipit et.",
    ],
];

const foodSlides = [];
const drinkSlides = [];

function createCategory(name, arr, slidesArr) {
    let counter = 0;

    function slide(direction, arr1, arr2) {
        if (
            (counter === 0 && direction === 1) ||
            (counter === arr1.length - 1 && direction === -1)
        ) {
            return;
        }

        if (direction === -1) counter += 1;
        else counter -= 1;

        [arr1, arr2].forEach(function (arr) {
            arr.forEach(function (slide) {
                slide.style.transform = `translateX(-${counter * 100}%)`;
            });
        });
    }

    const category = createHTMLElement("div", [
        "category",
        `category--${name}`,
    ]);
    const title = createHTMLElement(
        "h2",
        ["category__title"],
        `${name.charAt(0).toUpperCase() + name.slice(1)}`
    );

    // IMAGE SLIDES
    const slidesCont = createHTMLElement("div", ["slides-cont"]);
    for (let i = 0; i < arr.length; i++) {
        const imgCont = createHTMLElement("div", ["img-cont"]);
        const img = new Image();
        img.src = arr[i][0];
        img.classList.add("img--slide");

        imgCont.style.left = `${i * 100}%`;
        const blur = createHTMLElement("blur", ["blur"]);
        imgCont.append(img, blur);

        blur.style.backgroundImage = `url(${arr[i][0]})`;
        blur.style.backgroundPosition = "center";
        blur.style.backgroundSize = "cover";
        blur.style.backgroundRepeat = "no-repeat";

        slidesCont.appendChild(imgCont);
        slidesArr.push(imgCont);
    }

    // SLIDERS
    const slidersCont = createHTMLElement("div", ["sliders-cont"]);
    const sliderLeft = createHTMLElement("div", ["slider", "slider--left"]);
    const sliderRight = createHTMLElement("div", ["slider", "slider--right"]);
    slidersCont.append(sliderLeft, sliderRight);

    // DESCRIPTON SLIDES
    const descArr = [];
    const descCard = createHTMLElement("div", ["desc-card"]);
    const descCont = createHTMLElement("div", ["desc-cont"]);
    for (let i = 0; i < arr.length; i++) {
        const innerCont = createHTMLElement("div", ["desc--slide"]);
        innerCont.style.left = `${i * 100}%`;
        const title = createHTMLElement(
            "h2",
            ["product-title"],
            `${arr[i][1]}`
        );
        const desc = createHTMLElement("p", ["product-desc"], `${arr[i][2]}`);
        innerCont.append(title, desc);
        descArr.push(innerCont);
        descCont.append(innerCont);
    }
    sliderLeft.addEventListener("click", (e) => slide(1, slidesArr, descArr));
    sliderRight.addEventListener("click", (e) => slide(-1, slidesArr, descArr));

    descCard.appendChild(descCont);
    category.append(title, slidesCont, slidersCont, descCard);
    return category;
}

function menu() {
    const page = document.createElement("div");
    page.classList.add("page", "page--menu");

    const title = createHTMLElement("h1", ["title"], "Menu");

    page.appendChild(title);
    page.appendChild(createCategory("food", foods, foodSlides));
    page.appendChild(createCategory("drinks", drinks, drinkSlides));

    return page;
}

export { menu };
