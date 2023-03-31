const target = document.querySelector('.section.content > .row > .wrapper');
const content = [
    {
        title: "",
        body: "",
        img: "/nl-nl/blog/boost-employee-retention/img/banner.jpg",
        url: "/nl-nl/blog/boost-employee-retention/",
        beachhead: 'hr',
    },
    {
        title: "",
        body: "",
        img: "/nl-nl/blog/boost-employee-retention/img/banner.jpg",
        url: "/nl-nl/blog/boost-employee-retention/",
        beachhead: 'hr',
    },
    {
        title: "",
        body: "",
        img: "/nl-nl/blog/boost-employee-retention/img/banner.jpg",
        url: "/nl-nl/blog/boost-employee-retention/",
        beachhead: 'hr',
    },
    {
        title: "",
        body: "",
        img: "/nl-nl/blog/boost-employee-retention/img/banner.jpg",
        url: "/nl-nl/blog/boost-employee-retention/",
        beachhead: 'hr',
    },
];

function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card ${content[i].beachhead}">
                <a href="${content[i].url}">
                    <img src="${content[i].img}" alt="${content[i].title}">
                    <h5>
                        ${content[i].title}
                    </h5>
                    <p>
                        ${content[i].body}
                    </p>
                    <a class="btn" href="${content[i].url}">
                        Read the blog
                    </a>
                </a>
            </div>
        `;
        target.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createCards);