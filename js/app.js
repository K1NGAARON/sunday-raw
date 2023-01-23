$(document).scroll(function () {
    const header = $('.header');
    const logo = $('.header .logo');

    if ($(this).scrollTop() > header.height()) {
        $(logo).attr("src","/branding/logo-black.svg");
        header.addClass('active');
    } else {
        $(logo).attr("src","/branding/logo-white.svg");
        header.removeClass('active');
    }
});

$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

$('.accordion-item').click(function() {
    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');
});


// LOGO SECTION
const logoTarget = document.querySelector('#logoHolder');
const logosArray = [
    {
        client: 'Adyen',
        img: '/img/logos/adyen-logo.svg',
    },
    {
        client: 'AirBnb',
        img: './img/logos/airbnb-logo.svg',
    },
    {
        client: 'Deloitte Logo',
        img: './img/logos/deloitte-logo.svg',
    },
    {
        client: 'Google Logo',
        img: './img/logos/google-logo.svg',
    },
    {
        client: 'Hubspot Logo',
        img: './img/logos/hubspot-logo.svg',
    },
    {
        client: 'Mastercard Logo',
        img: './img/logos/mastercard-logo.svg',
    },
    {
        client: 'TikTok Logo',
        img: './img/logos/tiktok-logo.svg',
    },
    {
        client: 'Zalando Logo',
        img: './img/logos/zalando-logo.svg',
    }
    // {
    //     client: '',
    //     img: '',
    // }
];

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffleArray(logosArray);
console.log(logosArray);

function createLogos() {
    for (let i = 0; i < logosArray.length; i++) {
        const template = `
            <div class="item">
                <img src="${logosArray[i].img}" alt="${logosArray[i].client}">
            </div>
        `;
        logoTarget.insertAdjacentHTML("beforeend", template);
    };
};


$(document).ready(createLogos);

// $(window).scroll(function() {
//     const scale = document.querySelector('#scale');
//     console.log(scale);

//     if (scale) {
//         let mass = Math.min(20, 1+0.005*$(this).scrollTop());
//         console.log(mass);

//         $('#scale').css('transform', 'scale(' + mass + ')');
//     }


// });
