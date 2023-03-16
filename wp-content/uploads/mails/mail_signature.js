// noinspection SpellCheckingInspection

const selectPersonElement = $('[name="person"]');
const inputTelephoneElement = $('[name="telephone"]');
const hiddenParsedTelephoneElement = $('[name="parsed_telephone"]');
const generateSignatureButton = $('#generate-signature-button');
const copySignatureButton = $('#copy-signature-button');
const copyHtmlButton = $('#copy-html-button');

const employees = {
    'aaron.gerard': {
        name: 'Aaron Gerard',
        job_function: 'Growth Hacker',
        email_sunday: 'aaron.gerard@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 474 06 32 40',
        parsed_telephone: '0032474063240'
    },
    // 'agata.stepien' : {
    //     name : 'Agata Stępień',
    //     job_function : 'Project Manager',
    //     email_sunday : 'agata@teamsunday.com',
    //     department : 'ME_PL_WARSHAW',
    //     telephone : '+48 (0) 512 86 35 63',
    //     parsed_telephone : '0048512863563'
    // },
    'alex.van.nieuwenhuyse': {
        name: 'Alex Van Nieuwenhuyse',
        job_function: 'Account Executive',
        email_sunday: 'alex.van.nieuwenhuyse@teamsunday.com',
        department: 'ME_BE',
        // telephone : '+32 (0)',
        // parsed_telephone: '0032'
    },
    // 'alexis.kivu': {
    //     name: 'Alexis Kivu',
    //     job_function: 'Project Manager',
    //     email_sunday: 'alexis@teamsunday.com',
    //     department: 'ME_DE',
    //     telephone: '+49 (0) 173 69 12 589',
    //     parsed_telephone: '00491736912589'
    // },
    'amael.ramand': {
        name: 'Amaël Ramand',
        job_function: 'Sales Development Representative',
        email_sunday: 'amael.ramand@teamsunday.com',
        department: 'ME_DE',
        // telephone : '',
        // parsed_telephone: ''
    },
    'ana.bighiu': {
        name: 'Ana Bighiu',
        job_function: 'Sales Development Representative',
        email_sunday: 'ana.bighiu@teamsunday.com',
        department: 'ME_BE',
    },
    'anna.baffour': {
        name: 'Anna Baffour',
        job_function: 'Sales Development Coordinator',
        email_sunday: 'anna.baffour@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 471 91 68 30',
        parsed_telephone: '0032471916830'
    },
    'anna.kucharska': {
        name: 'Anna Kucharska',
        job_function: 'Graphic Designer',
        email_sunday: 'anna.kucharska@teamsunday.com',
        department: 'ME_PL_LODZ',
    },
    'annelien.decaestecker': {
        name: 'Annelien Decaestecker',
        job_function: 'Head of HR',
        email_sunday: 'annelien.decaestecker@teamsunday.com',
        department: 'ME_BE',
        // telephone : '+48 (0) 512 86 35 63',
        // parsed_telephone : '0048512863563'
    },
    'awet.tesfay': {
        name: 'Awet Tesfay',
        job_function: 'Developer',
        email_sunday: 'awet.tesfay@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 467 63 38 79',
        parsed_telephone: '0032467633879'
    },
    'bartel.samyn': {
        name: 'Bartel Samyn',
        job_function: 'Lead IT Developer',
        email_sunday: 'bartel.samyn@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 495 81 11 53',
        parsed_telephone: '0032495811153'
    },
    'basiel.sinnesael': {
        name: 'Basiel Sinnesael',
        job_function: 'Project Manager',
        email_sunday: 'basiel@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 471 10 55 84',
        parsed_telephone: '0032471105584'
    },
    // 'birgit.raes': {
    //     name: 'Birgit Raes',
    //     job_function: 'Sales Enablement Manager',
    //     email_sunday: 'birgit.raes@teamsunday.com',
    //     department: 'ME_BE',
    //     telephone: '+32 (0) 493 60 53 23',
    //     parsed_telephone: '0032493605323'
    // },
    'bram.beal': {
        name: 'Bram Beal',
        job_function: 'Account Executive',
        email_sunday: 'bram.beal@teamsunday.com',
        department: 'ME_UK',
    },
    'carlin.klein': {
        name: 'Carlin Klein',
        job_function: 'Account Executive',
        email_sunday: 'carlin@teamsunday.com',
        department: 'ME_NL',
        telephone: '',
        parsed_telephone: '',
    },
    'charlotte.degrande': {
        name: 'Charlotte Degrande',
        job_function: 'Recruiter',
        email_sunday: 'charlotte.degrande@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 497 04 84 62',
        parsed_telephone: '0032497048462'
    },
    'charlotte.vens': {
        name: 'Charlotte Vens',
        job_function: 'Sales Development Representative',
        email_sunday: 'charlotte.vens@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 471 85 03 90',
        parsed_telephone: '0032471850390'
    },
    'chiara.detavernier': {
        name: 'Chiara Detavernier',
        job_function: 'Receptionist',
        email_sunday: 'chiara.detavernier@teamsunday.com',
        department: 'ME_BE',
    },
    'clara.van.nieuwenhuyze': {
        name: 'Clara Van Nieuwenhuyze',
        job_function: 'Sales Development Representative',
        email_sunday: 'clara.van.nieuwenhuyze@teamsunday.com',
        department: 'ME_BE',
    },
    'daniel.wojcikowski': {
        name: 'Daniel Wojcikowski',
        job_function: 'Production Development Manager',
        email_sunday: 'daniel.wojcikowski@teamsunday.com',
        department: 'ME_PL_LODZ',
        telephone: '+48 (0) 512 82 53 25',
        parsed_telephone: '0048512825325',
    },
    'daan.dragt': {
        name: 'Daan Dragt',
        job_function: 'Account Executive',
        email_sunday: 'daan.dragt@teamsunday.com',
        department: 'ME_DE',
        telephone: '+49 (0) 176 43 21 83 46',
        parsed_telephone: '004917643218346',
    },
    'dorothee.hespeel': {
        name: 'Dorothée Hespeel',
        job_function: 'Marketing Project Manager',
        email_sunday: 'dorothee.hespeel@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 474 80 62 93',
        parsed_telephone: '0032474806293'
    },
    'eduardo.martinez': {
        name: 'Eduardo Martinez Mugica',
        job_function: 'Sales Development Representative',
        email_sunday: 'eduardo.martinez@teamsunday.com',
        department: 'ME_DE',
    },
    'elisa.vandendorpe': {
        name: 'Elisa Vandendorpe',
        job_function: 'Customer Success',
        email_sunday: 'elisa.vandendorpe@teamsunday.com',
        department: 'ME_BE'
    },
    'emma.van.waes': {
        name: 'Emma Van Waes',
        job_function: 'Sales Development Representative',
        email_sunday: 'emma.van.waes@teamsunday.com',
        department: 'ME_BE'
    },
    'eva.deveer': {
        name: 'Eva Deveer',
        job_function: 'Merchandise Strategist',
        email_sunday: 'eva.deveer@teamsunday.com',
        department: 'ME_NL',
        telephone: '+31 (0) 642 60 02 52',
        parsed_telephone: '0031642600252'
    },
    'ewelina.jastrzebska': {
        name: 'Ewelina Jastrzębska',
        job_function: 'Graphic Designer',
        email_sunday: 'ewelina.jastrzebska@teamsunday.com',
        department: 'ME_PL_LODZ'
    },
    'ezra.hoefsmit': {
        name: 'Ezra Hoefsmit',
        job_function: 'Account Executive',
        email_sunday: 'ezra.hoefsmit@teamsunday.com',
        department: 'ME_NL',
    },
    'fabienne.vermeersch': {
        name: 'Fabienne Vermeersch',
        job_function: 'F&A Officer',
        email_sunday: 'fabienne.vermeersch@teamsunday.com',
        department: 'ME_BE'
    },
    'goerkem.ercan': {
        name: 'Görkem Ercan',
        job_function: 'Account Executive',
        email_sunday: 'goerkem.ercan@teamsunday.com',
        department: 'ME_DE'
    },
    'gori.afolahan': {
        name: 'Gori Afolahan',
        job_function: 'Account Executive',
        email_sunday: 'gori.afolahan@teamsunday.com',
        department: 'ME_IE'
    },
    'iris.devos': {
        name: 'Iris Devos',
        job_function: 'Customer Success Manager',
        email_sunday: 'iris.devos@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 478 77 15 70',
        parsed_telephone: '0032478771570'
    },
    'iwona.borysiewicz': {
        name: 'Iwona Borysiewicz',
        job_function: 'Operations Specialist',
        email_sunday: 'iwona.borysiewicz@teamsunday.com',
        department: 'ME_PL_LODZ',
        telephone: '+48 (0) 512 79 20 92',
        parsed_telephone: '0048512792092'
    },
    'jenifer.graessler': {
        name: 'Jenifer Graessler',
        job_function: 'Sales Development Representative',
        email_sunday: 'jenifer.graessler@teamsunday.com',
        department: 'ME_DE',
        telephone: '+49 (0) 176 64 66 03 32',
        parsed_telephone: '004917664660332',
    },
    'jeroen.mullie': {
        name: 'Jeroen Mullie',
        job_function: 'Customer Success',
        email_sunday: 'jeroen.mullie@teamsunday.com',
        department: 'ME_BE',
    },
    'joanna.ostachnowicz': {
        name: 'Joanna Ostachnowicz',
        job_function: 'Production Manager',
        email_sunday: 'joanna.ostachnowicz@teamsunday.com',
        department: 'ME_PL_LODZ',
        telephone: '+48 (0) 512 75 28 52',
        parsed_telephone: '0048512752852'
    },
    'joeri.bredenhoff': {
        name: 'Joeri Bredenhoff',
        job_function: 'Sales Development Representative',
        email_sunday: 'joeri.bredenhoff@teamsunday.com',
        department: 'ME_NL',
    },
    'justyna.chmielak': {
        name: 'Justyna Chmielak',
        job_function: 'Operations Specialist',
        email_sunday: 'justyna.chmielak@teamsunday.com',
        department: 'ME_PL_LODZ',
        telephone: '+48 (0) 512 75 86 58',
        parsed_telephone: '0048512758658'
    },
    // 'karel-jan.vercruysse': {
    //     name: 'Karel-Jan Vercruysse',
    //     job_function: 'Commercial Manager',
    //     email_sunday: 'kj@teamsunday.com',
    //     department: 'ME_BE',
    //     telephone: '+32 (0) 472 96 51 32',
    //     parsed_telephone: '0032472965132'
    // },
    'laura.kraft': {
        name: 'Laura Kraft',
        job_function: 'Account Manager',
        email_sunday: 'laura.kraft@teamsunday.com',
        department: 'ME_DE'
    },
    'kevin.hartnett': {
        name: 'Kevin Hartnett',
        job_function: 'Account Executive',
        email_sunday: 'kevin.hartnett@teamsunday.com',
        department: 'ME_IE'
    },
    'louis.vandommele': {
        name: 'Louis Vandommele',
        job_function: 'Country Manager IE',
        email_sunday: 'louis.vandommele@teamsunday.com',
        department: 'ME_IE',
        telephone: '+32 (0) 495 19 84 45',
        parsed_telephone: '0032495198445'
    },
    'lukas.breughe': {
        name: 'Lukas Breughe',
        job_function: 'R&D Specialist',
        email_sunday: 'lukas.breughe@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 472 07 23 10',
        parsed_telephone: '0032472072310'
    },
    'magdalena.grzybek': {
        name: 'Magdalena Grzybek',
        job_function: 'Senior Accountant PL',
        email_sunday: 'magdalena.grzybek@teamsunday.com',
        department: 'ME_PL_LODZ',
        telephone: '+48 (0) 512 40 92 09',
        parsed_telephone: '0048512409209'
    },
    'marcin.grzybek': {
        name: 'Marcin Grzybek',
        job_function: 'Junior Operations Specialist',
        email_sunday: 'marcin@teamsunday.com',
        department: 'ME_PL_LODZ',
        telephone: '+48 (0) 512 40 92 09',
        parsed_telephone: '0048512409209',
    },
    'matthew.smith': {
        name: 'Matthew Smith',
        job_function: 'Account Executive',
        email_sunday: 'matthew.smith@teamsunday.com',
        department: 'ME_UK',
    },
    'max.pierik': {
        name: 'Max Pierik',
        job_function: 'Account Executive',
        email_sunday: 'max.pierik@teamsunday.com',
        department: 'ME_NL',
        telephone: '+31 (0) 634 39 06 15',
        parsed_telephone: '0031634390615',
    },
    'marieke.afschrift': {
        name: 'Marieke Afschrift',
        job_function: 'CFO',
        email_sunday: 'marieke.afschrift@teamsunday.com',
        department: 'ME_BE',
    },
    'mazelli.detavernier': {
        name: 'Mazelli Detavernier',
        job_function: 'Sales Manager',
        email_sunday: 'mazelli@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 478 26 82 50',
        parsed_telephone: '0032478268250'
    },
    'midas.streekstra': {
        name: 'Midas Streekstra',
        job_function: 'Country Manager NL',
        email_sunday: 'midas.streekstra@teamsunday.com',
        department: 'ME_NL',
        telephone: '+31 (0) 6 486 21 784',
        parsed_telephone: '0031648621784'
    },
    'monika.mazowiecka': {
        name: 'Monika Mazowiecka',
        job_function: 'F&A Officer',
        email_sunday: 'monika.mazowiecka@teamsunday.com',
        department: 'ME_PL_LODZ',
        telephone: '+48 (0) 512 85 89 58',
        parsed_telephone: '0048512858958'
    },
    'morgane.lemiengre': {
        name: 'Morgane Lemiengre',
        job_function: 'Content Creator',
        email_sunday: 'morgane.lemiengre@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 484 59 50 53',
        parsed_telephone: '0032484595053'
    },
    'neil.couhysder': {
        name: 'Neil Couhysder',
        job_function: 'Account Executive',
        email_sunday: 'neil.couhysder@teamsunday.com',
        department: 'ME_BE',
    },
    'nicola.neve': {
        name: 'Nicola Neve',
        job_function: 'Project Manager',
        email_sunday: 'nicola.neve@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 495 57 15 14',
        parsed_telephone: '0032495571514'
    },
    'niels.vandecasteele': {
        name: 'Niels Vandecasteele',
        job_function: 'Founder / CEO',
        email_sunday: 'niels.vandecasteele@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 496 70 25 43',
        parsed_telephone: '0032496702543'
    },
    'nils.wittevrongel': {
        name: 'Nils Wittevrongel',
        job_function: 'Art Director',
        email_sunday: 'nils.wittevrongel@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 498 52 92 84',
        parsed_telephone: '0032498529284'
    },
    'oksana.nijaradze': {
        name: 'Oksana Nijaradze',
        job_function: 'Purchase Specialist',
        email_sunday: 'oksana.nijaradze@teamsunday.com',
        department: 'ME_PL_LODZ',
    },
    'sam.bertrand': {
        name: 'Sam Bertrand',
        job_function: 'Account Executive',
        email_sunday: 'sam.bertrand@teamsunday.com',
        department: 'ME_BE',
    },
    'sebastiaan.maesen': {
        name: 'Sebastiaan Maesen',
        job_function: 'Country Manager DE',
        email_sunday: 'sebastiaan.maesen@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 494 25 66 35',
        parsed_telephone: '0032494256635'
    },
    'shay.curley': {
        name: 'Shay Curley',
        job_function: 'Sales Development Representative',
        email_sunday: 'shay.curley@teamsunday.com',
        department: 'ME_IE',
    },
    'sofie.snauwaert': {
        name: 'Sofie Snauwaert',
        job_function: 'Business Process Manager',
        email_sunday: 'sofie.snauwaert@teamsunday.com',
        department: 'ME_BE',
        // telephone: '+32 (0) 494 25 66 35',
        // parsed_telephone: '0032494256635'
    },
    'steven.callens': {
        name: 'Steven Callens',
        job_function: 'Founder / CEO',
        email_sunday: 'steven@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 472 82 78 05',
        parsed_telephone: '0032472827805'
    },
    // 'tara.mcgonagle': {
    //     name: 'Tara McGonagle',
    //     job_function: 'Sales Development Representative',
    //     email_sunday: 'tara.mcgonagle@teamsunday.com',
    //     department: 'ME_IE',
    // },
    'thomas.termote': {
        name: 'Thomas Termote',
        job_function: 'Sales Development Representative',
        email_sunday: 'thomas.termote@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 479 12 19 18',
        parsed_telephone: '0032479121918',
    },
    'timon.dedeyster': {
        name: 'Timon Dedeyster',
        job_function: 'Merchandise Strategist',
        email_sunday: 'timon@teamsunday.com',
        department: 'ME_BE',
        telephone: '+32 (0) 491 61 26 81',
        parsed_telephone: '0032491612681'
    },
    // 'tom.bouwman': {
    //     name: 'Tom Bouwman',
    //     job_function: 'Sales Development Representative',
    //     email_sunday: 'tom.bouwman@teamsunday.com',
    //     department: 'ME_NL',
    // },
    // 'vanessa.hostens': {
    //     name: 'Vanessa Hostens',
    //     job_function: 'Supply Chain Manager',
    //     email_sunday: 'vanessa@teamsunday.com',
    //     department: 'ME_BE',
    // },
    'william.grealy': {
        name: 'William Grealy',
        job_function: 'Account Executive',
        email_sunday: 'william.grealy@teamsunday.com',
        department: 'ME_IE',
    },
};

