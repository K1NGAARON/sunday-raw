function toggleGender(e) {
    $('.gender-toggle .toggle').removeClass('active');
    $(this).addClass('active');
}

function calculateSizes(e) {    
    let activeGender = $('.gender-toggle .toggle.active').attr('id');
    let totalPieces = document.querySelector('#input-field').value;

    const sizeBreakdown = [
        {
            size: 'XS',
            breakdownMale: '0',
            breakdownFemale: '5.064145847',
            breakdownSmallMOQ: '0',
        },
        {
            size: 'S',
            breakdownMale: '17.0508965363626',
            breakdownFemale: '25.86090479',
            breakdownSmallMOQ: '11',
        },
        {
            size: 'M',
            breakdownMale: '29.8864016037421',
            breakdownFemale: '29.91222147',
            breakdownSmallMOQ: '26',
        },
        {
            size: 'L',
            breakdownMale: '29.8864016037421',
            breakdownFemale: '19.88521269',
            breakdownSmallMOQ: '26',
        },
        {
            size: 'XL',
            breakdownMale: '17.0508965363626',
            breakdownFemale: '11.3436867',
            breakdownSmallMOQ: '26',
        },
        {
            size: '2XL',
            breakdownMale: '6.1254037197906',
            breakdownFemale: '7.933828494',
            breakdownSmallMOQ: '11',
        },
    ];

    if (activeGender === 'unisex' || activeGender === 'male') {
        sizeXS = $('#xs').text(Math.trunc((totalPieces * sizeBreakdown[0].breakdownMale) / 100));
        sizeS = $('#s').text(Math.trunc((totalPieces * sizeBreakdown[1].breakdownMale) / 100));
        sizeM = $('#m').text(Math.trunc((totalPieces * sizeBreakdown[2].breakdownMale) / 100));
        sizeL = $('#l').text(Math.trunc((totalPieces * sizeBreakdown[3].breakdownMale) / 100));
        sizeXL = $('#xl').text(Math.trunc((totalPieces * sizeBreakdown[4].breakdownMale) / 100));
        size2XL = $('#2xl').text(Math.trunc((totalPieces * sizeBreakdown[5].breakdownMale) / 100));

    } else if (activeGender === 'female') {
        sizeXS = $('#xs').text(Math.trunc((totalPieces * sizeBreakdown[0].breakdownFemale) / 100));
        sizeS = $('#s').text(Math.trunc((totalPieces * sizeBreakdown[1].breakdownFemale) / 100));
        sizeM = $('#m').text(Math.trunc((totalPieces * sizeBreakdown[2].breakdownFemale) / 100));
        sizeL = $('#l').text(Math.trunc((totalPieces * sizeBreakdown[3].breakdownFemale) / 100));
        sizeXL = $('#xl').text(Math.trunc((totalPieces * sizeBreakdown[4].breakdownFemale) / 100));
        size2XL = $('#2xl').text(Math.trunc((totalPieces * sizeBreakdown[5].breakdownFemale) / 100));
    }
}

$('.gender-toggle .toggle').click(toggleGender);
$('#input-field').change(calculateSizes);