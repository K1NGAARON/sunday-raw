const usp = [
    {
        usp: 'unique-design',
        body: "We noticed that many of our customers love doing creative campaigns using awesome clothing, but they hate the hassle. That's why we started working on a solution. The Sunday Wardrobe™ is our SaaS-solution, making it super easy for companies to warehouse, handle and ship clothing to key stakeholders.",
        img: '',
    },
    {
        usp: 'ship-worldwide',
        body: "Some body text for worldwide shipping",
        img: '',
    },
    {
        usp: 'worldclass-service',
        body: "Our very nice CSM team",
        img: '',
    }
];

function toggleUSP(e) {
    let imageHolder = document.querySelector('#usp-image');
    let bodyHolder = document.querySelector('#usp-body');
    let activeUSP = e.target.id;

    $('.usp-toggle').removeClass('active');
    $(this).addClass('active');

    if (activeUSP == 'unique-design') {
        bodyHolder.innerHTML = usp[0].body;
    } else if (activeUSP == 'ship-worldwide') {
        bodyHolder.innerHTML = usp[1].body;
    } else if (activeUSP == 'worldclass-service') {
        bodyHolder.innerHTML = usp[2].body;
    }
};

const beachheads = [
    {
        headline: 'High performance sportswear for delaware',
        image: '/cases/delaware/img/banner.jpg',
        logo: '/cases/delaware/img/logo.png',
        body: 'delaware is a global company that delivers advanced ICT solutions',
        url: '/cases/delaware/'
    }
];

function toggleBeachhead(e) {
    let headlineHolder = document.querySelector('#headlineHolder');
    let imageHolder = document.querySelector('#imageHolder');
    let logoHolder = document.querySelector('#beachheadLogo');
    let bodyHolder = document.querySelector('#bodyHolder');
    let buttonHolder = document.querySelector('#caseBtn');

    console.log(logoHolder);
    
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
    };



};


$('.usp-toggle').click(toggleUSP);
$('.beachhead-btn').click(toggleBeachhead);