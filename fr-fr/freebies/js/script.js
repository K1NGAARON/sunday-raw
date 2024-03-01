const freebies = [
    {
        title: "Rapport sur les tendances de la mode pour les entreprises en 2022",
        body: "Tous ceux qui pensent que les vêtements d'entreprise sont toujours ennuyeux et souvent de mauvaise qualité devraient rencontrer Sunday.",
        img: '/freebies/trend-report/img/trend-report.png',
        url: '/fr-fr/freebies/trend-report/'
    },
    {
        title: "Télécharger notre lookbook",
        body: "Nous nous considérons comme les architectes des collections de mode de nos clients. Nous les aidons à concevoir des vêtements étonnants, à la pointe de la mode, qui correspondent vraiment à leur culture.",
        img: '/freebies/lookbook/img/new-lookbook.png',
        url: '/fr-fr/freebies/lookbook/'
    },
];

function createCards() {
    const target = document.querySelector('#freebiesContent');

    for (let i = 0; i < freebies.length; i++) {
        const template = `
        <div class="card">
            <img src="${freebies[i].img}">
            <h5>
                ${freebies[i].title}
            </h5>
            <p>
                ${freebies[i].body}
            </p>
            <a class="btn" href="${freebies[i].url}">
                Plus d'informations
            </a>
            
        </div>
        `;
        target.insertAdjacentHTML("afterbegin", template);
    };
};

$(document).ready(createCards);