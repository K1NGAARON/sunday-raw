function changeBannerImage(e) {
    const bannerImageHolder = document.querySelector('#banner-img');

    $('.dot').removeClass('active');
    $(this).addClass('active')

    if (e.target.id == 'image1') {
        bannerImageHolder.src = '/catalog/socks/img/banner/banner-2.jpg';
    } else if (e.target.id == 'image2') {
        bannerImageHolder.src = '/catalog/socks/img/banner/banner-1.jpg';
    } else if (e.target.id == 'image3') {
        bannerImageHolder.src = '/catalog/socks/img/banner/banner-3.jpg';
    }
};

$(document).ready(function() {
    $('.dot').click(changeBannerImage);
});