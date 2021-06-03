let body = document.querySelector('body');

const clearPage = () => {
    let content = document.querySelector('.content');
    body.removeChild(content);

    if(document.querySelector('.content')) {
        console.log("WAS NOT FULLY REMOVED")
    }
}

const addToBody = (element) => {
    body.insertBefore(element, document.querySelector('footer'));
}

const addContent = (element) => {
    document.querySelector('.content').appendChild(element);
}

// const getContentDiv = () => {
//     if(!content === null) {
//         console.log("Test");
//         // Should create a new content div if it does not exist
//         cDiv = document.createElement('div');
//         cDiv.classList.add('content');
//         addToBody(cDiv);
//         return cDiv;
//     } else { 
//         return content;
//     }
// }

const removeHome = () => {
    //content.style.backgroundImage = '';
    let content = document.querySelector('.content');
    content.classList.add('no-fade');
    content.classList.add('no-bg');
}

// Not even used
const addHome = () => {
    let content = document.querySelector('.content');
    content.classList.remove('no-fade');
    content.classList.remove('no-bg');
}

export {
    clearPage,
    addToBody,
    addContent,
    removeHome,
    addHome
}