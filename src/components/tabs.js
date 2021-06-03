import { clearPage } from '../components/layout.js';
import * as home from '../pages/home.js';
import * as menu from '../pages/menu.js';
import * as about from '../pages/about.js';

const setupTabs = () => {
    let tabItems = document.querySelectorAll('.nav-item');
    let logoLink = document.querySelector('.logo-link');

    // Defaults to Home page

    tabItems.forEach(item => {
        item.addEventListener('click', function () {
            switchTabs(item);
        });
    });

    logoLink.addEventListener('click', function() {
        switchTabs(tabItems[0]);
    });

    switchTabs(tabItems[0]);
}

const switchTabs = (tab) => {
    // This seems a little hacked together, but it works lol. 
    // It is to prevent us from reloading the current page if the same tab (or logo)
    // is pressed.
    if(tab.classList.contains('selected')) {
        console.log("We are already on that page");
        return;
    }
    // The data-index comes through as a string
    let index = parseInt(tab.dataset.index);
    switch(index) {
        case 0:
            clearPage();
            home.buildHome();
            break;
        
        case 1:
            clearPage();
            menu.buildMenu();
            break;

        case 2: 
            clearPage();
            about.buildAbout();
            break;

        default:
            // Default to home page in case someone is messing with CSS
            console.log("This is not normal");
            switchTabs(document.querySelectorAll('.nav-item')[0]);
            break;
    }
    setTab(index);
}

const setTab = (index) => {
    // Add styling
    let tabs = document.querySelectorAll('.nav-item');
    tabs.forEach(tab => {
        tab.classList.remove('selected');
    });
    tabs[index].classList.add('selected');
}

export {
    setupTabs,
    switchTabs
}