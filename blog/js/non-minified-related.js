const target = document.querySelector('.related-content > .row > .wrapper');
const content = [
    {
        client: 'videoland',
        title: 'A promise of awesome, sustainable fashion to Videoland',
        body: 'As one of the largest consumer brands of RTL, Videoland’s priority is building brand ambassadors internally and externally.',
        logo: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-logo-black_lr.png',
        img: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-1024x683.jpg',
        url: 'https://teamsunday.com/en/client-cases/a-promise-of-awesome-sustainable-fashion-to-videoland/'
    },
    {
        client: 'videoland',
        title: 'A promise of awesome, sustainable fashion to Videoland',
        body: 'As one of the largest consumer brands of RTL, Videoland’s priority is building brand ambassadors internally and externally.',
        logo: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-logo-black_lr.png',
        img: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-1024x683.jpg',
        url: 'https://teamsunday.com/en/client-cases/a-promise-of-awesome-sustainable-fashion-to-videoland/'
    },
    {
        client: 'videoland',
        title: 'A promise of awesome, sustainable fashion to Videoland',
        body: 'As one of the largest consumer brands of RTL, Videoland’s priority is building brand ambassadors internally and externally.',
        logo: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-logo-black_lr.png',
        img: 'https://teamsunday.com/wp-content/uploads/2022/11/videoland-1024x683.jpg',
        url: 'https://teamsunday.com/en/client-cases/a-promise-of-awesome-sustainable-fashion-to-videoland/'
    }
];

function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card">
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