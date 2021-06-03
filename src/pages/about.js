import * as layout from '../components/layout.js';
import * as utils from '../components/utils.js';

const buildAbout = () => {
    let content = document.createElement('div');
    content.classList.add('content');
    layout.addToBody(content);

    layout.removeHome();

    let aboutDiv = document.createElement('div');
    // These have no particular styling. (Classes in the CSS)
    let title = document.createElement('h1');
    let text = document.createElement('p');

    title.innerHTML = "About Us";
    text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reprehenderit recusandae officiis ipsum, nam alias dolorem porro totam ipsa velit consectetur! Dolorum ipsum corporis rem vitae possimus ipsam, molestias debitis recusandae aspernatur! Accusantium magni reiciendis mollitia? Id iure cupiditate iste sed numquam dolorem, autem aliquam fugit inventore aspernatur, eligendi, ex consequatur necessitatibus animi quidem! Odio hic temporibus, molestiae doloremque dolores ea natus doloribus nam veritatis quas saepe sequi corporis atque consectetur vitae eaque eum laborum maxime iusto, eos animi minima odit explicabo minus? Aliquam, enim. Perferendis architecto, aut quis animi aperiam harum hic corporis doloribus recusandae modi quo eligendi consectetur!";

    utils.addClass(aboutDiv, 'about');

    aboutDiv.appendChild(title);
    aboutDiv.appendChild(text);

    content.appendChild(aboutDiv);
}

export {
    buildAbout
}