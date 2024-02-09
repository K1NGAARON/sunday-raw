function readMore(e) {
    $("#fullBody").toggleClass("active");
    $("#introBody").toggleClass("active");
    $("#read-more").hide();
  }
  
  const services = [
    {
      title: "Conception",
      body: "Notre équipe de design commence leur vision à partir d'un rouleau de tissu, tout comme le font les vraies marques de mode. Cela signifie que nous pouvons créer des articles vraiment uniques pour votre marque. Nous ne nous contentons pas de sweaters et t-shirts blancs génériques avec un logo imprimé. Mais nous sommes fiers de concevoir des articles vestimentaires qui capturent l'essence unique de votre marque, en faisant quelque chose que vos fans adoreront porter.",
      img: "/about/img/design.png",
    },
    {
      title: "Production",
      body: "Chaque produit que nous concevons, nous le produisons soigneusement selon les normes les plus élevées en matière de qualité et de durabilité. Nous disposons de centres de production dédiés en Pologne et en Turquie, ce qui assure une collaboration personnelle étroite avec tous les partenaires sélectionnés. Notre département R&D interne vous donne la possibilité de créer des articles de mode complètement personnalisés à partir de zéro.",
      img: "/about/img/production.png",
    },
    {
      title: "Expédition Globale",
      body: "L'un des principaux défis auxquels nos clients sont confrontés est la gestion de la logistique des marchandises. La norme de l'industrie est que, une fois les produits fabriqués, le travail du fournisseur est terminé. Nous sommes d'un avis différent. C'est pourquoi nous avons construit notre plateforme Wardrobe™. Un placard virtuel qui garde un aperçu de vos marchandises, y compris les niveaux de stock en temps réel, et qui aide nos clients à expédier leurs marchandises mondialement en quelques clics. Pendant que nous faisons le travail d'exécution difficile en coulisse.",
      img: "/about/img/shipping.png",
    },
    {
      title: "Service",
      body: `
            Notre client est au centre de notre entreprise. C'est pourquoi notre seul objectif est de rendre leur vie meilleure en:
            <br>
            <ul>
                <li>
                    Créant de beaux produits personnalisés qui apportent réellement des résultats
                    Investissant constamment dans des processus et des solutions logicielles qui facilitent leur vie (Wardrobe™, designs 3D réalistes, outil de collecte de taille à distance,...)                
                </li>
                <li>
                    Aider et conseiller nos clients tout au long du processus de manière personnelle. Parce que cela représente principalement un casse-tête pour les entreprises et que nous sommes les experts du textile, nous rendons le parcours client confortable. De l'ajustement des produits pour s'assurer qu'ils correspondent à votre budget à la suggestion de gammes de tailles, notre équipe est là pour vous soutenir avec un service personnalisé à chaque étape du chemin.
                </li>
                <li>
                    Notre mission est d'être la référence mondiale numéro 1 pour aider les entreprises à intégrer leur marque dans la garde-robe de leurs ambassadeurs.
                </li>
            </ul>
        `,
      img: "/about/img/service.png",
    },
  ];
  
  function showService(e) {
    $(".service-btn").removeClass("active");
    $(this).addClass("active");
  
    let activeService = e.target.id;
  
    const title = document.querySelector("#serviceTitle");
    const body = document.querySelector("#serviceBody");
    const img = document.querySelector("#serviceIMG");
  
    if (activeService === "design") {
      $(title).text(`${services[0].title}`);
      $(body).text(`${services[0].body}`);
      $(img).attr("src", `${services[0].img}`);
    } else if (activeService === "production") {
      $(title).text(`${services[1].title}`);
      $(body).text(`${services[1].body}`);
      $(img).attr("src", `${services[1].img}`);
    } else if (activeService === "shipping") {
      $(title).text(`${services[2].title}`);
      $(body).text(`${services[2].body}`);
      $(img).attr("src", `${services[2].img}`);
    } else if (activeService === "service") {
      $(title).text(`${services[3].title}`);
      $(body).html(`${services[3].body}`);
      $(img).attr("src", `${services[3].img}`);
    }
  }
  
  $(".service-btn").click(showService);
  $("#read-more").click(readMore);
  