const generateAllSignaturesButton = $('#generate-all-signatures-button');
generateAllSignaturesButton.removeAttr('disabled');
generateSignatureButton.removeAttr('disabled');
copySignatureButton.removeAttr('disabled');
copyHtmlButton.removeAttr('disabled');

function getParameter(parameterName) {
    let result = null;
    let tmp = [];
    location.search
        .substr(1)
        .split('&')
        .forEach(function (item) {
            tmp = item.split('=');
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function copyElementToClipboard(element) {
    let range = document.createRange();
    range.selectNode(element);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();

    let name = $(element).find('[data-name]').text();
    alert('Signature for ' + name + ' is copied to clipboard.');
}

function copyToClipboard(text) {
    let dummy = document.createElement('textarea');
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    alert('Html is copied to clipboard.');
}

$('[name="apply_sunday_theming"]').on('change', () => {
    selectPersonElement.trigger('change');
    generateSignatureButton.trigger('click');
});

selectPersonElement.on('change', function () {
    const person_val = $(this).val().trim();

    // if (person_val in employees) {
    //     generateSignatureButton.removeAttr('disabled');
    //     copySignatureButton.removeAttr('disabled');
    //     copyHtmlButton.removeAttr('disabled');
    // } else {
    //     generateSignatureButton.prop('disabled', true);
    //     copySignatureButton.prop('disabled', true);
    //     copyHtmlButton.prop('disabled', true);
    // }

    $('[name="picture_link"]').val('');
    ``
    $('[name="include_profile_pic"]').prop('checked', employees[person_val].include_profile_pic);
    $('[name="name"]').val(employees[person_val].name);
    $('[name="function"]').val(employees[person_val].job_function);
    $('[name="email"]').val(employees[person_val].email_sunday);
    $('[name="department"]').val(employees[person_val].department);
    inputTelephoneElement.val(employees[person_val].telephone || '');
    hiddenParsedTelephoneElement.val(employees[person_val].parsed_telephone || '');

    // let picture_link = default_picture_path + picture_val;
    // $.get(picture_link)
    //     .done(function() {
    //         $('[name="picture_link"]').val(picture_link);
    //         $('.include_profile_pic_container').css('display', 'block');
    //     })
    //     .fail(function() {
    //         $('.include_profile_pic_container').css('display', 'none');
    //     })
    //     .always(function() {
    //         generateSignatureButton.click();
    //         setTimeout(function() {
    //             copySignatureButton.click();
    //         }, 400);
    //     });

    generateSignatureButton.click();
    setTimeout(function () {
        copySignatureButton.click();
    }, 400);
});

generateAllSignaturesButton.on('click', function () {
    let html = '';

    for (const value of Object.values(employees)) {
        html += '<tr><td class="signature-cell">';
        html += generateHtml(value);
        html += '</td></tr>';
    }

    $('#generated-signatures').html(html);
});
$('#generated-signatures').on('click', '.signature-cell', function (event) {
    event.preventDefault();
    event.stopPropagation();
    copyElementToClipboard(event.target.closest('.signature-cell'));
});
copySignatureButton.on('click', function () {
    copyElementToClipboard(document.getElementById('generated-signature'));
});
copyHtmlButton.on('click', function () {
    let employee = currentSelectedEmployee();
    const generatedHtml =  generateHtml(employee, false /*$('[name="include_profile_pic"]').is(':checked')*/);

    if (generatedHtml === '') {
        return false;
    }

    copyToClipboard(generatedHtml);
});

function currentSelectedEmployee() {
    return employees[selectPersonElement.val()];
}

generateSignatureButton.on('click', function () {
    let employee = currentSelectedEmployee();

    if ('undefined' === typeof employee) {
        return false;
    }

    employee.name = $('[name="name"]').val();
    employee.job_function = $('[name="function"]').val();
    employee.email = $('[name="email"]').val();
    employee.telephone = inputTelephoneElement.val();
    employee.parsed_telephone = hiddenParsedTelephoneElement.val();

    if (inputTelephoneElement.val().length > 0) {
        // TODO - make sure this regexp is correct!

        if (employee.telephone === inputTelephoneElement.val()) {
            employee.parsed_telephone = hiddenParsedTelephoneElement.val();
        } else {
            employee.parsed_telephone = employee.telephone.replace(' ', '').replace('(0)', '').replace('+', '00');
        }

        // TODO - if parsed_telephone includes other characters than integers, throw error
        // TODO - if parsed_telephone includes brackets, remove the surrounded characters
    }

    employee.include_profile_pic = $('[name="include_profile_pic"]').is(':checked');
    $('#generated-signature').html(generateHtml(employee, employee.include_profile_pic));
});

let requestedPerson = getParameter('name');
if (requestedPerson
    && requestedPerson !== '') {
    selectPersonElement.val(requestedPerson).change();
}

function getDefaultDataFromDepartment(employee) {
    if ('undefined' === typeof employee) {
        console.warn('Cannot get default data for non existing employee.');
        return null;
    }

    let parsed_employee = JSON.parse(JSON.stringify(employee));

    // Load the correct telephone number.
    if (parsed_employee.telephone) {
        parsed_employee.telephone = parsed_employee.telephone.trim();
    } else {
        parsed_employee.telephone = '';
    }

    // Load the correct parsed telephone number.
    if (parsed_employee.parsed_telephone) {
        parsed_employee.parsed_telephone = parsed_employee.parsed_telephone.trim();
    } else {
        parsed_employee.parsed_telephone = '';
    }

    // // Load the correct picture for the given employee.
    // let default_picture_val = employee.name.replace(' ', '.').toLowerCase() + '.jpg';
    // parsed_employee.picture_val = employee.picture_val
    //     || default_picture_val;

    // Load default department related information.
    switch (parsed_employee.department) {
        case 'ME_BE':
            parsed_employee.telephone = parsed_employee.telephone.trim() === ''
                ? '+32 (0) 51 20 11 98'
                : parsed_employee.telephone;
            parsed_employee.parsed_telephone = parsed_employee.parsed_telephone.trim() === ''
                ? '003251201198'
                : parsed_employee.parsed_telephone;
            parsed_employee.address = 'Hof ter Weze 5<br />Roeselare, Belgium';
            parsed_employee.address_link = 'https://maps.google.com/?q=Hof+ter+Weze+5,+8800+Roeselare,+België&amp;entry=gmail&amp;source=g';
            parsed_employee.website = 'teamsunday.com';
            parsed_employee.website_link = 'https://teamsunday.com/';
            break;
        case 'ME_NL':
            parsed_employee.telephone = parsed_employee.telephone.trim() === ''
                ? '+31 (0) 308 08 28 63'
                : parsed_employee.telephone;
            parsed_employee.parsed_telephone = parsed_employee.parsed_telephone.trim() === ''
                ? '00313082863'
                : parsed_employee.parsed_telephone;
            parsed_employee.address = 'Tennesseedreef 15 C<br />Utrecht, Nederland';
            parsed_employee.address_link = 'https://www.google.com/maps/place/Jacob+van+Ruisdaelstraat+111,+3583+CC+Utrecht,+Nederland/';
            parsed_employee.website = 'teamsunday.com';
            parsed_employee.website_link = 'https://teamsunday.com';
            break;
        case 'ME_PL_GDANSK':
        case 'ME_PL_WARSHAW':
            parsed_employee.telephone = parsed_employee.telephone.trim() === ''
                ? '+48 (0) 512 75 49 54'
                : parsed_employee.telephone;
            parsed_employee.parsed_telephone = parsed_employee.parsed_telephone.trim() === ''
                ? '0048512754954'
                : parsed_employee.parsed_telephone;
            parsed_employee.address = 'Al. Grunwaldzka 472B<br />Gdańsk, Polska';
            parsed_employee.address_link = 'https://www.google.com/maps/place/ul.+Tylna+4F,+90-348+Łódź,+Polska/';
            parsed_employee.website = 'teamsunday.com';
            parsed_employee.website_link = 'https://teamsunday.com';
            break;
        case 'ME_PL_LODZ':
            parsed_employee.telephone = parsed_employee.telephone.trim() === ''
                ? '+48 (0) 512 85 89 58'
                : parsed_employee.telephone;
            parsed_employee.parsed_telephone = parsed_employee.parsed_telephone.trim() === ''
                ? '0048512858958'
                : parsed_employee.parsed_telephone;
            parsed_employee.address = 'Gdańska 126/128<br />Łódź, Polska';
            parsed_employee.address_link = 'https://www.google.com/maps/place/ul.+Tylna+4F,+90-348+Łódź,+Polska/';
            parsed_employee.website = 'teamsunday.com';
            parsed_employee.website_link = 'https://teamsunday.com';
            break;
        case 'ME_DE':
            parsed_employee.telephone = parsed_employee.telephone.trim() === ''
                ? ''
                : parsed_employee.telephone;
            parsed_employee.parsed_telephone = parsed_employee.parsed_telephone.trim() === ''
                ? ''
                : parsed_employee.parsed_telephone;
            parsed_employee.address = 'Lohmühlenstraße 65<br />Berlin, Deutschland';
            parsed_employee.address_link = 'https://www.google.com/maps/place/Lohmühlenstraße+65,+12435+Berlin,+Deutschland/';
            parsed_employee.website = 'teamsunday.com';
            parsed_employee.website_link = 'https://teamsunday.com';
            break;
        case 'ME_IE':
            parsed_employee.telephone = parsed_employee.telephone.trim() === ''
                ? ''
                : parsed_employee.telephone;
            parsed_employee.parsed_telephone = parsed_employee.parsed_telephone.trim() === ''
                ? ''
                : parsed_employee.parsed_telephone;
            parsed_employee.address = 'Custom House Quay<br />Dublin, Ireland';
            parsed_employee.address_link = 'https://www.google.com/maps/place/Lohmühlenstraße+65,+12435+Berlin,+Deutschland/';
            parsed_employee.website = 'teamsunday.com';
            parsed_employee.website_link = 'https://teamsunday.com/';
            break;
        default:
            break;
    }

    parsed_employee.picture_link = '';

    return parsed_employee;
}

/**
 * Generates HTML based on the given employee.
 *
 * @param employee
 * @param add_picture
 */
function generateHtml(employee, add_picture = false) {
    const parsed_employee = getDefaultDataFromDepartment(employee);

    if (null === parsed_employee) {
        console.warn('Unable to get default data from non existing employee.');
        return '';
    }

    const name = parsed_employee.name;
    const job_function = parsed_employee.job_function;
    // const department = parsed_employee.department;
    const telephone = parsed_employee.telephone;

    const colorBlack = '#000';
    const fontFamily = 'font-family: Poppins, Helvetica, sans-serif;';
    const alt_image_logo = 'Sunday';
    const logo_link = 'https://teamsunday.com/wp-content/uploads/mails/sunday_logo_signature.jpg';

    let html = `
            <br />
            <table cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; background: none; border: 0; margin: 0; padding: 0;">
                <tbody>`;

    // if (department === 'ME_NL') {
    //     html += `   <tr>
    //                     <td colspan="3" style="padding:15px 10px;">
    //                         <span style="${fontFamily}color: ${colorBlack};"><b>We moved from Utrecht to Amsterdam.
    //                         <br />
    //                         New address:
    //                         <br />
    //                         <span style="margin-left:20px;">Joop Geesinkweg 641</span
    //                         ><br />
    //                         <span style="margin-left:20px;">1114 AB Amsterdam</span></b></span>
    //                     </td>
    //                 </tr>`;
    // }


    html += `       <tr>
                        <td valign="center" align="left" width="300">
                            <img src="${logo_link}" width="150" alt="${alt_image_logo}">
                            <p style="font-family: Poppins, Helvetica, sans-serif; color: #000; font-size: 26px; font-weight: 600; margin: 0;">
                                Meet us at our new HQ
                            </p>
                            <p style="font-family: Poppins, Helvetica, sans-serif; color: #000; font-size: 16px; text-transform: uppercase; margin: 0;">
                                Krommebeekpark 21, Roeselare
                            </p>
                        </td>
                        <td style="border-right:3px solid #000;padding-left:10px">
                            &nbsp;                           
                        </td>
                        <td style="padding: 0 0 3px 20px;" valign="top">
                            <table cellpadding="0" cellspacing="0" border="0" style="background: none; border: 0; margin: 0; padding: 0;">
                                <tbody>
                                    <tr>
                                        <td style="${fontFamily} color: ${colorBlack};">
                                            <b style="font-size:18px" data-name>${name}</b>
                                            <br />
                                            <span style="font-size:14px;"">${job_function}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="${fontFamily} color: ${colorBlack}; font-size: 14px;padding-top:15px;">
                                            <a href="https://teamsunday.com" style="color:${colorBlack};text-decoration:none;">teamsunday.com</a>
                                            
                                        </td>
                                    </tr>`;
    if (telephone) {
        html += `                   <tr>
                                        <td colspan="2" style="${fontFamily} color: ${colorBlack}; font-size: 14px;">
                                            Tel. ${telephone}
                                        </td>

                                    </tr>`;
    }

    html += `
                                    <tr>
                                        <td colspan="2">
                                            <div style="display: flex;justify-content: center;margin-bottom: 10px;margin-top: 10px;">
                                                <!-- SOCIALS -->
                                                <a style="margin: 0 5px;" target="_blank" href="https://www.linkedin.com/company/sundaydotcom/">
                                                    <img style="width:100%;height:auto; max-width: 30px;" src="https://teamsunday.com/assets/icons/linkedin.svg" alt="LinkedIn">
                                                </a>

                                                <a style="margin: 0 5px;" target="_blank" href="https://www.facebook.com/MerchandiseEssentials">
                                                    <img style="width:100%;height:auto; max-width: 30px;" src="https://teamsunday.com/assets/icons/facebook.svg" alt="Facebook">
                                                </a>

                                                <a style="margin: 0 5px;" target="_blank" href="https://www.instagram.com/teamsunday_com/">
                                                    <img style="width:100%;height:auto; max-width: 30px;" src="https://teamsunday.com/assets/icons/instagram.svg" alt="Instagram">
                                                </a>

                                                <a style="margin: 0 5px;" target="_blank" href="https://www.pinterest.com/teamsunday1/">
                                                    <img style="width:100%;height:auto; max-width: 30px;" src="https://teamsunday.com/assets/icons/pinterest.svg" alt="Pinterest">
                                                </a>

                                                <a style="margin: 0 5px;" target="_blank" href="https://vimeo.com/user184239142">
                                                    <img style="width:100%;height:auto; max-width: 30px;" src="https://teamsunday.com/assets/icons/vimeo.svg" alt="Vimeo">
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                        `

    html += `                   </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>`;

    return html;
}
