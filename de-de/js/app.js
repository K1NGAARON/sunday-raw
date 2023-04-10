import {Splide} from '@splidejs/splide';
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";

function stickyMenu(e) {
    const header = $('.header');
    const logo = $('.header .logo');

    const exclude = document.querySelector('.product-header');

    if (!exclude) {
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
        $(this).parent().removeClass('active');
    } else {
        $('.dropdown-btn').parent().removeClass('active');
        $(this).parent().addClass('active');
    }
};

$('.dropdown-btn').click(toggleMenuDropdown);

function closeAccordion(e) {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus');
    $('.accordion-head').children('.icon').children('i').addClass('fa-plus');

};

$('.accordion-item').click(function () {
    closeAccordion();

    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');

    $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus');
    $(this).children('.accordion-head').children('.icon').children('i').addClass('fa-minus');
});


// LOGO SECTION
const logoTarget = document.querySelector('#logoHolder');
const logosArray = [
    {
        client: 'Adyen',
        img: '/nl-nl/img/logos/adyen-logo.svg',
    },
    {
        client: 'Biller',
        img: '/nl-nl/img/logos/biller-logo.svg',
    },
    {
        client: 'Bol.com',
        img: '/nl-nl/img/logos/bol-logo.svg',
    },
    {
        client: 'Booking.com',
        img: '/nl-nl/img/logos/booking-logo.svg',
    },
    {
        client: 'Bullhorn',
        img: '/nl-nl/img/logos/bullhorn-logo.svg',
    },
    {
        client: 'Equans',
        img: '/nl-nl/img/logos/equans-logo.svg',
    },
    {
        client: 'Friss',
        img: '/nl-nl/img/logos/friss-logo.svg',
    },
    {
        client: 'Fruitmasters',
        img: '/nl-nl/img/logos/fruitmasters-logo.jpg',
    },
    {
        client: 'Getinge',
        img: '/nl-nl/img/logos/getinge-logo.svg',
    },
    {
        client: 'Goodhabitz',
        img: '/nl-nl/img/logos/goodhabitz-logo.svg',
    },
    {
        client: 'Hoyng',
        img: '/nl-nl/img/logos/hoyng-logo.svg',
    },
    {
        client: 'io',
        img: '/nl-nl/img/logos/io-logo.svg',
    },
    {
        client: 'Legerdesheils',
        img: '/nl-nl/img/logos/legerdesheils-logo.svg',
    },
    {
        client: 'Lekkerboats',
        img: '/nl-nl/img/logos/lekkerboats-logo.svg',
    },
    {
        client: 'Moersleutel',
        img: '/nl-nl/img/logos/moersleutel-logo.svg',
    },
    {
        client: 'Newland',
        img: '/nl-nl/img/logos/newland-logo.svg',
    },
    {
        client: 'New York Pizza',
        img: '/nl-nl/img/logos/newyorkpizza-logo.svg',
    },
    {
        client: 'Nobel',
        img: '/nl-nl/img/logos/nobel-logo.svg',
    },
    {
        client: 'Northwave',
        img: '/nl-nl/img/logos/northwave-logo.svg',
    },
    {
        client: '/nl-nl/img/logos/oaky-logo.svg',
        img: '/nl-nl/img/logos/oaky-logo.svg',
    },
    {
        client: 'Recruitnow',
        img: '/nl-nl/img/logos/recruitnow-logo.svg',
    },
    {
        client: 'Remia',
        img: '/nl-nl/img/logos/remia-logo.svg',
    },
    {
        client: 'Rijksdienst',
        img: '/nl-nl/img/logos/rijksdienst-logo.svg',
    },
    {
        client: 'Rituals',
        img: '/nl-nl/img/logos/rituals-logo.svg',
    },
    {
        client: 'See Tickets',
        img: '/nl-nl/img/logos/seetickets-logo.svg',
    },
    {
        client: 'Top Desk',
        img: '/nl-nl/img/logos/topdesk-logo.svg',
    },
    {
        client: 'Trend',
        img: '/nl-nl/img/logos/trend-logo.svg',
    },
    {
        client: 'Videoland',
        img: '/nl-nl/img/logos/videoland-logo.svg',
    },
    {
        client: 'Visma',
        img: '/nl-nl/img/logos/visma-logo.svg',
    },
    {
        client: 'Wild',
        img: '/nl-nl/img/logos/wild-logo.svg',
    },
    {
        client: 'Young Capital',
        img: '/nl-nl/img/logos/youngcapital-logo.svg',
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