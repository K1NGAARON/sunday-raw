const target = document.querySelector('.section.content > .row > .wrapper');
const content = [
    {
        client: "Honeypot",
        title: "Honeypot begeistert tech-talents in ganz Europa",
        body: "Honeypot nutzt Company Wear als Kund:innengeschenk, um als Europas führende Job-Plattform für Entwickler:innen einen bleibenden Eindruck zu hinterlassen.",
        logo: "/cases/honeypot/img/logo.png",
        img: "/cases/honeypot/img/banner.jpg",
        url: "/de-de/cases/honeypot/",
        beachhead: "",
        companysize: "",
    },
    {
        client: "TikTok",
        title: "On trend für TikTok und die Gen Z",
        body: "Ihr wollt wissen, wie man durch zielgruppenspezifische Company Wear maximal die Loyalität der eigenen Community stärkt? TikTok macht es vor - mit Sunday.",
        logo: "/de-de/cases/tiktok/img/logo.svg",
        img: "/de-de/cases/tiktok/img/banner.jpg",
        url: "/de-de/cases/tiktok/",
        beachhead: "",
        companysize: "",
    },
    {
        client: "Zalando",
        title: "So bindet Zalando seine Talente",
        body: "Der Mode-Konzern Zalando ist immer auf der Suche nach neuen Talents. Mit Sunday machen sie Praktikant:innen zu echten Markenbotschafter:innen - und optimieren nachhaltig ihr Employer Branding.",
        logo: "/de-de/cases/zalando/img/logo.svg",
        img: "/de-de/cases/zalando/img/banner.jpg",
        url: "/de-de/cases/zalando/",
        beachhead: "",
        companysize: "",
    },
    // {
    //     client: "",
    //     title: "",
    //     body: "",
    //     logo: "",
    //     img: "",
    //     url: "",
    //     beachhead: "",
    //     companysize: "",
    // },
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
                        Mehr lesen
                    </a>
                </a>
            </div>
        `;
        target.insertAdjacentHTML("afterbegin", template);
    };
};

$(document).ready(createCards);