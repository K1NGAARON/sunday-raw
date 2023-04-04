const target = document.querySelector('.section.content > .row > .wrapper');
const content = [
    {
        client: "iO",
        title: "Hoe iO ervoor zorgde dat meer dan 1000 nieuwe werknemers zich betrokken voelen bij de organisatie",
        body: "Als een end-to-end agency is iO een voorloper in de industrie. iO is een bedrijf dat strategische, creatieve, technologische en marketing ambities van nu en de toekomst vormgeeft.",
        logo: '/nl-nl/cases/io/img/logo.svg',
        img: '/nl-nl/cases/io/img/banner.jpg',
        url: '/nl-nl/cases/io/',
        beachhead: 'hr',
        companysize: '',
    },
    {
        client: "Oaky",
        title: "Hoe Oaky 5 uitdagingen, waaronder employer branding, aanpakte met branded merchandise",
        body: "Hoe zorgen we ervoor dat onze waarden en visie ook door onze medewerkers worden uitgedragen en wel zo dat ze onze bedrijfscultuur helpen mee uitdragen?",
        logo: '/nl-nl/cases/oaky/img/logo.svg',
        img: '/nl-nl/cases/oaky/img/banner.jpg',
        url: '/nl-nl/cases/oaky/',
        beachhead: 'hr',
        companysize: '',
    },
    {
        client: "ION",
        title: "ION weet hoe je een team moet motiveren: #actION please!",
        body: "Hoe kunnen we onze medewerkers gaan bedanken voor hun inzet was een vraag die ze zich bij ION stelden.",
        logo: '/nl-nl/cases/ion/img/logo.svg',
        img: '/nl-nl/cases/ion/img/banner.jpeg',
        url: '/nl-nl/cases/ion/',
        beachhead: 'hr',
        companysize: '',
    },
    {
        client: "Televic",
        title: "Stijlvolle overhemden voor het expertteam van Televic",
        body: "Hoe kunnen we ervoor zorgen dat we opvallen en aandacht krijgen op onze stand tijdens een beurs?",
        logo: '/cases/televic/img/logo.png',
        img: '/cases/televic/img/banner.jpg',
        url: '/nl-nl/cases/televic/',
        beachhead: 'hr',
        companysize: '',
    },
];

function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card ${content[i].beachhead}">
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
                        Lees de case
                    </a>
                </a>
            </div>
        `;
        target.insertAdjacentHTML("afterbegin", template);
    };
};

$(document).ready(createCards);