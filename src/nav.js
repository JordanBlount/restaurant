import { switchTabs } from './components/tabs.js';

const setupNav = () => {
    let navItems = document.querySelectorAll('.nav-item');
    let logoLink = document.querySelector('.logo-link');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // The data-index comes through as a string
            switchTabs(item);
        });
    });

    logoLink.addEventListener('click', function() {
        switchTabs(navItems[0]);
    });
}

export {
    setupNav
}