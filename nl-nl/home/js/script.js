const usp = [
    {
        usp: 'unique-design',
        body: "Onze ontwerpen op maat zijn uniek in de markt: We vertrekken altijd vanuit de merkrichtlijnen van de klant (logo, Pantone-kleuren, merkvisie, ...). Vervolgens denken we mee over het doel van de kleding en wie het zal dragen. Op die manier kan het ontwerpteam veel gerichter een passend ontwerp op maat uitwerken. Het team volgt ook voortdurend de laatste modetrends, wat ervoor zorgt dat we eigentijdse en moderne concepten kunnen ontwikkelen die met trots gedragen zullen worden.",
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
        headline: 'With 10 new hires every week, they were in need of a proper onboarding.',
        image: '/cases/deliverect/img/banner-2.jpg',
        logo: '/cases/deliverect/img/logo.png',
        body: 'Deliverect, the all-in-one solution for restaurants to grow their online presence, grew 750% in the last year.',
        url: '/cases/deliverect/'
    },
    {
        headline: "Personalised sports shirts as a tool in the war for talent",
        image: '/cases/stadsbader/img/banner-2.jpg',
        logo: '/cases/stadsbader/img/logo.png',
        body: "How to find the perfect new employees? Organise an event and let your current employees be the best ambassadors.",
        url: '/cases/stadsbader/',
    },
    {
        headline: "Thanking employees for their efforts and building an employee recognition policy.",
        image: '/cases/ion/img/ion.jpg',
        logo: '/cases/ion/img/logo.svg',
        body: 'ION knows how to motivate a team: #actION please!',
        url: '/cases/ion/',
    },
    {
        headline: "Make your brand stand out by letting your employees be your best brand ambassadors.",
        image: '/cases/imens/img/banner2.jpg',
        logo: '/cases/imens/img/logo.png',
        body: 'Personalized wearables create visibility but it also boosts the team feeling.',
        url: '/cases/imens/',
    },
    {
        headline: "Find out why Televic opted for business shirts fully adapted to their corporate branding.",
        image: "/cases/televic/img/banner-home.jpg",
        logo: "/cases/televic/img/logo.png",
        body: "With other companies trying to impress future talents with a pen, Televic really wants to stand out from the crowd with their company fashion.",
        url: "/cases/televic/"
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