function showProduct(e) {
    $('.product-image').removeClass('active');
    $(this).addClass('active');

    let activeProduct = document.querySelector('.product-image.active');
    let activeProductSRC = activeProduct.src;

    let mainImage = document.querySelector('#main-image');
    console.log(mainImage);

    $(mainImage).attr('src', activeProductSRC);
};

function changeSteps(e) {
    let activeStep = e.target.id;

    $('.step').removeClass('active');
    $(this).addClass('active');

    if (activeStep === 'company-branding') {
        
    } else if (activeStep === 'market-trends') {

    } else if (activeStep === 'target-audience') {
        
    } else if (activeStep === 'project-goal') {

    }
};

const stepsContent = [
    {
        title: "Brand guidelines",
        body: "The first step before anything gets designed is having a look at your brand guidelines. Logo, colors, typography, … everything that makes you unique.",
        img: '',
    },
    {
        title: "Fashion trends",
        body: "Our design department follows up on fashion trends and translates them in wearable designs that match your brand identity. That way we create clothing that is on-brand and on-trend.",
        img: '',
    },
    {
        title: "Target audience",
        body: "Depending on the target audience, the design and fit of the clothing will be different. We want the people who receive your clothes to become real ambassadors of your brand and that they can wear it as often as possible. This will only work if we match the product, design and fitting to your target audience.",
        img: '',
    },
    {
        title: "Clothing purpose",
        body: "What would you like to reach with this collection? From brand awareness to getting your team adopt a more healthy lifestyle, we guide you through the best products and materials.",
        img: '',
    },
];

$('.step').click(changeSteps);
$('.product-image').click(showProduct);