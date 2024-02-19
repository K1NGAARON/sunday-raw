const content = [
    {
      client: "Deel",
      title: "La stratégie de marchandise la plus efficace dans la gestion d'événements",
      body: "",
      logo: "/platform/img/deel-logo.png",
      img: "/cases/deel/img/banner.jpg",
      url: "/fr-fr/cases/deel/",
      beachhead: "marketing",
      companysize: "",
    },
    {
      client: "PGS",
      title: "PGS stimule l'engagement des employés en pilote automatique dans 7 pays grâce à leur programme interne de marchandise",
      body: "",
      logo: "/fr-fr/cases/pgs/img/logo.png",
      img: "/cases/pgs/img/banner.jpg",
      url: "/fr-fr/cases/pgs/",
      beachhead: "hr",
      companysize: "",
    },
    {
      client: "Zolar",
      title: "Automatisation des parrainages clients : Chaque mois, Zolar envoie 800 boîtes de remerciement à de nouveaux clients",
      body: "",
      logo: "/fr-fr/cases/zolar/img/logo.png",
      img: "/cases/zolar/img/banner.jpg",
      url: "/fr-fr/cases/zolar/",
      beachhead: "sales",
      companysize: "",
    },
];

function createCards(e) {
    let a = document.querySelector(".section.content > .row > .wrapper");
    if ((content.reverse(), a)) {
        let i = content
        .map((e) => {
          let a = e.url ? `<a href="${e.url}">` : "",
            i = e.url ? "</a>" : "",
            o = e.url
				? "video" === e.beachhead
				? `<a class="btn" href="${e.url}">Voir la vidéo</a>`
				: `<a class="btn" href="${e.url}">Lire le cas</a>`
				: "",
            n = e.logo
                ? `<img class="logo" src="${e.logo}" alt="${e.title}">`
                : "";
            return `
                  <div class="card ${e.beachhead} ">
                      ${a}
                          <img src="${e.img}" alt="${e.title}">
                              ${n}
                          <h5>
                              ${e.title}
                          </h5>
                          <p>
                              ${e.body}
                          </p>
                          ${o}
                      ${i}
                  </div>
              `;
        })
        .join("");
        a.innerHTML = i;
    }
};

$(document).ready(createCards);