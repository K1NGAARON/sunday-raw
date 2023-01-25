const target = document.querySelector('.section.content > .row > .wrapper');

const content = [
    {
        title: 'Content Creator met copywriting skills',
        body: 'Je mixt creativiteit, mode, B2B marketing, sustainability tot een cocktail die klanten doet watertanden.',
        img: '',
        country: 'belgium',
        city: 'roeselare',
        flag: '',
        url: '',
        order: '',
    },
    {
        title: 'Account Executive',
        body: 'Our business grows with you. Close some interesting deals with us!',
        img: '',
        country: 'belgium',
        city: 'roeselare',
        flag: '',
        url: '',
        order: '',
    },
    {
        title: 'Account Executive',
        body: 'Our business grows with you. Close some interesting deals with us!',
        img: '',
        country: 'netherlands',
        city: 'amsterdam',
        flag: '',
        url: '',
        order: '',
    },
    {
        title: 'Account Executive',
        body: 'Our business grows with you. Close some interesting deals with us!',
        img: '',
        country: 'germany',
        city: 'berlin',
        flag: '',
        url: '',
        order: '',
    },
    {
        title: 'Sales Development Representative',
        body: 'Our business starts with you. Hunt for promising leads with us!',
        img: '',
        country: 'belgium',
        city: 'roeselare',
        flag: '',
        url: '',
        order: '',
    },
    {
        title: 'Sales Development Representative',
        body: 'Our business starts with you. Hunt for promising leads with us!',
        img: '',
        country: 'netherlands',
        city: 'amsterdam',
        flag: '',
        url: '',
        order: '',
    },
    {
        title: 'Sales Development Representative',
        body: 'Our business starts with you. Hunt for promising leads with us!',
        img: '',
        country: 'germany',
        city: 'berlin',
        flag: '',
        url: '',
        order: '',
    },
    {
        title: 'Account Executive',
        body: 'Our business grows with you. Close some interesting deals with us!',
        img: '',
        country: 'ireland',
        city: 'dublin',
        flag: '',
        url: '',
        order: '',
    },
    {
        title: 'Sales Development Representative',
        body: 'Our business starts with you. Hunt for promising leads with us!',
        img: '',
        country: 'ireland',
        city: 'dublin',
        flag: '',
        url: '',
        order: '',
    },
    // {
    //     title: '',
    //     body: '',
    //     img: '',
    //     country: '',
    //     city: '',
    //     flag: '',
    //     url: '',
    //     order: '',
    // }
];

function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card ${content[i].country}">
                <img src="${content[i].img}" alt="${content[i].title}">
                <h5>
                    ${content[i].title}
                </h5>
                <p>
                    ${content[i].body}
                </p>
                <a class="btn" href="${content[i].url}">
                    View opening
                </a>
            </div>
        `;
        target.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createCards);