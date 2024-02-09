const usp = [
    {
        usp: 'unique-design',
        body: "Sunday est une équipe d'experts textiles. Nous nous concentrons sur les vêtements et accessoires, en partant de zéro. Grâce à notre offre entièrement personnalisée et à notre expertise, nous allons jusqu'au bout pour accomplir des produits de haute qualité afin de faire de votre projet un énorme succès. Nous vous guiderons de la fin au début et communiquerons de manière transparente durant le processus.",
        video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778141540?h=181d56dff0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From brand to fashion"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
    },
    {
        usp: 'ship-worldwide',
        body: "Le branding et les couleurs sont super importants. C'est pourquoi nous trouvons crucial que tout soit aligné. Nous teignons nos tissus en Pantone, vous soutenons dans l'harmonisation des couleurs et assurons que vos designs créatifs soient traduits en maquettes 3D professionnelles, afin que les attentes soient satisfaites. Notre équipe de design de mode est prête à vous assister de toutes les manières.",
        video: `
            <img style="border-radius: 26px;" src="/partners/img/design.jpg" alt="Design Support">
        `,
    },
    {
        usp: 'worldclass-service',
        body: "En plus de nos produits textiles, nous offrons l'emballage et l'expédition. Nous livrons, où que vous souhaitiez. Notre équipe dédiée assure que les commandes arrivent à destination sans encombre. Parce que nous savons tous que la réception, l'expédition et le suivi peuvent parfois être un véritable casse-tête opérationnel.",
        video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/758670317?h=7c50d91deb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sunday Wardrobe&amp;trade;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
    }
];

function toggleUSP(e) {
    let video = document.querySelector('#videoHolder');
    let bodyHolder = document.querySelector('#usp-body');
    let activeUSP = e.target.id;

    $('.usp-toggle').removeClass('active');
    $(this).addClass('active');

    if (activeUSP == 'unique-design') {
        bodyHolder.innerHTML = usp[0].body;
        $(video).html(usp[0].video);
    } else if (activeUSP == 'ship-worldwide') {
        bodyHolder.innerHTML = usp[1].body;
        $(video).html(usp[1].video);
    } else if (activeUSP == 'worldclass-service') {
        bodyHolder.innerHTML = usp[2].body;
        $(video).html(usp[2].video);
    }
};

$('.usp-toggle').click(toggleUSP);