const menuitems = [
    {
        id: 1,
        title: "Confetti Donut",
        price: 32.45,
        category: "donut",
        description: "",
        img: "./images/alex.jpg",
        credit: `Photo by <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Grey</a> on <a href="https://unsplash.com/images/food/cake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
    },
    {
        id: 2,
        title: "Unicorn Cake",
        price: 23.44,
        category: "cake",
        description: "",
        img: "./images/deva.jpg",
        credit: `Photo by <a href="https://unsplash.com/@biglaughkitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Deva Williamson</a> on <a href="https://unsplash.com/images/food/cake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        `
    },
    {
        id: 3,
        title: "Apple Pie",
        price: 38.99,
        category: "pie",
        description: "",
        img: "./images/danil.jpg",
        credit: `Photo by <a href="https://unsplash.com/fr/@nebe3etogo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Danil Aksenov</a> on <a href="https://unsplash.com/photos/bkXzABDt08Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        `
    },
    {
        id: 4,
        title: "Pecan Pie",
        price: 65.55,
        category: "pie",
        description: "",
        img: "./images/levi.jpg",
        credit: `Photo by <a href="https://unsplash.com/@homeschool?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Levi Guzman</a> on <a href="https://unsplash.com/photos/ZUb3YN8B5K4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        `
    },
    {
        id: 5,
        title: "Chocolate Glazed Donut",
        price: 2.50,
        category: "donut",
        description: "",
        img: "./images/adana.jpg",
        credit: `Photo by <a href="https://unsplash.com/@adana90photos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adana Eisagholian</a> on <a href="https://unsplash.com/images/food/donut?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        `
    },
    {
        id: 6,
        title: "Chocolate Cake",
        price: 54.99,
        category: "cake",
        description: "",
        img: "./images/alina.jpg",
        credit: `Photo by <a href="https://unsplash.com/@alinasagirova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alina Karpenko</a> on <a href="https://unsplash.com/images/food/cake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        `
    },
    {
        id: 7,
        title: "Sugar Glazed Donuts",
        price: 15.00,
        category: "donut",
        description: "",
        img: "./images/heather.jpg",
        credit: `Photo by <a href="https://unsplash.com/@the_modern_life_mrs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Heather Ford</a> on <a href="https://unsplash.com/images/food/donut?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        `
    },
    {
        id: 8,
        title: "Blueberry Pie",
        price: 65.50,
        category: "pie",
        description: "",
        img: "./images/raphael.jpg",
        credit: `Photo by <a href="https://unsplash.com/@photograffihk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">RAPHAEL MAKSIAN</a> on <a href="https://unsplash.com/photos/vPedCtyqArw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        `
    },
    {
        id: 9,
        title: "Strawberry Shortcake",
        price: 56.89,
        category: "cake",
        description: "",
        img: "./images/heatherCake.jpg",
        credit: `Photo by <a href="https://unsplash.com/@heatherbarnes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Heather Barnes</a> on <a href="https://unsplash.com/images/food/cake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        `
    },

];
const menu = document.querySelector('.menu');

const filterbtnContainer = document.querySelector(".filterContainer");

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menuitems);
    const categories = menuitems.reduce(function(values, item){
        if (!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    }, ["all"])
    const catbtns = categories.map(function(category){
        return `<button class="filterButtons" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
    filterbtnContainer.innerHTML = catbtns;
    const filterButtons = document.querySelectorAll(".filterButtons");
    // filter
filterButtons.forEach(function(btn) {
    btn.addEventListener("click",function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menuitems.filter(function(menuitemsparam) {
            //console.log(menuitemsparam.category);
            if (menuitemsparam.category === category) {
                return menuitemsparam;
            }
            
        });
        //console.log(menuCategory)
        if (category === "all"){
            displayMenuItems(menuitems)
        } else {
            displayMenuItems(menuCategory)
        }
    });
});
});





function displayMenuItems(menuitemsparam){
    let displayMenu = menuitemsparam.map(function (item) {
        return `<div class="col-sm-4">
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-sm-4">
            <!-- <img src=${item.img} class="img-fluid rounded-start" alt="Menu Item">-->
            <img src=${item.img} class="rounded-start" alt="Menu Item" width="100%" height="165px">
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <h5 class="card-title itemNprice">${item.title}<span class="price">GHC ${item.price}</span></h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <p class="card-text"><small class="text-muted">${item.credit}</small></p>
            </div>
          </div>
        </div>
        </div>
      </div>`;
    });
    displayMenu = displayMenu.join("");
    menu.innerHTML = displayMenu;
}