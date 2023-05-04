const values = [
    {
        value: 'Value Driven',
        title: "Clients first.",
        body: "Unseren Kund:innen das beste Produkt am Markt zu bieten, treibt uns an. Unser Ziel ist, euch und euer Business so gut zu verstehen, dass die optimale Lösung auf der Hand liegt – bei uns bekommt ihr nichts von der Stange, sondern nachhaltige Textilien, die zu euch und eurem Unternehmen passen. Bei Sunday sind wir stolz auf das, was wir tun - denn wir liefern konsequent hochwertigste Kleidung und Accessoires, bieten persönlichen Service und innovative Software.",
    },
    {
        value: 'Holistic',
        title: "Bessere Arbeit für alle.",
        body: "Der Mensch steht im Zentrum unserer Arbeit als Textilunternehmen – ob Mitarbeiter:in, Kund:in oder Geschäftspartner:in. Sunday setzt durch Fairness und Fürsorge für alle Beteiligten ein Zeichen in der Branche und steht ein für bessere Arbeitsbedingungen in der schnelllebigen Modewelt.",
    },
    {
        value: 'Growth',
        title: "Partnerschaft 2.0",
        body: "Unsere Kund:innen haben mit Sunday einen verlässlichen und inspirierenden Partner an ihrer Seite. Saubere Prozesse, Pünktlichkeit und Flexibilität prägen die Zusammenarbeit. Die Grundlage dafür? Persönliche Gespräche und die Freude am Ergebnis. Auch euern Feedback ist für uns Gold, denn uns immer wieder herauszufordern macht uns innovativer, stärker, kreativer. ",
    },
    {
        value: 'Worldly',
        title: "Wir managen das.",
        body: "Für uns als Lieferant zählt immer das große Ganze: Wir haben jederzeit alles im Blick – vom Kick-Off bis zur Auslieferung. Timelines, Budgets, kurzfristige Änderungswünsche: Sunday führt die Fäden zusammen und garantiert absolute Zufriedenheit bei allen Beteiligten.",
    },
    {
        value: 'Ownership',
        title: "Nachhaltigkeit.",
        body: "Sunday übernimmt Verantwortung für den Erhalt einer intakten Natur. Die bestehenden Standards der Industrie zu hinterfragen und umweltfreundliche Verfahren zu etablieren ist für uns maßgeblich in allem, was wir tun. Dazu zählen auch faire Arbeitsbedingungen entlang des gesamten Produktionsprozesses sowie die stetige Schulung unserer Teams in Sachen Sustainability und Innovation.",
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