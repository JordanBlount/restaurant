import { clearPage } from '../components/layout.js';
import * as home from '../pages/home.js';
import * as menu from '../pages/menu.js';
import * as about from '../pages/about.js';

const switchTabs = (tab) => {
    if(tab.classList.contains('selected')) {
        console.log("We are already on that page");
        return;
    }
    let index = parseInt(tab.dataset.index);
    switch(index) {
        case 0:
            //clearPage();
            console.log("Home");
            break;
        
        case 1:
            //clearPage();
            console.log("Menu");
            break;

        case 2: 
            //clearPage();
            console.log("About");
            break;

        default:
            // Default to home page in case someone is messing with CSS
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
    switchTabs
}