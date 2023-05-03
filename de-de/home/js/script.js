const usp = [
    {
        usp: 'unique-design',
        body: "Was uns bei Sunday inspiriert? Euer Corporate Branding. Pantone Farben und Logos, aber auch eure Vision und Kultur setzen den Rahmen für das Design eurer Corporate Fashion. Sunday liefert alles, was Textil ist: Ob edles Polo-Shirt mit filigraner Bestickung oder lässiges Base Cap, ob High-Tech-Trainingsshirt für den nächsten Marathon oder die funktionale Arbeitshose für die Kolleg:innen aus der Fertigung. Ab einer Menge von 100 Stückist alles möglich und in ca. 8–12 Wochen versandbereit.",
        video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778141540?h=181d56dff0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From brand to fashion"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
    },
    {
        usp: 'ship-worldwide',
        body: "Mit unserem digitalen Tool, der Sunday Wardrobe™, habt ihr eure Bestände immer im Blick. Die Software ermöglicht euch den weltweiten Versand von einzelnen Teilen oder ganzen Bundles, einfaches Nachbestellen und eine ganz entspannte Kommunikation mit eurem Ansprechpartner bei Sunday. Euer Lager ist also bei uns – somit spart ihr wertvolle Ressourcen wie Platz, Geld und Personalaufwand.",
        video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/758670317?h=7c50d91deb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sunday Wardrobe&amp;trade;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
    },
    {
        usp: 'worldclass-service',
        body: "Als belgisches Unternehmen ist uns die persönliche Beziehung zu unseren Kunden extrem wichtig – wir glauben daran, dass die besten Ideen im Gespräch entstehen. Deshalb habt ihr im gesamten Prozess auch nur einen Ansprechpartner bei Sunday, der euch jederzeit berät und voll und ganz unsere Werte lebt: Leidenschaft, Humor und Verlässlichkeit. Ein bisschen so, wie man sich den perfekten Sonntag eben vorstellt.",
        video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/794577698?h=db554bdd29&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="marieke.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
    }
];

function toggleUSP(e) {
    let video = document.querySelector('#videoHolder');
    let bodyHolder = document.querySelector('#usp-body');
    let activeUSP = e.target.id;

    $('.usp-toggle').removeClass('active');
    $(this).addClass('active');

    if (activeUSP == 'unique-design') {
        bodyHolder.innerHTML = usp[0].body;
        $(video).html(usp[0].video);
    } else if (activeUSP == 'ship-worldwide') {
        bodyHolder.innerHTML = usp[1].body;
        $(video).html(usp[1].video);
    } else if (activeUSP == 'worldclass-service') {
        bodyHolder.innerHTML = usp[2].body;
        $(video).html(usp[2].video);
    }
};

const beachheads = [
    {
        headline: "Neue Menschen im Team wollen perfekt ausgestattet sein. Mit Sunday entwickelt ihr das perfekte Welcome-Package für künftige Mitarbeiter.",
        image: '/cases/deliverect/img/banner-2.jpg',
        logo: '/cases/deliverect/img/logo.png',
        body: "Durch das Management der Einführungspakete für ihre Mitarbeiter trug Sunday zur Schaffung einer authentischen Unternehmenskultur bei.",
        url: '/nl-nl/cases/deliverect/'
    },
    {
        headline: "Ihr präsentiert euer Unternehmen live in der Öffentlichkeit? Zeigt mit euren Outfits und Give-Aways, wofür ihr steht und sorgt für einen hohen Wiedererkennungswert eurer Marke.",
        image: '/cases/televic/img/banner2.jpg',
        logo: '/cases/televic/img/logo.png',
        body: "Während andere Unternehmen versuchen, künftige Talente mit einem Kugelschreiber zu beeindrucken, möchte Televic mit seiner Markenkleidung wirklich auffallen.",
        url: '/nl-nl/cases/televic/',
    },
    {
        headline: "Kleine Geschenke erhalten die Motivation – und manchmal sagt ein paar Socken mehr als tausend Worte. Mit Sunday erobert ihr die Herzen und die Kleiderschränke eurer Talents.",
        image: '/cases/ion/img/ion.jpg',
        logo: '',
        body: "",
        url: '',
    },
    {
        headline: "Euer Unternehmen bietet im Rahmen des betrieblichen Gesundheitsmanagements Kurse an? Gibt es Lauf-Events oder Aktionen für Familien? Sunday stattet eure Mitarbeiter mit hochwertiger Sportswear aus.",
        image: '/nl-nl/cases/oaky/img/banner-2.jpg',
        logo: '',
        body: "",
        url: '',
    }
];

function toggleBeachhead(e) {
    let headlineHolder = document.querySelector('#headlineHolder');
    let imageHolder = document.querySelector('#imageHolder');
    let logoHolder = document.querySelector('#beachheadLogo');
    let bodyHolder = document.querySelector('#bodyHolder');
    let buttonHolder = document.querySelector('#caseBtn');
    
    $('.beachhead-btn').removeClass('active');
    $(this).addClass('active');

    let selectedContent = document.querySelector('.beachhead-btn.active').id;

    console.log(selectedContent);

    if (selectedContent === 'onboarding') {
        $(headlineHolder).text(`${beachheads[0].headline}`);
        $(imageHolder).attr('src', `${beachheads[0].image}`);
        $(logoHolder).attr('src', `${beachheads[0].logo}`);
        $(bodyHolder).text(`${beachheads[0].body}`);
        $(buttonHolder).show();
        $(buttonHolder).attr('href', `${beachheads[0].url}`);
    } else if (selectedContent === 'employer-branding') {
        $(headlineHolder).text(`${beachheads[1].headline}`);
        $(imageHolder).attr('src', `${beachheads[1].image}`);
        $(logoHolder).attr('src', `${beachheads[1].logo}`);
        $(bodyHolder).text(`${beachheads[1].body}`);
        $(buttonHolder).show();
        $(buttonHolder).attr('href', `${beachheads[1].url}`);
    } else if (selectedContent === 'retention') {
        $(headlineHolder).text(`${beachheads[2].headline}`);
        $(imageHolder).attr('src', `${beachheads[2].image}`);
        $(logoHolder).attr('src', `${beachheads[2].logo}`);
        $(bodyHolder).text(`${beachheads[2].body}`);
        $(buttonHolder).hide();
        $(buttonHolder).attr('href', `${beachheads[2].url}`);
    } else if (selectedContent === 'awareness') {
        $(headlineHolder).text(`${beachheads[3].headline}`);
        $(imageHolder).attr('src', `${beachheads[3].image}`);
        $(logoHolder).attr('src', `${beachheads[3].logo}`);
        $(bodyHolder).text(`${beachheads[3].body}`);
        // $(buttonHolder).attr('href', `${beachheads[3].url}`);
        $(buttonHolder).hide();
    } else if (selectedContent === 'fairs') {
        $(headlineHolder).text(`${beachheads[4].headline}`);
        $(imageHolder).attr('src', `${beachheads[4].image}`);
        $(logoHolder).attr('src', `${beachheads[4].logo}`);
        $(bodyHolder).text(`${beachheads[4].body}`);
        // $(buttonHolder).attr('href', `${beachheads[4].url}`);
        $(buttonHolder).hide();
    };
};


$('.usp-toggle').click(toggleUSP);
$('.beachhead-btn').click(toggleBeachhead);