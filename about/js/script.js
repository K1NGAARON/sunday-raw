function readMore(e) {
    const readMore = document.querySelector('#read-more');
    const hiddenBody = document.querySelector('#hiddenBody');

    $(hiddenBody).removeClass('hidden');
};

const services = [
    {
        title: 'Design',
        body: '',
        img: ''
    },
    {
        title: 'Production',
        body: '',
        img: ''
    },
    {
        title: 'Global Shipping',
        body: '',
        img: ''
    },
    {
        title: 'Service',
        body: '',
        img: ''
    },
];

function resetServices(e) {
    $('.service-btn').removeClass('active');
};

function showService(e) {
    let activeService = e.target.id;

    resetServices();

    const title = document.querySelector('#serviceTitle');
    const body = document.querySelector('#serviceBody');
    const img = document.querySelector('#serviceIMG');

    if (activeService === 'design') {

    } else if (activeService === 'production') {

    } else if (activeService === 'shipping') {

    } else if (activeService === 'service') {

    };

    
};

