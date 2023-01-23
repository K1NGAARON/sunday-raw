const target = document.querySelector('.section.content > .row > .wrapper');
const content = [
    {
        client: 'Delaware',
        title: 'High performance sportswear for delaware',
        body: '            delaware is a global company that delivers advanced ICT solutions and services, guiding our customers through their business and digital transformations.',
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
        beachhead: 'Sales',
        companysize: '',
    },
    {
        client: 'Showpad',
        title: 'A promise of awesome, sustainable fashion to Videoland',
        body: 'As one of the largest consumer brands of RTL, Videoland’s priority is building brand ambassadors internally and externally.',
        logo: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-logo-black_lr.png',
        img: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-1024x683.jpg',
        url: 'https://teamsunday.com/en/client-cases/a-promise-of-awesome-sustainable-fashion-to-videoland/',
        beachhead: 'Marketing',
        companysize: '',
    },
    {
        client: 'ION',
        title: 'A promise of awesome, sustainable fashion to Videoland',
        body: 'As one of the largest consumer brands of RTL, Videoland’s priority is building brand ambassadors internally and externally.',
        logo: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-logo-black_lr.png',
        img: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-1024x683.jpg',
        url: 'https://teamsunday.com/en/client-cases/a-promise-of-awesome-sustainable-fashion-to-videoland/',
        beachhead: 'Marketing',
        companysize: '',
    },
    {
        client: 'Silverfin',
        title: 'A promise of awesome, sustainable fashion to Videoland',
        body: 'As one of the largest consumer brands of RTL, Videoland’s priority is building brand ambassadors internally and externally.',
        logo: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-logo-black_lr.png',
        img: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-1024x683.jpg',
        url: 'https://teamsunday.com/en/client-cases/a-promise-of-awesome-sustainable-fashion-to-videoland/',
        beachhead: 'HR',
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