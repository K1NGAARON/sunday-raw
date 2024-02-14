const usp = [
    {
      usp: "unique-design",
      body: "Nos designs personnalisés sont uniques sur le marché : nous partons toujours des directives de marque du client (logo, couleurs Pantone, vision de la marque, …). Ensuite, nous aidons à réfléchir à l'objectif des vêtements et à qui les portera. De cette manière, l'équipe de design peut travailler sur un design personnalisé de manière beaucoup plus ciblée. L'équipe suit également constamment les dernières tendances de la mode, ce qui garantit que nous pouvons développer des concepts contemporains et modernes qui seront portés avec fierté.",
      video: `
              <div class="video-wrapper side" id="videoHolder">
                  <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/778141540?h=181d56dff0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="From brand to fashion"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
              </div>
          `,
    },
    {
      usp: "ship-worldwide",
      body: "Nous avons remarqué que beaucoup de nos clients aiment réaliser des campagnes créatives en utilisant des vêtements géniaux, mais détestent les tracas. C'est pourquoi nous avons commencé à travailler sur une solution. Sunday Wardrobe™ est notre solution SAAS, rendant super facile pour les entreprises de stocker, gérer et expédier des vêtements aux parties prenantes clés. ",
      video: `
              <div class="video-wrapper side" id="videoHolder">
                  <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/758670317?h=7c50d91deb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sunday Wardrobe&amp;trade;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
              </div>
          `,
    },
    {
      usp: "worldclass-service",
      body: "Un contact personnel, un accompagnement tout au long du processus et une communication claire, c'est ce que Sunday garantit. Nous réfléchissons avec le client et l'aidons à choisir le produit parfait, les options de finition et la meilleure façon d'utiliser les vêtements pour obtenir un ROI maximal.",
      video: `
              <div class="video-wrapper side" id="videoHolder">
                  <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/794577698?h=db554bdd29&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="marieke.mp4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
              </div>
          `,
    },
  ];
  
  function toggleUSP(e) {
    let video = document.querySelector("#videoHolder");
    let bodyHolder = document.querySelector("#usp-body");
    let activeUSP = e.target.id;
  
    $(".usp-toggle").removeClass("active");
    $(this).addClass("active");
  
    if (activeUSP == "unique-design") {
      bodyHolder.innerHTML = usp[0].body;
      $(video).html(usp[0].video);
    } else if (activeUSP == "ship-worldwide") {
      bodyHolder.innerHTML = usp[1].body;
      $(video).html(usp[1].video);
    } else if (activeUSP == "worldclass-service") {
      bodyHolder.innerHTML = usp[2].body;
      $(video).html(usp[2].video);
    }
  }
  
  const beachheads = [
    {
      headline:
        "Avec 10 nouvelles recrues chaque semaine, et donc 10 nouveaux ambassadeurs potentiels, ils avaient besoin d'une intégration appropriée.",
      image: "/cases/deliverect/img/banner-2.jpg",
      logo: "/cases/deliverect/img/logo.png",
      body: "Deliverect, la solution tout-en-un pour les restaurants pour accroître leur présence en ligne, a connu une croissance de 750 % l'année dernière.",
      url: "/fr-fr/cases/deliverect/",
    },
    {
      headline: "Des maillots de sport personnalisés comme outil dans la guerre pour les talents.",
      image: "/cases/stadsbader/img/banner-2.jpg",
      logo: "/cases/stadsbader/img/logo.png",
      body: "Comment trouver les parfaits nouveaux employés ? Organisez un événement et laissez vos employés actuels être les meilleurs ambassadeurs.",
      url: "/fr-fr/cases/stadsbader/",
    },
    {
      headline:
        "Remercier les employés pour leurs efforts et construire une politique de reconnaissance des employés.",
      image: "/cases/ion/img/ion.jpg",
      logo: "/cases/ion/img/logo.svg",
      body: "ION sait comment motiver une équipe : #actION s'il vous plaît!",
      url: "/fr-fr/cases/ion/",
    },
    {
      headline:
        "Faites ressortir votre marque en laissant vos employés être vos meilleurs ambassadeurs de marque.",
      image: "/cases/imens/img/banner2.jpg",
      logo: "/cases/imens/img/logo.png",
      body: "Les vêtements personnalisés créent de la visibilité mais renforcent également l'esprit d'équipe.",
      url: "/fr-fr/cases/imens/",
    },
    {
      headline:
        "Découvrez pourquoi Televic a opté pour des chemises d'affaires entièrement adaptées à leur image de marque.",
      image: "/cases/televic/img/banner-home.jpg",
      logo: "/cases/televic/img/logo.png",
      body: "Alors que d'autres entreprises tentent d'impressionner les futurs talents avec un stylo, Televic veut vraiment se démarquer avec leur mode d'entreprise.",
      url: "/fr-fr/cases/televic/",
    },
  ];
  
  function toggleBeachhead(e) {
    let headlineHolder = document.querySelector("#headlineHolder");
    let imageHolder = document.querySelector("#imageHolder");
    let logoHolder = document.querySelector("#beachheadLogo");
    let bodyHolder = document.querySelector("#bodyHolder");
    let buttonHolder = document.querySelector("#caseBtn");
  
    $(".beachhead-btn").removeClass("active");
    $(this).addClass("active");
  
    let selectedContent = document.querySelector(".beachhead-btn.active").id;
  
    console.log(selectedContent);
  
    if (selectedContent === "onboarding") {
      $(headlineHolder).text(`${beachheads[0].headline}`);
      $(imageHolder).attr("src", `${beachheads[0].image}`);
      $(logoHolder).attr("src", `${beachheads[0].logo}`);
      $(bodyHolder).text(`${beachheads[0].body}`);
      $(buttonHolder).attr("href", `${beachheads[0].url}`);
    } else if (selectedContent === "employer-branding") {
      $(headlineHolder).text(`${beachheads[1].headline}`);
      $(imageHolder).attr("src", `${beachheads[1].image}`);
      $(logoHolder).attr("src", `${beachheads[1].logo}`);
      $(bodyHolder).text(`${beachheads[1].body}`);
      $(buttonHolder).attr("href", `${beachheads[1].url}`);
    } else if (selectedContent === "retention") {
      $(headlineHolder).text(`${beachheads[2].headline}`);
      $(imageHolder).attr("src", `${beachheads[2].image}`);
      $(logoHolder).attr("src", `${beachheads[2].logo}`);
      $(bodyHolder).text(`${beachheads[2].body}`);
      $(buttonHolder).attr("href", `${beachheads[2].url}`);
    } else if (selectedContent === "awareness") {
      $(headlineHolder).text(`${beachheads[3].headline}`);
      $(imageHolder).attr("src", `${beachheads[3].image}`);
      $(logoHolder).attr("src", `${beachheads[3].logo}`);
      $(bodyHolder).text(`${beachheads[3].body}`);
      $(buttonHolder).attr("href", `${beachheads[3].url}`);
    } else if (selectedContent === "fairs") {
      $(headlineHolder).text(`${beachheads[4].headline}`);
      $(imageHolder).attr("src", `${beachheads[4].image}`);
      $(logoHolder).attr("src", `${beachheads[4].logo}`);
      $(bodyHolder).text(`${beachheads[4].body}`);
      $(buttonHolder).attr("href", `${beachheads[4].url}`);
    }
  }

$(".usp-toggle").click(toggleUSP);
$(".beachhead-btn").click(toggleBeachhead);