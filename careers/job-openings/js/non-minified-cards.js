const target = document.querySelector('.section.content > .row > .wrapper');

const content = [
    {
        title: 'Project manager',
        body: 'Als Project manager is het jouw missie om een uitstekende service te leveren vóór, tijdens en na een deal.',
        img: '/careers/job-openings/img/image3.jpg',
        country: 'belgium',
        city: 'roeselare',
        flag: '',
        url: '/careers/job-openings/project-manager/',
        order: '',
    },
    {
        title: 'Customer success manager',
        body: 'Als Customer Succes Manager is het jouw missie om een uitstekende klantbeleving te verzorgen.',
        img: '/careers/job-openings/img/image7.jpg',
        country: 'belgium',
        city: 'roeselare',
        flag: '',
        url: '/careers/job-openings/project-manager/',
        order: '',
    },
    // {
    //     title: 'Account Executive Belgium',
    //     body: 'Our business grows with you. Close some interesting deals with us!',
    //     img: '/careers/job-openings/img/image1.jpg',
    //     country: 'belgium',
    //     city: 'roeselare',
    //     flag: '',
    //     url: '/careers/job-openings/account-executive-belgium/',
    //     order: '',
    // },
    // {
    //     title: 'Account Executive Netherlands',
    //     body: 'Our business grows with you. Close some interesting deals with us!',
    //     img: '/careers/job-openings/img/image2.jpg',
    //     country: 'netherlands',
    //     city: 'amsterdam',
    //     flag: '',
    //     url: '/careers/job-openings/account-executive-netherlands/',
    //     order: '',
    // },
    // {
    //     title: 'Account Executive Germany',
    //     body: 'Our business grows with you. Close some interesting deals with us!',
    //     img: '/careers/job-openings/img/image3.jpg',
    //     country: 'germany',
    //     city: 'berlin',
    //     flag: '',
    //     url: '/careers/job-openings/account-executive-germany/',
    //     order: '',
    // },
    {
        title: 'SDR Belgium',
        body: 'Our business starts with you. Hunt for promising leads with us!',
        img: '/careers/job-openings/img/image4.jpg',
        country: 'belgium',
        city: 'roeselare',
        flag: '',
        url: '/careers/job-openings/sales-development-rep-belgium/',
        order: '',
    },
    // {
    //     title: 'SDR Netherlands',
    //     body: 'Our business starts with you. Hunt for promising leads with us!',
    //     img: '/careers/job-openings/img/image5.jpg',
    //     country: 'netherlands',
    //     city: 'amsterdam',
    //     flag: '',
    //     url: '/careers/job-openings/sales-development-rep-netherlands/',
    //     order: '',
    // },
    // {
    //     title: 'SDR Germany',
    //     body: 'Our business starts with you. Hunt for promising leads with us!',
    //     img: '/careers/job-openings/img/image6.jpg',
    //     country: 'germany',
    //     city: 'berlin',
    //     flag: '',
    //     url: '/careers/job-openings/sales-development-rep-germany/',
    //     order: '',
    // },
    // {
    //     title: 'Account Executive Ireland',
    //     body: 'Our business grows with you. Close some interesting deals with us!',
    //     img: '/careers/job-openings/img/image7.jpg',
    //     country: 'ireland',
    //     city: 'dublin',
    //     flag: '',
    //     url: '/careers/job-openings/account-executive-ireland/',
    //     order: '',
    // },
    // {
    //     title: 'SDR Ireland',
    //     body: 'Our business starts with you. Hunt for promising leads with us!',
    //     img: '/careers/job-openings/img/image1.jpg',
    //     country: 'ireland',
    //     city: 'dublin',
    //     flag: '',
    //     url: '/careers/job-openings/sales-development-rep-ireland/',
    //     order: '',
    // },
    //     {
    //     title: 'Financial controller',
    //     body: 'Je werkt nauw samen met de founders en board van het bedrijf en bent één van de belangrijkste schakels in het bewaken van de financiële gezondheid van de organisatie.',
    //     img: '/careers/job-openings/img/image1.jpg',
    //     country: 'belgium',
    //     city: 'Roeselare',
    //     flag: '',
    //     url: '/careers/job-openings/financial-controller/',
    //     order: '',
    // },
];

function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card ${content[i].country}">
                <img src="${content[i].img}">
                <h5>
                    ${content[i].title}
                </h5>
                <p class="location">
                    ${content[i].city}
                </p>
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