const usp = [
    {
        usp: 'unique-design',
        body: "Our custom designs are unique in the market: We always start from the customer's brand guidelines (logo, Pantone colors, brand vision, …). Then we help think about the objective of the clothing and who will wear it. That way, the design team can work out an appropriate custom design in a much more focused way. The team also constantly follows the latest fashion trends, which ensures that we can develop contemporary and modern concepts that will be worn with pride.",
        img: '',
    },
    {
        usp: 'ship-worldwide',
        body: "SWe noticed that many of our customers love doing creative campaigns using awesome clothing, but they hate the hassle. That’s why we started working on a solution. Sunday Wardrobe™ is our SaaS-solution, making it super easy for companies to warehouse, handle and ship clothing to key stakeholders.",
        img: '',
    },
    {
        usp: 'worldclass-service',
        body: "Personal contact, guidance throughout the process and clear communication is what Sunday guarantees. We think along with the client and help advise on the right product, finishing options and how best to use the clothing to achieve maximum ROI.",
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
        headline: 'With 10 new hires every week, and so 10 new possible ambassadors, they were in need of a proper onboarding.',
        image: '/cases/deliverect/img/banner.jpg',
        logo: '/cases/deliverect/logo.png',
        body: 'Deliverect, the ‘Adyen of food delivery services’ grew 750% in the last year. A boost that also sent the number of employees skyrocketing.',
        url: '/cases/deliverect/'
    },
    {
        headline: "How to Increase ambassador marketing by organising a sports event?",
        image: '/cases/stadsbader/img/banner.jpg',
        logo: '/cases/stadsbader/img/logo.png',
        body: 'By rewarding the participants with unique branded apparel, we motivated real ambassadors who in their place activate silent ambassadors.',
        url: '/cases/stadsbader/',
    },
    {
        headline: "Thanking employees for their efforts and building an employee recognition policy.",
        image: '/cases/ion/img/banner.jpeg',
        logo: '/cases/ion/img/logo.svg',
        body: 'ION knows how to motivate a team: #actION please!',
        url: '/cases/ion/',
    },
    {
        headline: "Learn more about workplace health",
        image: '/cases/showpad/img/banner.jpeg',
        logo: '/cases/showpad/img/logo.png',
        body: 'Showing off Showpad’s custom made solution to create workplace health by deploying branded sportswear.',
        url: '/cases/showpad/',
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