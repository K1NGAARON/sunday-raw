const freebies = [
    {
        title: "Fashion trend report for businesses in 2022",
        body: "Anyone who thinks that corporate clothing is always boring and often of poor quality should meet Sunday.",
        img: '/freebies/trend-report/img/trend-report.png',
        url: '/freebies/trend-report/'
    },
    {
        title: "Download our lookbook",
        body: "We see ourselves as architects of our clients' fashion collections. We help them design on-brand and on-trend amazing clothing items that really fit their culture.",
        img: '/freebies/lookbook/img/new-lookbook.png',
        url: '/freebies/lookbook/'
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
                More info
            </a>
            
        </div>
        `;
        target.insertAdjacentHTML("afterbegin", template);
    };
};

$(document).ready(createCards);