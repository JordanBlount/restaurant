import * as layout from '../components/layout.js';
import * as utils from '../components/utils.js';


const MenuItem = (name, price, description) => {

    const getName = () => name;
    const getPrice = () => price;
    const getDescription = () => description;

    return {
        getName,
        getPrice,
        getDescription
    }
}

let menuItems = [];

const createMenu = () => {
    let itemOne = MenuItem('Strawberry Cheesecake', '50', "An absolute classic with extra crust wrapped and enveloped in a strawberry glaze.");
    let itemTwo = MenuItem('Strawberry Cheesecake', '50', "An absolute classic with extra crust wrapped and enveloped in a strawberry glaze.");
    let itemThree = MenuItem('Strawberry Cheesecake', '50', "An absolute classic with extra crust wrapped and enveloped in a strawberry glaze.");
    let itemFour = MenuItem('Strawberry Cheesecake', '50', "An absolute classic with extra crust wrapped and enveloped in a strawberry glaze.");
    let itemFive = MenuItem('Strawberry Cheesecake', '50', "An absolute classic with extra crust wrapped and enveloped in a strawberry glaze.");

    menuItems.push(itemOne, itemTwo, itemThree, itemFour, itemFive);
}

createMenu();

const buildMenu = () => {
    let content = document.createElement('div');
    content.classList.add('content');
    layout.addToBody(content);
    layout.removeHome();

    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    menuItems.forEach(item => {
        let menuItem = document.createElement('div');
        let header = document.createElement('div');
        let dishName = document.createElement('h1');
        let dishPrice = document.createElement('h1');
        let description = document.createElement('p');

        utils.addClass(menuItem, 'menu-item');
        utils.addClass(header, 'menu-item__header');
        utils.addClass(dishName, 'dish-name');
        utils.addClass(dishPrice, 'dish-price');
        utils.addClass(description, 'description');

        dishName.innerHTML = item.getName();
        dishPrice.innerHTML = `$` + item.getPrice();
        description.innerHTML = item.getDescription();

        header.appendChild(dishName);
        header.appendChild(dishPrice);

        menuItem.appendChild(header);
        menuItem.appendChild(description);

        menuDiv.appendChild(menuItem);
    });

    content.appendChild(menuDiv);
};

export {
    buildMenu
}