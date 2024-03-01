function changeReviews() {
  const reviews = [
    {
      name: "PGS",
      review:
        "Nous avons constaté que Sunday changeait la donne en termes de rentabilité. Son approche de la marchandise permet non seulement de fournir des produits de haute qualité, mais aussi de respecter le budget, ce qui en fait un partenaire inestimable pour notre entreprise.",
    },
    {
      name: "Deel",
      review:
        "Sunday a joué un rôle essentiel dans la rationalisation de nos opérations sur les marchandises. Leur approche efficace nous a non seulement fait gagner du temps, mais a également rendu l'ensemble du processus fluide et sans tracas, ce qui nous a permis de nous concentrer davantage sur notre cœur de métier.",
    },
    {
      name: "Interstellar",
      review:
        "L'une des principales caractéristiques de la collaboration avec Sunday est le service personnalisé qu'elle offre. Le fait d'avoir une personne de contact fixe rend la communication transparente, et leur engagement à fournir un service personnel de qualité a permis de créer un partenariat solide et agréable.",
    },
  ];

  $(".dot").removeClass("active");
  $(this).addClass("active");

  const dotIndex = $(".dot").index(this);
  const reviewContainer = $(".review-wrapper");

  reviewContainer.find(".review-author").text(reviews[dotIndex].name);
  reviewContainer.find(".review-body").text(reviews[dotIndex].review);
}

$(".dot").click(changeReviews);

function animate(obj, initVal, lastVal, duration) {
  let startTime = null;

  const step = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }

    const progress = Math.min((currentTime - startTime) / duration, 1);
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

let text1 = document.getElementById("number-1");
let text2 = document.getElementById("number-2");
let text3 = document.getElementById("number-3");

let speed = 2000;

let animatedSection = document.querySelector(".animated-wrapper");

function load() {
  animate(text1, 0, 19, speed);
  animate(text2, 0, 21, speed);
  animate(text3, 0, 26, speed);
}

// Intersection Observer configuration
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// Flag to ensure load() runs only once
let hasRun = false;

const sectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !hasRun) {
    load();
    hasRun = true;
    // Disconnect the observer after running the animation
    sectionObserver.disconnect();
  }
}, observerOptions);

sectionObserver.observe(animatedSection);
