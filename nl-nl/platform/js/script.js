const content = [
    {
        title: "Het is kostenbesparendmoney",
        body: "Door alle inspanningen met betrekking tot merchandise te bundelen in plaats van veel verschillende initiatieven te ondernemen, besparen onze klanten doorgaans tot 50% per jaar aan kosten.",
        img: '/platform/img/usp/save.png',
    },
    {
        title: "Het is veel efficiënter",
        body: "De rompslomp van het organiseren van merchandise voor jouw team, zijn eindelijk voorbij. je kan het overzicht van de kleding elk moment raadplegen, beheren of verzenden in enkele kliks.",
        img: '/platform/img/usp/save-time.png',
    },
    {
        title: "Het genereert data inzicht",
        body: "Omdat alles gecentraliseerd is, is het erg makkelijk om veel datapunten te verzamelen, die zich vervolgens vertalen in waardevolle inzichten, toegankelijk vanaf het platform.",
        img: '/platform/img/usp/data.png',
    },
    {
        title: "Zero waste aanpak",
        body: "Een beurs of evenement gehad waar je minder items hebt gebruikt dan voorzien? Geen probleem, zet de producten terug in je Virtual Wardrobe en gebruik ze voor een andere campagne.",
        img: '/platform/img/usp/zero-waste.png',
    },
    {
        title: "Het is GDPR-compliant",
        body: "Zodra je het platform gaat gebruiken, komen er veel gevoelige gegevens in de database terecht. Maak je echter geen zorgen: de gegevens zijn alleen toegankelijk voor degenen die daartoe bevoegd zijn.",
        img: '/platform/img/usp/gdpr.png',
    },
    {
        title: "Merkconsistentie",
        body: "Door je team toegang te geven tot de centraal opgeslagen collectie(s), zorg je ervoor dat ze alleen items gebruiken die 100% consistent en on-brand zijn.",
        img: '/platform/img/usp/consistent.png',
    }
];


function toggleUSP(e) {
    $('.usp-btn').removeClass('active');
    $(this).addClass('active');

    activeUSP = e.target.id;

    let uspTitle = document.querySelector('#headlineHolder');
    let uspBody = document.querySelector('#uspBody');
    let uspIMG = document.querySelector('#imageHolder');

    if (activeUSP === 'save-money') {
        $(uspTitle).text(`${content[0].title}`);
        $(uspBody).text(`${content[0].body}`);
        $(uspIMG).attr('src', `${content[0].img}`);
    } else if (activeUSP === 'efficient') {
        $(uspTitle).text(`${content[1].title}`);
        $(uspBody).text(`${content[1].body}`);
        $(uspIMG).attr('src', `${content[1].img}`);
    } else if (activeUSP === 'data') {
        $(uspTitle).text(`${content[2].title}`);
        $(uspBody).text(`${content[2].body}`);
        $(uspIMG).attr('src', `${content[2].img}`);
    } else if (activeUSP === 'zero-waste') {
        $(uspTitle).text(`${content[3].title}`);
        $(uspBody).text(`${content[3].body}`);
        $(uspIMG).attr('src', `${content[3].img}`);
    } else if (activeUSP === 'gdpr') {
        $(uspTitle).text(`${content[4].title}`);
        $(uspBody).text(`${content[4].body}`);
        $(uspIMG).attr('src', `${content[4].img}`);
    } else if (activeUSP === 'brand') {
        $(uspTitle).text(`${content[5].title}`);
        $(uspBody).text(`${content[5].body}`);
        $(uspIMG).attr('src', `${content[5].img}`);
    }
};

$('.usp-btn').click(toggleUSP);