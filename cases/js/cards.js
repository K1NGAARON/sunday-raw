const target = document.querySelector('.section.content > .row > .wrapper');
const content = [
    {
        client: 'Delaware',
        title: 'High performance sportswear for delaware',
        body: 'delaware is a global company that delivers advanced ICT solutions and services, guiding our customers through their business and digital transformations.',
        logo: '/cases/delaware/img/logo.png',
        img: '/cases/delaware/img/banner.jpg',
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
        title: 'A fit and flexible solution for Showpad',
        body: "Showing off Showpad's custom made solution to create workplace health by deploying branded sportswear.",
        logo: '/cases/showpad/img/logo.png',
        img: '/cases/showpad/img/banner.jpeg',
        url: '/cases/showpad/',
        beachhead: 'HR',
        companysize: '',
    },
    {
        client: 'ION',
        title: "ION knows how to motivate a team: #actION please!",
        body: "A bottle of champagne is always a nice gift but sometimes it could be a more original gift that people will enjoy for a long time to come.",
        logo: '/cases/ion/img/logo.svg',
        img: '/cases/ion/img/banner.jpeg',
        url: '/cases/ion/',
        beachhead: 'HR',
        companysize: '',
    },
    {
        client: 'Silverfin',
        title: 'Learn how Silverfin increased performance and wellbeing for their employees',
        body: 'We, too, strongly believe that this approach contributes enormously to the productivity of employees.',
        logo: '/cases/silverfin/img/logo.png',
        img: '/cases/silverfin/img/banner.jpeg',
        url: '/cases/silverfin/',
        beachhead: 'HR',
        companysize: '',
    },
    {
        client: "Televic",
        title: "Stylish business shirts for Televic’s expert team",
        body: "Smart, personalised clothing for the entire sales team. This ensured being recognisable and visible as a team.",
        logo: "/cases/televic/img/logo.png",
        img: "/cases/televic/img/televic.jpg",
        url: "/cases/televic/",
        beachhead: "",
        companysize: ""
    },
];

function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card ${content[i].beachhead.toLowerCase()}">
                <a href="${content[i].url}">
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
                </a>
            </div>
        `;
        target.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createCards);