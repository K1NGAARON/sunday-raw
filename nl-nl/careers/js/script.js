const values = [
    {
        value: 'Value Driven',
        title: "Wat wij doen, gaat over onze klanten.",
        body: "Het is onze taak om onze klanten en hun bedrijf te begrijpen. Daarom leveren we op maat gemaakte oplossingen en diensten op een toonaangevend niveau in de branche. Wij zijn trots op werk, maar pas nadat we de beste resultaten hebben behaald. Ons uiteindelijke doel is om constant de hoogste waarde voor onze klanten te leveren.",
    },
    {
        value: 'Holistic',
        title: "We geven veel om onze medewerkers, onze klanten en onze partners.",
        body: "Alles wat we doen is gekoppeld aan het creëren van echt ambassadeurschap, zowel intern als extern. Mensen helpen met hun ware potentieel te ontdekken, vormt de kern van onze organisatie.",
    },
    {
        value: 'Growth',
        title: "We kijken naar totaalplaatje.",
        body: "Gedurende het hele proces bekijken wij de situatie met een helicopterview, zodat we geen enkel detail missen. Onze klanten kunnen er zeker van zijn dat we actie hebben ondernomen om het onverwachte op te lossen. We streven naar langetermijnoplossingen die iedereen helpen die betrokken is bij het project, in plaats van korte termijn oplossingen die anderen negatieve effecten toebrengen.",
    },
    {
        value: 'Worldly',
        title: "We nemen verantwoordelijkheid voor onze planeet.",
        body: "We dagen de standaard van de branche uit door altijd voor duurzaamheid te kiezen in onze ideeën, aanpak en activiteiten. Een eerlijk salaris en goede arbeidsvoorwaarden voor medewerkers en leveranciers zijn vanzelfsprekend. Ons team bestaat uit topprofessionals met een hoge mate van EQ en begrip van de wereld.",
    },
    {
        value: 'Ownership',
        title: 'Onze klanten verwachten dat we hen inspireren.',
        body: "We nemen onze verantwoordelijkheid en ontzorgen de klant zoveel als mogelijk. We werken op wereldniveau omdat we onszelf voortdurend uitdagen om beter te worden in wat we doen. De expertise van het team wordt ingezet om onszelf, onze ideeën en onze uitvoering elke dag beter te maken.",
    },
];

function toggleValues(e) {
    let activeValue = e.target.id;

    $('.beachhead-btn').removeClass('active');
    $(this).addClass('active');

    const title = document.querySelector('#headlineHolder');
    const body = document.querySelector('#bodyHolder');

    if (activeValue === 'value-driven') {
        $(title).text(`${values[0].title}`);
        $(body).text(`${values[0].body}`);
    } else if (activeValue === 'holistic') {
        $(title).text(`${values[1].title}`);
        $(body).text(`${values[1].body}`);
    } else if (activeValue === 'growth') {
        $(title).text(`${values[2].title}`);
        $(body).text(`${values[2].body}`);
    } else if (activeValue === 'worldly') {
        $(title).text(`${values[3].title}`);
        $(body).text(`${values[3].body}`);
    } else if (activeValue === 'ownership') {
        $(title).text(`${values[4].title}`);
        $(body).text(`${values[4].body}`);
    }
};

$('.beachhead-btn').click(toggleValues);