const target = document.querySelector('.section.content > .row > .wrapper');
const content = [
    {
        client: 'Delaware',
        title: 'High performance sportswear for delaware',
        body: 'delaware is a global company that delivers advanced ICT solutions and services, guiding our customers through their business and digital transformations.',
        logo: '/cases/delaware/img/logo.png',
        img: '/cases/delaware/img/banner.jpeg',
        url: '/cases/delaware/',
        beachhead: 'HR',
        companysize: '',
    },
    {
        client: 'Honeypot',
        title: "Quality wearables pushing Honeypot's corporate gifting to a higher level",
        body: 'The way Honeypot uses company fashion as a customer gift to improve their management strategy (converting talents into ambassadors).',
        logo: '/cases/honeypot/img/logo.png',
        img: '/cases/honeypot/img/banner.jpg',
        url: '/cases/honeypot/',
        beachhead: '',
        companysize: '',
    },
    {
        client: 'Showpad',
        title: 'A fit and flexible solution for Showpad',
        body: "Showing off Showpad's custom made solution to create workplace health by deploying branded sportswear.",
        logo: '/cases/showpad/img/logo.png',
        img: '/cases/showpad/img/banner.jpeg',
        url: '/cases/showpad/',
        beachhead: '',
        companysize: '',
    },
    {
        client: 'ION',
        title: "ION knows how to motivate a team: #actION please!",
        body: "body incoming",
        logo: '/cases/ion/img/logo.png',
        img: '/cases/ion/img/banner.jpeg',
        url: '/cases/ion/',
        beachhead: '',
        companysize: '',
    },
    {
        client: 'Silverfin',
        title: 'Learn how Silverfin increased performance and wellbeing for their employees',
        body: 'tbaaaaaa',
        logo: '/cases/silverfin/img/logo.png',
        img: '/cases/silvefin/img/banner.jpeg',
        url: '/cases/silverfin/',
        beachhead: '',
        companysize: '',
    }
];

function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card ${content[i].beachhead.toLowerCase()}">
                <img src="${content[i].img}" alt="${content[i].title}">
                <img class="logo" src="${content[i].logo}" alt="${content[i].title}">
                <h5>
                    ${content[i].title}
                </h5>
                <p>
                    ${content[i].body}
                </p>
                <a class="btn" href="${content[i].url}">
                    Read the case
                </a>
            </div>
        `;
        target.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createCards);