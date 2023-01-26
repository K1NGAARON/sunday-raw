const products = [
    {
        img: '',
    },
    {
        img: '',
    },
    {
        img: '',
    },
    {
        img: '',
    },
]

// function selectActiveProduct(e) {
//     $('.product-image').removeClass('active');
//     $(this).addClass('active');
// };

function showProduct(e) {
    $('.product-image').removeClass('active');
    $(this).addClass('active');

    let activeProduct = document.querySelector('.product-image.active');
    let activeProductSRC = activeProduct.src;


    console.log(activeProduct);
    console.log(activeProductSRC);

    let mainImage = document.querySelector('#main-image');
    console.log(mainImage);

    $(mainImage).attr('src', activeProductSRC);
};

$('.product-image').click(showProduct);