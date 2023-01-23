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


// $(window).scroll(function() {
//     const scale = document.querySelector('#scale');
//     console.log(scale);

//     if (scale) {
//         let mass = Math.min(20, 1+0.005*$(this).scrollTop());
//         console.log(mass);

//         $('#scale').css('transform', 'scale(' + mass + ')');
//     }


// });
