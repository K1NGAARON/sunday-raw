const usp = [
    {
        usp: 'new-revenue',
        body: "We offer agency partners a very transparant commission on our pricing. Sunday invoices directly to the partner and you choose your own pricing towards your client. Upsells like concept, design, strategy & project management are completely up to you.",
    },
    {
        usp: 'partner-dev',
        body: "Your designers, project managers and account managers love to learn new things. We engage ourselves to actively train your team to become clothing experts. From partner onboarding to ongoing inspiration sessions, our team commits to educating your team.",
    },
    {
        usp: 'campaign-support',
        body: "Sunday offers you full support from design assistance to fulfilment through the Sunday Wardrobe. Are your clients looking for clothing for a brand activation campaign or a employee onboarding program? Our team helps you create happy clients.",
    }
];

function toggleUSP(e) {
    let video = document.querySelector('#videoHolder');
    let bodyHolder = document.querySelector('#usp-body');
    let activeUSP = e.target.id;

    $('.usp-toggle').removeClass('active');
    $(this).addClass('active');

    if (activeUSP == 'new-revenue') {
        bodyHolder.innerHTML = usp[0].body;
        $(video).html(usp[0].video);
    } else if (activeUSP == 'partner-dev') {
        bodyHolder.innerHTML = usp[1].body;
        $(video).html(usp[1].video);
    } else if (activeUSP == 'campaign-support') {
        bodyHolder.innerHTML = usp[2].body;
        $(video).html(usp[2].video);
    }
};

$('.usp-toggle').click(toggleUSP);