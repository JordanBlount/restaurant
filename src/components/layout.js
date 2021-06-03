let body = document.querySelector('body');
let content = document.querySelector('.content');

const clearPage = () => {
    body.removeChild(content);
}

const addToBody = (element) => {
    body.appendChild(element);
}

const addContent = (element) => {
    content.appendChild(element);
}

export {
    clearPage,
    addToBody,
    addContent
}