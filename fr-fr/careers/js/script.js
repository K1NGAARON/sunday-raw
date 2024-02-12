const values = [
  {
    value: "Axé sur les valeurs",
    title: "Ce que nous faisons concerne nos clients",
    body: "Nous nous engageons à comprendre nos clients et leur entreprise. Par conséquent, nous fournissons des solutions et des services sur mesure au niveau le plus élevé de l'industrie. Nous sommes fiers de notre travail, mais seulement après avoir obtenu les meilleurs résultats. Notre objectif ultime est de fournir constamment la plus haute valeur pour nos clients.",
    img: "/careers/img/values/image1.jpg",
  },
  {
    value: "Holistique",
    title: "Nous regardons le tout",
    body: "De bout en bout, nous gardons une vue d'ensemble sur le processus, pour nous assurer que nous ne manquons aucun détail. Nos clients peuvent être assurés que nous avons déjà pris des mesures pour résoudre l'inattendu. Nous visons des solutions à long terme qui aident tous ceux impliqués dans le projet, au lieu de solutions à court terme qui nuisent aux autres.",
    img: "/careers/img/values/image2.jpg",
  },
  {
    value: "Croissance",
    title: "Nous nous soucions profondément de nos employés, de nos clients et de nos partenaires",
    body: "Tout ce que nous faisons est lié à la création d'un véritable ambassadeur à l'interne et à l'externe. Aider les gens à débloquer leur véritable potentiel est au cœur de notre organisation.",
    img: "/careers/img/values/image3.jpg",
  },
  {
    value: "Mondial",
    title: "Nous prenons nos responsabilités pour notre planète et notre objectif",
    body: "Nous remettons en question les normes de l'industrie en choisissant toujours l'option de durabilité dans nos idées, approches et opérations. Un salaire équitable et de bonnes conditions de travail pour les collaborateurs et les fournisseurs vont de soi. Notre équipe est composée de professionnels de haut niveau avec un degré élevé d'EQ et une compréhension du monde.",
    img: "/careers/img/values/image4.jpg",
  },
  {
    value: "Propriété",
    title: "Nos clients s'attendent à ce que nous les connaissions et les inspirions",
    body: "Ils sont sans souci parce que nous respectons nos engagements et prenons nos responsabilités. Nous opérons à un niveau mondial car nous nous remettons constamment en question pour l'amélioration continue. Nous travaillons en équipe et utilisons l'expertise de l'ensemble pour nous améliorer, nos idées et notre exécution chaque jour.",
    img: "/careers/img/values/image5.jpg",
  },
];
function toggleValues(e) {
  let t = e.target.id;
  $(".beachhead-btn").removeClass("active"), $(this).addClass("active");
  let a = document.querySelector("#headlineHolder"),
    o = document.querySelector("#bodyHolder"),
    s = document.querySelector("#imageHolder");
  console.log(s),
    "value-driven" === t
      ? ($(a).text(`${values[0].title}`),
        $(o).text(`${values[0].body}`),
        $(s).attr("src", `${values[0].img}`))
      : "holistic" === t
      ? ($(a).text(`${values[1].title}`),
        $(o).text(`${values[1].body}`),
        $(s).attr("src", `${values[1].img}`))
      : "growth" === t
      ? ($(a).text(`${values[2].title}`),
        $(o).text(`${values[2].body}`),
        $(s).attr("src", `${values[2].img}`))
      : "worldly" === t
      ? ($(a).text(`${values[3].title}`),
        $(o).text(`${values[3].body}`),
        $(s).attr("src", `${values[3].img}`))
      : "ownership" === t &&
        ($(a).text(`${values[4].title}`),
        $(o).text(`${values[4].body}`),
        $(s).attr("src", `${values[4].img}`));
}
$(".beachhead-btn").click(toggleValues);
