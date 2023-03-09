function readMore(e) {
    $('#fullBody').toggleClass('active');
    $('#introBody').toggleClass('active');
    $('#read-more').hide();
};

const services = [
    {
        title: 'Ontwerp',
        body: "Ons designteam begint hun visie vanaf een rol stof, net zoals de echte modemerken dat doen. Dit betekent dat we echt unieke items voor je merk kunnen creëren. We nemen geen genoegen met generieke blanco truien en t-shirts met een gedrukt logo, maar we zijn er trots op dat we kledingstukken ontwerpen die de unieke essentie van je merk vastleggen, waardoor het iets wordt dat al je stakeholders graag zullen dragen.",
        img: './img/design.png'
    },
    {
        title: 'Productie',
        body: "Elk product dat we ontwerpen, produceren we zorgvuldig volgens de hoogste normen op het gebied van kwaliteit en duurzaamheid. We hebben speciale productiecentra in Polen en Turkije, zodat we nauw samenwerken met alle geselecteerde partners. Onze interne R&D afdeling geeft je de mogelijkheid om volledig op maat gemaakte mode-items vanaf nul te creëren.",
        img: './img/production.png'
    },
    {
        title: 'Wereldwijde verzending',
        body: "Een van de belangrijkste uitdagingen voor onze klanten is de logistiek van de goederen. De industriestandaard is vaak dat zodra de producten gemaakt zijn, de taak van de leverancier erop zit. Wij zijn het daar niet mee eens. Daarom hebben we ons Wardrobe™-platform gelanceerd. Een virtuele kledingkast die een overzicht houdt van je merchandise, inclusief real time voorraadniveaus en die helpt wereldwijd te verzenden in een paar klikken.",
        img: './img/shipping.png'
    },
    {
        title: 'Service',
        body: `
            Onze klant staat centraal in ons bedrijf. We hebben dan ook als doel om het klanten zo makkelijk en aangenaam mogelijk te maken door:
            <br>
            <ul>
                <li>
                    Mooie textiel producten op maat te creëren die daadwerkelijk resultaat opleveren
                </li>
                <li>
                    Consequent te investeren in processen en software oplossingen die hun leven gemakkelijker maken (Wardrobe™, realistische 3D-ontwerpen, tool voor het verzamelen van maten op afstand, ...).
                </li>
                <li>

                </li>
            </ul>
        `,
        img: './img/service.png'
    },
];

function showService(e) {
    $('.service-btn').removeClass('active');
    $(this).addClass('active');

    let activeService = e.target.id;

    const title = document.querySelector('#serviceTitle');
    const body = document.querySelector('#serviceBody');
    const img = document.querySelector('#serviceIMG');

    if (activeService === 'design') {
        $(title).text(`${services[0].title}`);
        $(body).text(`${services[0].body}`);
        $(img).attr('src', `${services[0].img}`);
    } else if (activeService === 'production') {
        $(title).text(`${services[1].title}`);
        $(body).text(`${services[1].body}`);
        $(img).attr('src', `${services[1].img}`);
    } else if (activeService === 'shipping') {
        $(title).text(`${services[2].title}`);
        $(body).text(`${services[2].body}`);
        $(img).attr('src', `${services[2].img}`);
    } else if (activeService === 'service') {
        $(title).text(`${services[3].title}`);
        $(body).html(`${services[3].body}`);
        $(img).attr('src', `${services[3].img}`);
    };
};

$('.service-btn').click(showService);
$('#read-more').click(readMore);