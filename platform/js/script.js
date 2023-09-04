const content = [
  {
    title: "It saves money",
    body: "By grouping all the efforts related to clothing instead of having tonnes of shredded initiatives, our customer typically save up to 50% per year in costs.",
    img: "./img/usp/save.png",
  },
  {
    title: "It saves time",
    body: "The days of going through the entire order-hassle for each initiative your team wants to take, are finally over. You have your catalog at hand, always ready to go!",
    img: "./img/usp/save-time.png",
  },
  {
    title: "It provides data insights",
    body: "Because everything is centralized, it's super easy to collect lots of data-points, which then translate into valuable data insights, accessible from the platform.",
    img: "./img/usp/data.png",
  },
  {
    title: "There's zero waste",
    body: "Had a fair or an event where you used less fashion items than foreseen? That's no issue, put the products back into your Virtual Wardrobe and use them in a different campaign.",
    img: "./img/usp/zero-waste.png",
  },
  {
    title: "It's GDPR compliant",
    body: "​​Once you start using the platform, a lot of sensitive data will be added to the database. Not to worry though: the data is accessible only to those that are authorized to access it.",
    img: "./img/usp/gdpr.png",
  },
  {
    title: "Brand consistency",
    body: "By giving your team access to the centrally stored collection(s), you make sure they only use items that are 100% consistent and on brand.",
    img: "./img/usp/consistent.png",
  },
];

function toggleUSP(e) {
  $(".usp-btn").removeClass("active");
  $(this).addClass("active");

  activeUSP = e.target.id;

  let uspTitle = document.querySelector("#headlineHolder");
  let uspBody = document.querySelector("#uspBody");
  let uspIMG = document.querySelector("#imageHolder");

  if (activeUSP === "save-money") {
    $(uspTitle).text(`${content[0].title}`);
    $(uspBody).text(`${content[0].body}`);
    $(uspIMG).attr("src", `${content[0].img}`);
  } else if (activeUSP === "efficient") {
    $(uspTitle).text(`${content[1].title}`);
    $(uspBody).text(`${content[1].body}`);
    $(uspIMG).attr("src", `${content[1].img}`);
  } else if (activeUSP === "data") {
    $(uspTitle).text(`${content[2].title}`);
    $(uspBody).text(`${content[2].body}`);
    $(uspIMG).attr("src", `${content[2].img}`);
  } else if (activeUSP === "zero-waste") {
    $(uspTitle).text(`${content[3].title}`);
    $(uspBody).text(`${content[3].body}`);
    $(uspIMG).attr("src", `${content[3].img}`);
  } else if (activeUSP === "gdpr") {
    $(uspTitle).text(`${content[4].title}`);
    $(uspBody).text(`${content[4].body}`);
    $(uspIMG).attr("src", `${content[4].img}`);
  } else if (activeUSP === "brand") {
    $(uspTitle).text(`${content[5].title}`);
    $(uspBody).text(`${content[5].body}`);
    $(uspIMG).attr("src", `${content[5].img}`);
  }
}

$(".usp-btn").click(toggleUSP);
