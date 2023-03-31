const collectionTarget = document.querySelector('.collections .wrapper');
console.log(collectionTarget);

const content = [
    {
        title: "Je favoriete toefje verf",
        body: "Trimetal is een van de toonaangevende Akzo Nobel Decorative Coatings Brands in Europa.",
        url: '/nl-nl/collections/trimetal/',
        img: '/nl-nl/collections/trimetal/img/banner.jpeg'
    },
    {
        title: "Showpadders kicking ass at its brightest",
        body: "Hoe motiveer je jouw werknemers om gezond en sportief te zijn? Begin met het aanbieden van modieuze, kwalitatieve sportkleding!",
        url: '/nl-nl/collections/showpad/',
        img: '/nl-nl/collections/showpad/img/banner.jpeg'
    },
    {
        title: "John&Jane, Bold Never Regular",
        body: "Tromgeroffel, want deze kleding verdient echt een spotlight, vooral vanwege de mensen die het dragen!",
        url: '/nl-nl/collections/john-and-jane/',
        img: '/nl-nl/collections/john-and-jane/img/banner.jpg'
    },
    {
        title: "Local Heroes of Brooklyn",
        body: "Met de 'Local Heroes' collectie wilde Brooklyn hun liefde voor de 7 steden waar ze een winkel hebben uitdrukken, met een vleugje humor, en het belang van 'shopping local' benadrukken!",
        url: '/nl-nl/collections/brooklyn/',
        img: '/nl-nl/collections/brooklyn/img/banner.jpeg'
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
                        Ontdek de collectie
                    </a>
                </div>
                <div class="overlay vertical"></div>
            </div>
        `;
        collectionTarget.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createCards);