function readMore(e) {
    $('#fullBody').toggleClass('active');
    $('#introBody').toggleClass('active');
    $('#read-more').hide();
};

const services = [
    {
        title: 'Einzigartiges Design',
        body: "Wir arbeiten nicht anders als die großen Modemarken: Alles beginnt mit einer Inspiration, einer Skizze, einer Vision. Was schwebt euch vor, was möchtet ihr ausdrücken, was soll das Kleidungsstück aussagen? SUNDAY beginnt jedes Mal ganz von vorn, und das im besten Sinne – einen schlichten Pullover mit eurem Logo zu bedrucken kann jede:r. Einzigartige Kollektionen in euren Pantone-Farben gestaltet, innovativ gebranded und absolut ressourcenschonend gefertigt: So läuft das bei uns.",
        img: '/about/img/design.png'
    },
    {
        title: 'Faire Produktion',
        body: "Sunday will Impulsgeber sein: Denn zeitgemäße Textilproduktion lebt von kurzen Wegen, ökologischen Materialien und ressourcensparenden Fertigungstechniken. Faire Arbeitsbedingungen und eine zu 100% transparente Lieferkette sind für uns Standard – deshalb arbeiten wir mit geprüften Produktionsstätten in Polen und der Türkei. Jede:r unserer Geschäftspartner:innen ist mit Sorgfalt ausgewählt. Für euch bedeutet das: Beste Qualität und das gute Gefühl, in Sachen Corporate Fashion ein Zeichen für mehr Klimagerechtigkeit zu setzen.",
        img: '/about/img/production.png'
    },
    {
        title: 'Weltweiter Versand',
        body: "Für viele Vertriebe in unserer Branche endet ihr Auftrag, sobald die Ware an die Kund:innen versendet worden ist – Sunday macht es bewusst anders. Denn wir wissen, wie aufwändig sich die Distribution unterschiedlichster Mengen an diverse Standorte eures Unternehmens gestaltet. Darum haben wir für euch die Sunday WardrobeTM entwickelt: Eine Softwarelösung, mit der ihr in wenigen Klicks mitteilt, welche Mengen wir wohin versenden dürfen. Eure Bestände lagern bei uns, Nachbestellen ist die einfachste Sache der Welt. Klingt fantastisch, oder?",
        img: '/about/img/shipping.png'
    },
    {
        title: 'Maximale Kund:innenorientierung',
        body: `
        Sunday versteht sich als Partner, Berater, Macher: Unsere Ansprechpartner:innen nehmen euch an die Hand und gestalten für euch einen Customer Journey, der sich fast nach Urlaub anfühlt.
            <br><br>
            <ul>
                <li>
                    Sunday fashion sells: Bei uns bekommt ihr Corporate Fashion, die zu messbaren Erfolgen führt
                </li>
                <li>
                    Wir investieren in neueste Technologien und optimieren stetig – ob 3D-Showroom, digitale Größenrechner oder die innovative Sunday Wardrobe™
                </li>
                <li>
                    Wir lieben das Persönliche: Ganz egal, wo im Prozess ihr Unterstützung benötigt, Sunday ist für euch da. Geht es um’s Budget, um kurzfristige Änderungen oder eine komplexe Konfektionierung? Wir lösen das.
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