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
        headline: '',
        image: '',
        logo: '',
        body: '',
        url: ''
    }
];

function toggleBeachhead(e) {
    let headlineHolder = document.querySelector('#headlineHolder');
    let imageHolder = document.querySelector('#imageHolder');
    let logoHolder = document.querySelector('#logoHolder');
    let bodyHolder = document.querySelector('#bodyHolder');
    let buttonHolder = document.querySelector('#caseBtn');
    
    $('.beachhead-btn').removeClass('active');
    $(this).addClass('active');





}


$('.usp-toggle').click(toggleUSP);
$('.beachhead-btn').click(toggleBeachhead);