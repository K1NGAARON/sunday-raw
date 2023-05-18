const content = [
    {
        client: 'Delaware',
        title: 'High performance sportswear for delaware',
        body: 'delaware is a global company that delivers advanced ICT solutions and services, guiding our customers through their business and digital transformations.',
        logo: '/cases/delaware/img/logo.png',
        img: '/cases/delaware/img/banner.jpg',
        url: '/cases/delaware/',
        beachhead: 'hr',
        companysize: '',
    },
    {
        client: 'Honeypot',
        title: "Quality wearables pushing Honeypot's corporate gifting to a higher level",
        body: 'The way Honeypot uses company fashion as a customer gift to improve their management strategy (converting talents into ambassadors).',
        logo: '/cases/honeypot/img/logo.png',
        img: '/cases/honeypot/img/banner.jpg',
        url: '/cases/honeypot/',
        beachhead: 'sales',
        companysize: '',
    },
    {
        client: 'Showpad',
        title: 'A fit and flexible solution for Showpad',
        body: "Showing off Showpad's custom made solution to create workplace health by deploying branded sportswear.",
        logo: '/cases/showpad/img/logo.png',
        img: '/cases/showpad/img/banner.jpeg',
        url: '/cases/showpad/',
        beachhead: 'hr',
        companysize: '',
    },
    {
        client: 'ION',
        title: "ION knows how to motivate a team: #actION please!",
        body: "A bottle of champagne is always a nice gift but sometimes it could be a more original gift that people will enjoy for a long time to come.",
        logo: '/cases/ion/img/logo.svg',
        img: '/cases/ion/img/banner.jpeg',
        url: '/cases/ion/',
        beachhead: 'hr',
        companysize: '',
    },
    {
        client: 'Silverfin',
        title: 'Learn how Silverfin increased performance and wellbeing for their employees',
        body: 'We, too, strongly believe that this approach contributes enormously to the productivity of employees.',
        logo: '/cases/silverfin/img/logo.png',
        img: '/cases/silverfin/img/banner.jpeg',
        url: '/cases/silverfin/',
        beachhead: 'hr',
        companysize: '',
    },
    {
        client: "Televic",
        title: "Stylish business shirts for Televic’s expert team",
        body: "Smart, personalised clothing for the entire sales team. This ensured being recognisable and visible as a team.",
        logo: "/cases/televic/img/logo.png",
        img: "/cases/televic/img/televic.jpg",
        url: "/cases/televic/",
        beachhead: "sales",
        companysize: ""
    },
    {
        client: "Stadsbader",
        title: "Stadsbader’s Biennial Challenge builds ambassadors",
        body: "Stadsbader’s striking way of building a powerful tribe of ambassadors.",
        logo: '/cases/stadsbader/img/logo.png',
        img: '/cases/stadsbader/img/banner.jpg',
        url: '/cases/stadsbader/',
        beachhead: 'marketing',
        companysize: '',
    },
    {
        client: 'Imens',
        title: "Creating long term brand awareness for I-mens by implementing company fashion",
        body: "I-mens is a brand new healthcare organization. So getting their brand into the world is the first thing to do.",
        logo: '/cases/imens/img/logo.png',
        img: '/cases/imens/img/banner.jpg',
        url: '/cases/imens/',
        beachhead: 'marketing',
        companysize: '',
    },
    {
        client: 'NY Pizza',
        title: "Influencer campaign with sweaters boosts NY Pizza’s followers",
        body: "Fast food chain New York Pizza decided to set up a campaign with their branded Christmas sweaters as centerpieces.",
        logo: '/cases/ny-pizza/img/logo.png',
        img: '/cases/ny-pizza/img/banner.jpg',
        url: '/cases/ny-pizza/',
        beachhead: 'marketing',
        companysize: '',
    },
    {
        client: "Deliverect",
        title: "How Deliverect protects their company culture when scaling rapidly after raising $150M in funding.",
        body: "Deliverect, the all-in-one solution for restaurants to grow their online presence, grew 750% in the last year.",
        logo: '/cases/deliverect/img/logo.png',
        img: '/cases/deliverect/img/banner.jpg',
        url: '/cases/deliverect/',
        beadchhead: 'hr',
        companysize: ''
    },
    {
        client: 'AkzoNobel',
        title: "The ways Trimetal increased sales and turned their end customers in ambassadors through dealer management",
        body: "As a manufacturer, AkzoNobel works together with a lot of dealers who sell their products.",
        logo: '/cases/trimetal/img/logo.png',
        img: '/cases/trimetal/img/banner.jpg',
        url: '/cases/trimetal/',
        beachhead: 'marketing',
        companysize: '',
    },
    {
        client: 'Johnnie Walker',
        title: "How Johnnie Walker celebrated its 200 year old iconic whisky with a made-to-measure fashion collection",
        body: "To celebrate 200 years of iconic Scotch whisky, Sunday created an even more iconic fashion collection.",
        logo: '/cases/johnnie-walker/img/logo.png',
        img: '/cases/johnnie-walker/img/banner.jpg',
        url: '/cases/johnnie-walker/',
        beachhead: 'marketing',
        companysize: '',
    },
    {
        client: 'IOT Venture',
        title: "How IoT helped their employees feel connected with their new brand",
        body: "When developing a new brand identity: how can you make your employees feel connected to your brand?",
        logo: '/cases/iot-venture/img/logo.png',
        img: '/cases/iot-venture/img/banner.jpg',
        url: '/cases/iot-venture/',
        beachhead: 'hr',
        companysize: '',
    },
    {
        client: "Deliverect",
        title: "How Deliverect skyrockets their company culture globally, using the Sunday Wardrobe™",
        body: "Deliverect is growing at a fast pace by raising funding. As a result, there is an internal need to ensure that all employees continue to feel connected to the company and the mission.",
        logo: '/cases/deliverect/img/logo.png',
        img: '/cases/deliverect-culture/img/banner.jpg',
        url: '/cases/deliverect-culture/',
        beachhead: 'hr',
        companysize: '',
    },
];

// function sortPosts() {
//     content.sort((a, b) => new Date(b.date) - new Date(a.date));
// };

function createCards(e) {
    const target = document.querySelector('.section.content > .row > .wrapper');

    if (target) {
        const cards = content.map(content => {

            return `
                <div class="card ${content.beachhead} ">
                    <a href="${content.url}">
                        <img src="${content.img}" alt="${content.title}">
                        <img class="logo" src="${content.logo}" alt="${content.title}">
                        <h5>
                            ${content.title}
                        </h5>
                        <p>
                            ${content.body}
                        </p>
                        <a class="btn" href="${content.url}">
                            Read the case
                        </a>
                    </a>
                </div>
            `;
        }).join('');
    
        target.innerHTML = cards;
    }
};

$(document).ready(createCards);