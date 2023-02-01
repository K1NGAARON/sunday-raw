const target = document.querySelector('.section.content > .row > .wrapper');

const content = [
    {
        title: 'Content Creator met copywriting skills',
        body: 'Je mixt creativiteit, mode, B2B marketing, sustainability tot een cocktail die klanten doet watertanden.',
        img: '',
        country: 'belgium',
        city: 'roeselare',
        flag: '',
        url: '/careers/job-openings/content-creator/',
        order: '',
    },
    {
        title: 'Account Executive Belgium',
        body: 'Our business grows with you. Close some interesting deals with us!',
        img: '',
        country: 'belgium',
        city: 'roeselare',
        flag: '',
        url: '/careers/job-openings/account-executive-belgium/',
        order: '',
    },
    {
        title: 'Account Executive Netherlands',
        body: 'Our business grows with you. Close some interesting deals with us!',
        img: '',
        country: 'netherlands',
        city: 'amsterdam',
        flag: '',
        url: '/careers/job-openings/account-executive-netherlands/',
        order: '',
    },
    {
        title: 'Account Executive Germany',
        body: 'Our business grows with you. Close some interesting deals with us!',
        img: '',
        country: 'germany',
        city: 'berlin',
        flag: '',
        url: '/careers/job-openings/account-executive-germany/',
        order: '',
    },
    {
        title: 'Sales Development Representative Belgium',
        body: 'Our business starts with you. Hunt for promising leads with us!',
        img: '',
        country: 'belgium',
        city: 'roeselare',
        flag: '',
        url: '/careers/job-openings/sales-development-rep-belgium/',
        order: '',
    },
    {
        title: 'Sales Development Representative Netherlands',
        body: 'Our business starts with you. Hunt for promising leads with us!',
        img: '',
        country: 'netherlands',
        city: 'amsterdam',
        flag: '',
        url: '/careers/job-openings/sales-development-rep-netherlands/',
        order: '',
    },
    {
        title: 'Sales Development Representative Germany',
        body: 'Our business starts with you. Hunt for promising leads with us!',
        img: '',
        country: 'germany',
        city: 'berlin',
        flag: '',
        url: '/careers/job-openings/sales-development-rep-germany/',
        order: '',
    },
    {
        title: 'Account Executive Ireland',
        body: 'Our business grows with you. Close some interesting deals with us!',
        img: '',
        country: 'ireland',
        city: 'dublin',
        flag: '',
        url: '/careers/job-openings/account-executive-ireland/',
        order: '',
    },
    {
        title: 'Sales Development Representative Ireland',
        body: 'Our business starts with you. Hunt for promising leads with us!',
        img: '',
        country: 'ireland',
        city: 'dublin',
        flag: '',
        url: '/careers/job-openings/sales-development-rep-ireland/',
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