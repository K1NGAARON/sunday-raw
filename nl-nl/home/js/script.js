const usp = [
    {
        usp: 'unique-design',
        body: "Onze op maat gemaakte designs zijn uniek in de markt: We beginnen altijd met de brand guidelines van de klant (logo, Pantone-kleuren en de visie worden meegenomen). Vervolgens denken we mee over de doeleinden van de kleding en wie het zal dragen. Op die manier kan het designteam veel gerichter een passend design uitwerken. Het team volgt ook constant de laatste modetrends, wat ervoor zorgt dat we hippe en moderne concepten ontwikkelen die met trots gedragen zullen worden.",
        video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778141540?h=181d56dff0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From brand to fashion"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
    },
    {
        usp: 'ship-worldwide',
        body: "We merkten dat veel van onze klanten graag creatieve campagnes uitwerken met geweldige kleding, maar ze hebben een hekel aan al de drukte dat dit met zich meebrengt. Om deze drukte niet langer een zorg te laten zijn, hebben we gewerkt aan een oplossing: de Sunday Wardrobe™. Sunday Wardrobe™ is onze SAAS-oplossing die het voor bedrijven super eenvoudig maakt om kleding op te stockeren, te verwerken en te verzenden.",
        video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/758670317?h=7c50d91deb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sunday Wardrobe&amp;trade;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
    },
    {
        usp: 'worldclass-service',
        body: "Persoonlijk contact, begeleiding tijdens het hele proces en duidelijke communicatie is waar Sunday garant voor staat. Wij denken mee met de klant en helpen hem bij het kiezen van het perfecte product, de afwerkingsmogelijkheden en hoe de kleding het beste ingezet kan worden om een maximale ROI te behalen.",
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
        headline: 'Met 10 nieuwe aanwervingen per week, en dus 10 nieuwe mogelijke ambassadeurs, was het bedrijf  toe aan een sterke onboarding.',
        image: '/cases/deliverect/img/banner-2.jpg',
        logo: '/cases/deliverect/img/logo.png',
        body: 'Door de onboarding kits van hun werknemers te beheren, hielp Sunday een authentieke bedrijfscultuur te creëren.',
        url: '/nl-nl/cases/deliverect/'
    },
    {
        headline: "Ontdek waarom Televic koos voor business hemden volledig aangepast aan hun corporate branding.",
        image: '/cases/televic/img/banner2.jpg',
        logo: '/cases/televic/img/logo.png',
        body: "Terwijl andere bedrijven toekomstig talent proberen te imponeren met een balpen, wil Televic zich echt onderscheiden met hun branded kleding.",
        url: '/nl-nl/cases/televic/',
    },
    {
        headline: "Hoe werknemers bedanken voor hun inspanningen en een erkenningsbeleid uitbouwen.",
        image: '/cases/ion/img/ion.jpg',
        logo: '/cases/ion/img/logo.svg',
        body: 'ION weet hoe ze een team moeten motiveren #actION alsjeblieft!',
        url: '/nl-nl/cases/ion/',
    },
    {
        headline: "Bedrijfswaarden en -visie door werknemers laten uitdragen.",
        image: '/nl-nl/cases/oaky/img/banner-2.jpg',
        logo: '/nl-nl/cases/oaky/img/logo.svg',
        body: 'Hoe merchandise wordt ingezet voor employer branding en nog 4 andere bedrijfsuitdagingen.',
        url: '/nl-nl/cases/oaky/',
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
        $(buttonHolder).attr('href', `${beachheads[0].url}`);
    } else if (selectedContent === 'employer-branding') {
        $(headlineHolder).text(`${beachheads[1].headline}`);
        $(imageHolder).attr('src', `${beachheads[1].image}`);
        $(logoHolder).attr('src', `${beachheads[1].logo}`);
        $(bodyHolder).text(`${beachheads[1].body}`);
        $(buttonHolder).attr('href', `${beachheads[1].url}`);
    } else if (selectedContent === 'retention') {
        $(headlineHolder).text(`${beachheads[2].headline}`);
        $(imageHolder).attr('src', `${beachheads[2].image}`);
        $(logoHolder).attr('src', `${beachheads[2].logo}`);
        $(bodyHolder).text(`${beachheads[2].body}`);
        $(buttonHolder).attr('href', `${beachheads[2].url}`);
    } else if (selectedContent === 'awareness') {
        $(headlineHolder).text(`${beachheads[3].headline}`);
        $(imageHolder).attr('src', `${beachheads[3].image}`);
        $(logoHolder).attr('src', `${beachheads[3].logo}`);
        $(bodyHolder).text(`${beachheads[3].body}`);
        $(buttonHolder).attr('href', `${beachheads[3].url}`);
    } else if (selectedContent === 'fairs') {
        $(headlineHolder).text(`${beachheads[4].headline}`);
        $(imageHolder).attr('src', `${beachheads[4].image}`);
        $(logoHolder).attr('src', `${beachheads[4].logo}`);
        $(bodyHolder).text(`${beachheads[4].body}`);
        $(buttonHolder).attr('href', `${beachheads[4].url}`);
    };
};


$('.usp-toggle').click(toggleUSP);
$('.beachhead-btn').click(toggleBeachhead);