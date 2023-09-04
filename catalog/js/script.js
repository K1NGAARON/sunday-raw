function showProduct(e) {
  $(".product-image").removeClass("active"), $(this).addClass("active");
  let t = document.querySelector(".product-image.active").src;
  $(document.querySelector("#main-image")).attr("src", t);
}
const stepsContent = [
  {
    title: "Brand guidelines",
    body: "The first step before anything gets designed is having a look at your brand guidelines. Logo, colors, typography, … everything that makes you unique.",
    img: "",
  },
  {
    title: "Fashion trends",
    body: "Our design department follows up on fashion trends and translates them in wearable designs that match your brand identity. That way we create clothing that is on-brand and on-trend.",
    img: "",
  },
  {
    title: "Target audience",
    body: "Depending on the target audience, the design and fit of the clothing will be different. We want the people who receive your clothes to become real ambassadors of your brand and that they can wear it as often as possible. This will only work if we match the product, design and fitting to your target audience.",
    img: "",
  },
  {
    title: "Clothing purpose",
    body: "What would you like to reach with this collection? From brand awareness to getting your team adopt a more healthy lifestyle, we guide you through the best products and materials.",
    img: "",
  },
];
function changeSteps(e) {
  let t = document.querySelector("#stepsBody"),
    a = document.querySelector("#stepsIMG"),
    o = e.target.id;
  $(".step").removeClass("active"),
    $(this).addClass("active"),
    "company-branding" === o
      ? ($(t).text(`${stepsContent[0].body}`),
        $(a).attr("src", `${stepsContent[0].img}`))
      : "market-trends" === o
      ? ($(t).text(`${stepsContent[1].body}`),
        $(a).attr("src", `${stepsContent[1].img}`))
      : "target-audience" === o
      ? ($(t).text(`${stepsContent[2].body}`),
        $(a).attr("src", `${stepsContent[2].img}`))
      : "project-goal" === o &&
        ($(t).text(`${stepsContent[3].body}`),
        $(a).attr("src", `${stepsContent[3].img}`));
}
const socialProofTarget = document.querySelector("#social-proof"),
  socialProofContent = [
    {
      logo: "/img/logos/adyen-logo.svg",
      body: "Geen zin om jouw werknemers of zakenrelaties dit jaar een doos pralines, een fles cava of een drinkbus cadeau te doen? Kom dit jaar dan origineel uit de hoek met de Streamz Gift Box en geef jouw werknemers een cadeau dat echt entertaint.<br><br>Onze Box heeft het allemaal:<br>✔️ 1 maand Vlaamse en internationale topseries kijken<br>✔️ Ideale binge snacks & drinks van bij onz<br>✔️ Comfy, stijlvolle kousen om je voeten warm te houden<br><br>Een complete entertainmentervaring die je graag cadeau wil doen? Haast je dan naar https://lnkd.in/dYuwH9U5<br><br>Let's get the Streamz party poppin'! 🥳 ",
      img: "https://via.placeholder.com/1200x800",
    },
    {
      logo: "/img/logos/adyen-logo.svg",
      body: "Geen zin om jouw werknemers of zakenrelaties dit jaar een doos pralines, een fles cava of een drinkbus cadeau te doen? Kom dit jaar dan origineel uit de hoek met de Streamz Gift Box en geef jouw werknemers een cadeau dat echt entertaint.<br><br>Onze Box heeft het allemaal:<br>✔️ 1 maand Vlaamse en internationale topseries kijken<br>✔️ Ideale binge snacks & drinks van bij onz<br>✔️ Comfy, stijlvolle kousen om je voeten warm te houden<br><br>Een complete entertainmentervaring die je graag cadeau wil doen? Haast je dan naar https://lnkd.in/dYuwH9U5<br><br>Let's get the Streamz party poppin'! 🥳 ",
      img: "https://via.placeholder.com/1200x800",
    },
    {
      logo: "/img/logos/adyen-logo.svg",
      body: "Geen zin om jouw werknemers of zakenrelaties dit jaar een doos pralines, een fles cava of een drinkbus cadeau te doen? Kom dit jaar dan origineel uit de hoek met de Streamz Gift Box en geef jouw werknemers een cadeau dat echt entertaint.<br><br>Onze Box heeft het allemaal:<br>✔️ 1 maand Vlaamse en internationale topseries kijken<br>✔️ Ideale binge snacks & drinks van bij onz<br>✔️ Comfy, stijlvolle kousen om je voeten warm te houden<br><br>Een complete entertainmentervaring die je graag cadeau wil doen? Haast je dan naar https://lnkd.in/dYuwH9U5<br><br>Let's get the Streamz party poppin'! 🥳 ",
      img: "https://via.placeholder.com/1200x800",
    },
  ];
function shuffleArray(e) {
  e.sort(() => Math.random() - 0.5);
}
function createSocialProof() {
  if (socialProofTarget) {
    shuffleArray(socialProofContent);
    for (let e = 0; e < socialProofContent.length; e++) {
      let t = `
                <div class="card">
                    <img class="logo" src="${socialProofContent[e].logo}" alt="">
                    <p>
                        ${socialProofContent[e].body}
                    </p>
                    <img class="featured" src="${socialProofContent[e].img}">
                </div>
            `;
      socialProofTarget.insertAdjacentHTML("beforeend", t);
    }
  }
}
let modal = document.getElementById("myModal"),
  modalBtn = document.getElementById("sampleBtn"),
  span = document.getElementById("closeModal");
$(modalBtn).click(() => {
  modal.style.display = "block";
}),
  $(span).click((e) => {
    modal.style.display = "none";
  }),
  $(window).click((e) => {
    e.target == modal && (modal.style.display = "none");
  }),
  $(document).ready(createSocialProof),
  $(".step").click(changeSteps),
  $(".product-image").click(showProduct);
