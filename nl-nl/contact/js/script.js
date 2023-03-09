const offices = [
    {
        country: 'België',
        city: 'Roeselare',
        flag: './img/flag/be-flag.png',
        location: 'Hof Ter Weze 5',
        postal: '8800 Roeselare',
        img: './img/offices/roeselare.jpg'
    },
    {
        country: 'Nederland',
        city: 'Amsterdam',
        flag: './img/flag/nl-flag.png',
        location: 'Joop Geesinkweg 641',
        postal: '1114 AB Amsterdam',
        img: './img/offices/amsterdam.jpg'
    },
    {
        country: 'Duitsland',
        city: 'Berlijn',
        flag: './img/flag/de-flag.png',
        location: 'Lohmühlenstraße 65',
        postal: '12435 Berlin',
        img: './img/offices/berlin-office.jpg'
    },
    {
        country: 'Polen',
        city: 'Łódź',
        flag: './img/flag/pl-flag.png',
        location: 'ul. Gdańska 126/128',
        postal: '90-520 Łódź',
        img: './img/offices/lodz.jpg'
    },
    {
        country: 'Ierland',
        city: 'Dublin',
        flag: './img/flag/ie-flag.png',
        location: 'Custom House Quay',
        postal: 'CHQ Dublin',
        img: './img/offices/dublin.jpg'
    },
    {
        country: 'Verenigd Koninkrijk',
        city: 'Londen',
        flag: './img/flag/uk-flag.png',
        location: 'BLCC Club Quarters, 8 Northumberland Avenue',
        postal: 'London WC2N 5BY',
        img: './img/offices/london.jpg'
    }
];

function filterOffice(e) {
    $('.office').removeClass('active');
    $(this).addClass('active');
    let selectedOffice = document.querySelector('.office.active').id;
    
    let imageHolder = document.querySelector('#officeIMGHolder');
    let flagHolder = document.querySelector('#flag');
    let countryHolder = document.querySelector('#country');
    let addressHolder = document.querySelector('#location');
    let postalHolder = document.querySelector('#postal');
        
    if (selectedOffice === 'roeselare') {
        $(imageHolder).attr('src', `${offices[0].img}`);
        $(flagHolder).attr('src', `${offices[0].flag}`);
        $(countryHolder).text(`${offices[0].country}`);
        $(addressHolder).text(`${offices[0].location}`);
        $(postalHolder).text(`${offices[0].postal}`);
    } else if (selectedOffice === 'amsterdam') {
        $(imageHolder).attr('src', `${offices[1].img}`);
        $(flagHolder).attr('src', `${offices[1].flag}`);
        $(countryHolder).text(`${offices[1].country}`);
        $(addressHolder).text(`${offices[1].location}`);
        $(postalHolder).text(`${offices[1].postal}`);
    } else if (selectedOffice === 'dublin') {
        $(imageHolder).attr('src', `${offices[4].img}`);
        $(flagHolder).attr('src', `${offices[4].flag}`);
        $(countryHolder).text(`${offices[4].country}`);
        $(addressHolder).text(`${offices[4].location}`);
        $(postalHolder).text(`${offices[4].postal}`);
    } else if (selectedOffice === 'london') {
        $(imageHolder).attr('src', `${offices[5].img}`);
        $(flagHolder).attr('src', `${offices[5].flag}`);
        $(countryHolder).text(`${offices[5].country}`);
        $(addressHolder).text(`${offices[5].location}`);
        $(postalHolder).text(`${offices[5].postal}`);
    } else if (selectedOffice === 'berlin') {
        $(imageHolder).attr('src', `${offices[2].img}`);
        $(flagHolder).attr('src', `${offices[2].flag}`);
        $(countryHolder).text(`${offices[2].country}`);
        $(addressHolder).text(`${offices[2].location}`);
        $(postalHolder).text(`${offices[2].postal}`);
    } else if (selectedOffice === 'lodz') {
        $(imageHolder).attr('src', `${offices[3].img}`);
        $(flagHolder).attr('src', `${offices[3].flag}`);
        $(countryHolder).text(`${offices[3].country}`);
        $(addressHolder).text(`${offices[3].location}`);
        $(postalHolder).text(`${offices[3].postal}`);
    }
};

$('.office').click(filterOffice);