const usp = [
    {
        usp: 'unique-design',
        body: "Sunday is a team of textile experts. We focus on wearables and accessories, starting from scratch. Because of our full custom offering and expertise, we go all the way in accomplishing high quality products to make your project a huge success.  We'll guide you from end to start and communicate transparently during the proces. Our products are the best offline tool to create brand ambassadors. Custom clothing can be implemented in employer branding campaigns, employee retention, onboarding, brand activations, fairs & events and many more.",
        video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778141540?h=181d56dff0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From brand to fashion"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
    },
    {
        usp: 'ship-worldwide',
        body: "Branding & colours are super important. That is why we find it crucial that everything aligns. We pantone dye our fabrics, support you in color matching and make sure your creative designs are translated onto professional 3D mock-ups, so expectations are met. Our fashion design team is ready to assist you in any way.",
        video: `
            <img style="border-radius: 26px;" src="/partners/img/design.jpg" alt="Design Support">
        `,
    },
    {
        usp: 'worldclass-service',
        body: "Next to our textile products, we offer packaging & shipping. We deliver, wherever you want us to. Our dedicated team makes sure orders get to their destination smoothly. Because we all know intake, shipping and tracing can be a real operational hassle sometimes.",
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