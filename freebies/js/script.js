const freebies = [
    {
        title: "",
        body: "",
        img: '',
        url: ''
    },
    {
        title: "",
        body: "",
        img: '',
        url: ''
    },
];

function createCards() {
    const target = document.querySelector('#freebiesContent');

    for (let i = 0; i < content.length; i++) {
        const template = `
            
        `;
        target.insertAdjacentHTML("afterbegin", template);
    };
};

$(document).ready(createCards);