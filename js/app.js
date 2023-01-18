$(document).scroll(function () {
    const header = $('.header');
    const logo = $('.logo');

    if ($(this).scrollTop() > header.height()) {
        header.addClass('active');
        $(logo).attr("src","/branding/logo-black.svg");
    } else {
        header.removeClass('active');
        $(logo).attr("src","/branding/logo-white.svg");
    }
});


$(window).scroll(function() {
    const scale = document.querySelector('#scale');
    console.log(scale);

    if (scale) {
        let mass = Math.min(20, 1+0.005*$(this).scrollTop());
        console.log(mass);

        $('#scale').css('transform', 'scale(' + mass + ')');
    }


});
