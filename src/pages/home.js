import * as layout from '../components/layout.js';
import { switchTabs } from '../components/tabs.js';
import * as utils from '../components/utils.js';

const buildHome = (tab) => {
    let content = document.createElement('div');
    content.classList.add('content');
    layout.addToBody(content);

    let cta = document.createElement('div');
    let headline = document.createElement('h1');
    let btn = document.createElement('button');

    utils.addClass(cta, 'cta');
    utils.addClass(headline, 'headline');
    utils.addClass(btn, 'btn');

    headline.innerHTML = "Try one for yourself. You'll see"
    btn.innerHTML = "Check out menu";

    btn.addEventListener('click', function() {
        switchTabs(document.querySelectorAll('.nav-item')[1]);
    });

    cta.appendChild(headline);
    cta.appendChild(btn);

    content.appendChild(cta);
}

export {
    buildHome
}