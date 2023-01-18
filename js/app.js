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