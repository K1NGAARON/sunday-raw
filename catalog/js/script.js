function showProduct(e) {
    $('.product-image').removeClass('active');
    $(this).addClass('active');

    let activeProduct = document.querySelector('.product-image.active');
    let activeProductSRC = activeProduct.src;

    let mainImage = document.querySelector('#main-image');
    console.log(mainImage);

    $(mainImage).attr('src', activeProductSRC);
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

function changeSteps(e) {
    let stepsBody = document.querySelector('#stepsBody');
    let stepsIMG = document.querySelector('#stepsIMG');

    let activeStep = e.target.id;

    $('.step').removeClass('active');
    $(this).addClass('active');

    if (activeStep === 'company-branding') {
        $(stepsBody).text(`${stepsContent[0].body}`)
        $(stepsIMG).attr('src', `${stepsContent[0].img}`);
    } else if (activeStep === 'market-trends') {
        $(stepsBody).text(`${stepsContent[1].body}`)
        $(stepsIMG).attr('src', `${stepsContent[1].img}`);
    } else if (activeStep === 'target-audience') {
        $(stepsBody).text(`${stepsContent[2].body}`)
        $(stepsIMG).attr('src', `${stepsContent[2].img}`);
    } else if (activeStep === 'project-goal') {
        $(stepsBody).text(`${stepsContent[3].body}`)
        $(stepsIMG).attr('src', `${stepsContent[3].img}`);
    }
};

const socialProofTarget = document.querySelector('#social-proof');
const socialProofContent = [
    {
        logo: '/img/logos/adyen-logo.svg',
        body: `
                Geen zin om jouw werknemers of zakenrelaties dit jaar een doos pralines, een fles cava of een drinkbus cadeau te doen? Kom dit jaar dan origineel uit de hoek met de Streamz Gift Box en geef jouw werknemers een cadeau dat echt entertaint.
                <br><br>
                Onze Box heeft het allemaal:
                <br>
                ✔️ 1 maand Vlaamse en internationale topseries kijken
                <br>
                ✔️ Ideale binge snacks & drinks van bij onz
                <br>
                ✔️ Comfy, stijlvolle kousen om je voeten warm te houden
                <br><br>
                Een complete entertainmentervaring die je graag cadeau wil doen? Haast je dan naar https://lnkd.in/dYuwH9U5
                <br><br>
                Let’s get the Streamz party poppin’! 🥳 
            `,
        img: 'https://via.placeholder.com/1200x800'
    },
    {
        logo: '/img/logos/adyen-logo.svg',
        body: `
                Geen zin om jouw werknemers of zakenrelaties dit jaar een doos pralines, een fles cava of een drinkbus cadeau te doen? Kom dit jaar dan origineel uit de hoek met de Streamz Gift Box en geef jouw werknemers een cadeau dat echt entertaint.
                <br><br>
                Onze Box heeft het allemaal:
                <br>
                ✔️ 1 maand Vlaamse en internationale topseries kijken
                <br>
                ✔️ Ideale binge snacks & drinks van bij onz
                <br>
                ✔️ Comfy, stijlvolle kousen om je voeten warm te houden
                <br><br>
                Een complete entertainmentervaring die je graag cadeau wil doen? Haast je dan naar https://lnkd.in/dYuwH9U5
                <br><br>
                Let’s get the Streamz party poppin’! 🥳 
            `,
        img: 'https://via.placeholder.com/1200x800'
    },
    {
        logo: '/img/logos/adyen-logo.svg',
        body: `
                Geen zin om jouw werknemers of zakenrelaties dit jaar een doos pralines, een fles cava of een drinkbus cadeau te doen? Kom dit jaar dan origineel uit de hoek met de Streamz Gift Box en geef jouw werknemers een cadeau dat echt entertaint.
                <br><br>
                Onze Box heeft het allemaal:
                <br>
                ✔️ 1 maand Vlaamse en internationale topseries kijken
                <br>
                ✔️ Ideale binge snacks & drinks van bij onz
                <br>
                ✔️ Comfy, stijlvolle kousen om je voeten warm te houden
                <br><br>
                Een complete entertainmentervaring die je graag cadeau wil doen? Haast je dan naar https://lnkd.in/dYuwH9U5
                <br><br>
                Let’s get the Streamz party poppin’! 🥳 
            `,
        img: 'https://via.placeholder.com/1200x800'
    }
];

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};

function createSocialProof() {
    if (socialProofTarget) {
        shuffleArray(socialProofContent);

        for (let i = 0; i < socialProofContent.length; i++) {
            const template = `
                <div class="card">
                    <img class="logo" src="${socialProofContent[i].logo}" alt="">
                    <p>
                        ${socialProofContent[i].body}
                    </p>
                    <img class="featured" src="${socialProofContent[i].img}">
                </div>
            `;
            socialProofTarget.insertAdjacentHTML("beforeend", template);
        };
    }
};

// Get the modal
let modal = document.getElementById("myModal");
let modalBtn = document.getElementById("sampleBtn");
let span = document.getElementById("closeModal");

// When the user clicks on the button, open the modal
modalBtn.addEventListener('click', function() {
    modal.style.display = "block";
});

span.addEventListener('click', function(e) {
    modal.style.display = "none";
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
      }
});

$(document).ready(createSocialProof);
$('.step').click(changeSteps);
$('.product-image').click(showProduct);