const usp = [
  {
    usp: "unique-design",
    body: "Our custom designs are unique in the market: We always start from the customer's brand guidelines (logo, Pantone colors, brand vision, …). Then we help think about the objective of the clothing and who will wear it. That way, the design team can work out an appropriate custom design in a much more focused way. The team also constantly follows the latest fashion trends, which ensures that we can develop contemporary and modern concepts that will be worn with pride.",
    video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778141540?h=181d56dff0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From brand to fashion"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
  },
  {
    usp: "ship-worldwide",
    body: "We noticed that many of our customers love doing creative campaigns using awesome clothing, but they hate the hassle. That's why we started working on a solution. Sunday Wardrobe™ is our SaaS-solution, making it super easy for companies to warehouse, handle and ship clothing to key stakeholders.",
    video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/758670317?h=7c50d91deb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sunday Wardrobe&amp;trade;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
  },
  {
    usp: "worldclass-service",
    body: "Personal contact, guidance throughout the process and clear communication is what Sunday guarantees. We think along with the client and help them to choose the perfect product, finishing options and how best to use the clothing to achieve maximum ROI.",
    video: `
            <div class="video-wrapper side" id="videoHolder">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/794577698?h=db554bdd29&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="marieke.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        `,
  },
];
function toggleUSP(e) {
  let a = document.querySelector("#videoHolder"),
    t = document.querySelector("#usp-body"),
    o = e.target.id;
  $(".usp-toggle").removeClass("active"),
    $(this).addClass("active"),
    "unique-design" == o
      ? ((t.innerHTML = usp[0].body), $(a).html(usp[0].video))
      : "ship-worldwide" == o
      ? ((t.innerHTML = usp[1].body), $(a).html(usp[1].video))
      : "worldclass-service" == o &&
        ((t.innerHTML = usp[2].body), $(a).html(usp[2].video));
}
const beachheads = [
  {
    headline:
      "With 10 new hires every week, they were in need of a proper onboarding.",
    image: "/cases/deliverect/img/banner-2.jpg",
    logo: "/cases/deliverect/img/logo.png",
    body: "Deliverect, the all-in-one solution for restaurants to grow their online presence, grew 750% in the last year.",
    url: "/cases/deliverect/",
  },
  {
    headline: "Personalised sports shirts as a tool in the war for talent",
    image: "/cases/stadsbader/img/banner-2.jpg",
    logo: "/cases/stadsbader/img/logo.png",
    body: "How to find the perfect new employees? Organise an event and let your current employees be the best ambassadors.",
    url: "/cases/stadsbader/",
  },
  {
    headline:
      "Thanking employees for their efforts and building an employee recognition policy.",
    image: "/cases/ion/img/ion.jpg",
    logo: "/cases/ion/img/logo.svg",
    body: "ION knows how to motivate a team: #actION please!",
    url: "/cases/ion/",
  },
  {
    headline:
      "Make your brand stand out by letting your employees be your best brand ambassadors.",
    image: "/cases/imens/img/banner2.jpg",
    logo: "/cases/imens/img/logo.png",
    body: "Personalized wearables create visibility but it also boosts the team feeling.",
    url: "/cases/imens/",
  },
  {
    headline:
      "Find out why Televic opted for business shirts fully adapted to their corporate branding.",
    image: "/cases/televic/img/banner-home.jpg",
    logo: "/cases/televic/img/logo.png",
    body: "With other companies trying to impress future talents with a pen, Televic really wants to stand out from the crowd with their company fashion.",
    url: "/cases/televic/",
  },
];
function toggleBeachhead(e) {
  let a = document.querySelector("#headlineHolder"),
    t = document.querySelector("#imageHolder"),
    o = document.querySelector("#beachheadLogo"),
    i = document.querySelector("#bodyHolder"),
    s = document.querySelector("#caseBtn");
  $(".beachhead-btn").removeClass("active"), $(this).addClass("active");
  let r = document.querySelector(".beachhead-btn.active").id;
  console.log(r),
    "onboarding" === r
      ? ($(a).text(`${beachheads[0].headline}`),
        $(t).attr("src", `${beachheads[0].image}`),
        $(o).attr("src", `${beachheads[0].logo}`),
        $(i).text(`${beachheads[0].body}`),
        $(s).attr("href", `${beachheads[0].url}`))
      : "employer-branding" === r
      ? ($(a).text(`${beachheads[1].headline}`),
        $(t).attr("src", `${beachheads[1].image}`),
        $(o).attr("src", `${beachheads[1].logo}`),
        $(i).text(`${beachheads[1].body}`),
        $(s).attr("href", `${beachheads[1].url}`))
      : "retention" === r
      ? ($(a).text(`${beachheads[2].headline}`),
        $(t).attr("src", `${beachheads[2].image}`),
        $(o).attr("src", `${beachheads[2].logo}`),
        $(i).text(`${beachheads[2].body}`),
        $(s).attr("href", `${beachheads[2].url}`))
      : "awareness" === r
      ? ($(a).text(`${beachheads[3].headline}`),
        $(t).attr("src", `${beachheads[3].image}`),
        $(o).attr("src", `${beachheads[3].logo}`),
        $(i).text(`${beachheads[3].body}`),
        $(s).attr("href", `${beachheads[3].url}`))
      : "fairs" === r &&
        ($(a).text(`${beachheads[4].headline}`),
        $(t).attr("src", `${beachheads[4].image}`),
        $(o).attr("src", `${beachheads[4].logo}`),
        $(i).text(`${beachheads[4].body}`),
        $(s).attr("href", `${beachheads[4].url}`));
}
$(".usp-toggle").click(toggleUSP), $(".beachhead-btn").click(toggleBeachhead);
