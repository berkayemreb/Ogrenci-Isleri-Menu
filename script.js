let buttonsDOM = document.querySelector("#buttons");
let cardsDOM = document.querySelector("#cards");

let menu = [
    {
        id: 1,
        title: "Pizza Milano",
        category: "pizza",
        price: "45 TL",
        img: "images/pizza_milano.jpg",
        desc: "Zeytin , Mısır , Sucuk , Salam , Domates ..."
    },
    {
        id: 2,
        title: "Tavuk Wrap",
        category: "chicken",
        price: "39 TL",
        img: "images/tavuk_wrap.jpg",
        desc: "Tavuk , Domates , Marul , Kasar ..."
    },
    {
        id: 3,
        title: "BBQ Burger",
        category: "burger",
        price: "49 TL",
        img: "images/bbq_burger.jpg",
        desc: "Köfte , BBQ Sos , Domates , Marul ..."
    },
    {
        id: 4,
        title: "Tavuk Quesadilla",
        category: "chicken",
        price: "54 TL",
        img: "images/tavuk_quesadilla.jpg",
        desc: "Tavuk , Domates , Mantar , Kasar ..."
    },
    {
        id: 5,
        title: "Margarita Pizza",
        category: "pizza",
        price: "49 TL",
        img: "images/margarita_pizza.jpg",
        desc: "Margarita Sosu , Domates , Maydanoz , Margarita Peyniri ..."
    },
    {
        id: 6,
        title: "BBQ Pizza",
        category: "pizza",
        price: "52 TL",
        img: "images/bbq_pizza.jpeg",
        desc: "BBQ Sosu , Sucuk , Domates , Marul ..."
    },
    {
        id: 7,
        title: "Hawai Burger",
        category: "burger",
        price: "37 TL",
        img: "images/hawai_burger.jpg",
        desc: "Köfte , Kasar , Domates , Marul ..."
    },
    {
        id: 8,
        title: "Tavuk Cokertme",
        category: "chicken",
        price: "58 TL",
        img: "images/tavuk_cokertme.jpeg",
        desc: "Tavuk , Patates , Yogurt ..."
    },
    {
        id: 9,
        title: "Chesee Burger",
        category: "burger",
        price: "64 TL",
        img: "images/chesee_burger.jfif",
        desc: "Köfte , Peynir , Domates , Marul , Ketcap ve Mayonez ..."
    }
];

showButtons();

function showButtons() {
    let ulButtonsDOM = document.createElement("ul");

    ulButtonsDOM.classList.add('list-group', 'list-group-horizontal');
    ulButtonsDOM.innerHTML =
        `
            <li id="allButton" class="list-group-item btn">Hepsi</li>
            <li id="chickenButton" class="list-group-item btn">Tavuklar</li>
            <li id="burgerButton" class="list-group-item btn">Hamburgerler</li>
            <li id="pizzaButton" class="list-group-item btn">Pizzalar</li>       
        `
    buttonsDOM.append(ulButtonsDOM);

    let allButtonDOM = document.querySelector("#allButton");
    allButtonDOM.addEventListener('click', showAll);

    let chickenButtonDOM = document.querySelector("#chickenButton");
    chickenButtonDOM.addEventListener('click', showChicken);

    let burgerButtonDOM = document.querySelector("#burgerButton");
    burgerButtonDOM.addEventListener('click', showBurger);

    let pizzaButtonDOM = document.querySelector("#pizzaButton");
    pizzaButtonDOM.addEventListener('click', showPizza);
}

function createItemHTML(element) {
    let product = `
        <div class="card mb-3 col-md-5 mx-auto">
        <div class="row">
            <div class="col-4">
                <img src="${element.img}" class="card-img h-100" alt="...">
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">
                        <span>${element.title}</span>
                        <span>${element.price}</span>
                    </h5>
                    <p class="card-text">${element.desc}</p>
                </div>
            </div>
        </div>
    </div>`

    cardsDOM.innerHTML += product;
}

function showAll() {
    cardsDOM.innerHTML = "";
    menu.forEach(element => {
        createItemHTML(element)
    });
}

function showChicken() {
    cardsDOM.innerHTML = "";
    const chickenMenu = menu.filter(element => element.category == "chicken");
    chickenMenu.forEach(element => {
        createItemHTML(element)
    });
}

function showBurger() {
    cardsDOM.innerHTML = "";
    const burgerMenu = menu.filter(element => element.category == "burger");
    burgerMenu.forEach(element => {
        createItemHTML(element)
    });
}

function showPizza() {
    cardsDOM.innerHTML = "";
    const pizzaMenu = menu.filter(element => element.category == "pizza");
    pizzaMenu.forEach(element => {
        createItemHTML(element)
    });
}
