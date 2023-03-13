function readMore(e) {
    $('#fullBody').toggleClass('active');
    $('#introBody').toggleClass('active');
    $('#read-more').hide();
};

const services = [
    {
        title: 'Ontwerp',
        body: "Ons ontwerpteam begint hun visie vanaf een rol stof, net zoals de echte modemerken dat doen. Dit betekent dat we echt unieke items voor uw merk kunnen creëren. We nemen geen genoegen met generieke blanco truien en t-shirts met een gedrukt logo. Maar we zijn er trots op dat we kledingstukken ontwerpen die de unieke essentie van uw merk vastleggen, waardoor het iets wordt dat uw fans graag zullen dragen.",
        img: '/about/img/design.png'
    },
    {
        title: 'Productie',
        body: "Elk product dat we ontwerpen, produceren we zorgvuldig volgens de hoogste normen op het gebied van kwaliteit en duurzaamheid. We hebben speciale productiecentra in Polen en Turkije, zodat we nauw samenwerken met alle geselecteerde partners. Onze interne R&D afdeling geeft u de mogelijkheid om volledig op maat gemaakte mode-items vanaf nul te creëren.",
        img: '/about/img/production.png'
    },
    {
        title: 'Wereldwijde verzending',
        body: "Een van de belangrijkste uitdagingen voor onze klanten is de logistiek van de goederen. De industriestandaard is vaak dat zodra de producten gemaakt zijn, de taak van de leverancier erop zit. Wij zijn het daar niet mee eens. Daarom hebben we ons Wardrobe™-platform gebouwd. Een virtuele kleerkast die een overzicht houdt van uw merch inclusief real time voorraadniveaus en die helpt merchandise wereldwijd te verzenden in een paar klikken.",
        img: '/about/img/shipping.png'
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
                    Onze klanten te helpen en adviseren tijdens het hele proces op een persoonlijk niveau. Gaande van het adviseren van het juiste product binnen uw budget tot het voorstellen van de juiste maatverdeling, ons team is er om u te ondersteunen met persoonlijke service bij elke stap.
                </li>
            </ul>
        `,
        img: '/about/img/service.png'
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