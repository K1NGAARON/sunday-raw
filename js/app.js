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


function toggleMenuDropdown(e) {
    if ($(this).parent().hasClass("active")) {
        console.log('has class')
        $(this).parent().removeClass('active');
    } else {
        $('.dropdown-btn').parent().removeClass('active');
        $(this).parent().addClass('active');
        console.log("doesnt have class")
    }
};

$('.dropdown-btn').click(toggleMenuDropdown);

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
        client: 'Croky Logo',
        img: '/img/logos/croky.svg',
    },
    {
        client: 'Delaware Logo',
        img: '/img/logos/delaware.svg',
    },
    {
        client: 'Duvel Logo',
        img: '/img/logos/duvel.svg',
    },
    {
        client: 'Getinge Logo',
        img: '/img/logos/getinge.svg',
    },
    {
        client: 'Gorillas Logo',
        img: '/img/logos/gorillas.svg',
    },
    {
        client: 'iO Logo',
        img: '/img/logos/io.svg',
    },
    {
        client: 'Johnnie Walker Logo',
        img: '/img/logos/johnniewalker.svg',
    },
    {
        client: 'Oaky Logo',
        img: '/img/logos/oaky.svg',
    },
    {
        client: 'Rituals Logo',
        img: '/img/logos/rituals.svg',
    },
    {
        client: 'Salesforce Logo',
        img: '/img/logos/salesforce.svg',
    },
    {
        client: 'Showpad Logo',
        img: '/img/logos/showpad.svg',
    },
    {
        client: 'Signpost Logo',
        img: '/img/logos/signpost.svg',
    },
    {
        client: 'SumUp Logo',
        img: '/img/logos/sumup.svg',
    },
    {
        client: 'Twillio Logo',
        img: '/img/logos/twillio.svg',
    },
    {
        client: 'Videoland Logo',
        img: '/img/logos/videoland.svg',
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
                speed: 0.2,
            },
        });
        splide.mount({ AutoScroll });
    }
}

$(document).ready(createLogos);