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
        client: 'Babbel',
        img: '/de-de/img/logos/babbel-logo.svg',
    },
    {
        client: 'DFV',
        img: '/de-de/img/logos/dfv-logo.svg',
    },
    {
        client: 'Laika',
        img: '/de-de/img/logos/laika-logo.svg',
    },
    {
        client: 'Neodyme',
        img: '/de-de/img/logos/neodyme-logo.svg',
    },
    {
        client: 'Neptune',
        img: '/de-de/img/logos/neptune-logo.svg',
    },
    {
        client: 'Taxfix',
        img: '/de-de/img/logos/taxfix-logo.svg',
    },
    {
        client: 'Uberall',
        img: '/de-de/img/logos/uberall-logo.svg',
    },
    {
        client: 'Zalando',
        img: '/de-de/img/logos/zalando-logo.svg',
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