const collectionTarget = document.querySelector('.collections .wrapper');
console.log(collectionTarget);

const content = [
    {
        title: "Eye-catching influencers for Ablo",
        body: "Ablo is all about connecting people for the first time. The app initiates first conversations between people from all around the world and helps them to connect with each other.",
        url: '/collections/ablo/',
        img: '/collections/ablo/img/banner.jpeg'
    },
    {
        title: "Local Heroes of Brooklyn",
        body: "With the 'Local Heroes' collection, Brooklyn wanted to express their love for the 7 cities in which they have a store, with a touch of humor, and emphasize the importance of 'shopping local'!",
        url: '/collections/brooklyn/',
        img: '/collections/brooklyn/img/banner.jpeg'
    },
    {
        title: "John&Jane, Bold Never Regular",
        body: "Drum roll because these clothes really deserve a spotlight, especially because of the people wearing them!",
        url: '/collections/john-and-jane/',
        img: '/collections/john-and-jane/img/banner.jpg'
    },
    {
        title: "The collection of Celebration",
        body: "The iconic brand of Scotch whisky was looking for a partner to help them develop and produce a unique collection for their brand's 200th birthday.",
        url: '/collections/johnnie-walker/',
        img: '/collections/johnnie-walker/img/banner.jpeg'
    },
    {
        title: "Oaky, Vivid in Violet",
        body: "You can't miss this collection with its vibrant purple color. For the design we used Oaky's corporate colors: a combination of purple, white and orange.",
        url: '/collections/oaky/',
        img: '/collections/oaky/img/banner.jpeg'
    },
    {
        title: "Showpadders kicking ass at its brightest",
        body: "How do you motivate your employees to be healthy and sporty? Start with providing them fashionable, quality sportswear!",
        url: '/collections/showpad/',
        img: '/collections/showpad/img/banner.jpeg'
    },
    {
        title: "Your favorite dash of paint",
        body: "Trimetal is one of the leading Akzo Nobel Decorative Coatings Brands in Europe. Inspired by their activities, we worked with a playful reference in the design.",
        url: '/collections/trimetal/',
        img: '/collections/trimetal/img/banner.jpeg'
    },
    {
        title: "Value Collection 21 by Uberall",
        body: "Uberall is a new platform for an even better hybrid customer experience. To have the company's values conveyed in an original way, they chose to display the values on company fashion.",
        url: '/collections/uberall/',
        img: '/collections/uberall/img/banner.jpeg',
    },
];


function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card">
                <img src="${content[i].img}" alt="${content[i].title}">
                <div class="container">
                    <h5>
                        ${content[i].title}
                    </h5>
                    <a class="btn" href="${content[i].url}">
                        Discover collection
                    </a>
                </div>
                <div class="overlay vertical"></div>
            </div>
        `;
        collectionTarget.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createCards);