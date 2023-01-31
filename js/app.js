import {Splide} from '@splidejs/splide';
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";

function stickyMenu(e) {
    const header = $('.header');
    const logo = $('.header .logo');

    const exclude = document.querySelector('.product-header');
    console.log(exclude);

    if (!exclude) {
        console.log('exclude')
        if ($(this).scrollTop() > header.height()) {
            $(logo).attr("src", "/branding/logo-black.svg");
            header.addClass('active');
        } else {
            $(logo).attr("src", "/branding/logo-white.svg");
            header.removeClass('active');
        };
    } else {
        if ($(this).scrollTop() > header.height()) {
            $(logo).attr("src", "/branding/logo-black.svg");
            header.addClass('active');
        } else {
            $(logo).attr("src", "/branding/logo-black.svg");
            header.removeClass('active');
        };
    }
};

$(document).scroll(stickyMenu);

$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

function closeAccordion(e) {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
};

$('.accordion-item').click(function () {
    closeAccordion();

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
        img: '/img/logos/airbnb-logo.svg',
    },
    {
        client: 'Deloitte Logo',
        img: '/img/logos/deloitte-logo.svg',
    },
    {
        client: 'Google Logo',
        img: '/img/logos/google-logo.svg',
    },
    {
        client: 'Hubspot Logo',
        img: '/img/logos/hubspot-logo.svg',
    },
    {
        client: 'Mastercard Logo',
        img: '/img/logos/mastercard-logo.svg',
    },
    {
        client: 'TikTok Logo',
        img: '/img/logos/tiktok-logo.svg',
    },
    {
        client: 'Zalando Logo',
        img: '/img/logos/zalando-logo.svg',
    },
    {
        client: 'Adyen',
        img: '/img/logos/adyen-logo.svg',
    },
    {
        client: 'AirBnb',
        img: '/img/logos/airbnb-logo.svg',
    },
    {
        client: 'Deloitte Logo',
        img: '/img/logos/deloitte-logo.svg',
    },
    {
        client: 'Google Logo',
        img: '/img/logos/google-logo.svg',
    },
    {
        client: 'Hubspot Logo',
        img: '/img/logos/hubspot-logo.svg',
    },
    {
        client: 'Mastercard Logo',
        img: '/img/logos/mastercard-logo.svg',
    },
    {
        client: 'TikTok Logo',
        img: '/img/logos/tiktok-logo.svg',
    },
    {
        client: 'Zalando Logo',
        img: '/img/logos/zalando-logo.svg',
    },
];

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};

function createLogos() {
    if (logoTarget) {
        shuffleArray(logosArray);
        const splideTrackElement = document.createElement('div');
        splideTrackElement.classList.add('splide__track');

        const listElement = document.createElement('div');
        listElement.classList.add('splide__list');
        for (let i = 0; i < logosArray.length; i++) {
            const template = document.createElement('div');
            template.classList.add('item', 'splide__slide');

            const logoElement = document.createElement('img');
            logoElement.src = logosArray[i].img;
            logoElement.alt = logosArray[i].client;
            template.appendChild(logoElement);

            listElement.appendChild(template);
            // logoTarget.insertAdjacentHTML("beforeend", template);
        }

        splideTrackElement.appendChild(listElement);
        logoTarget.appendChild(splideTrackElement);

        const splide = new Splide('#logoHolder', {
            arrows: false,
            drag: 'free',
            gap: '180px',
            height: '100px',
            loop: true,
            pagination: false,
            type: 'loop',
            autoScroll: {
                speed: 1,
            },
        });
        splide.mount({ AutoScroll });
    }
}

$(document).ready(createLogos);