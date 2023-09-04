const values = [
  {
    value: "Value Driven",
    title: "What we do is about our customers",
    body: "We make it our business to understand our customers and their business. Consequently, we deliver made-to measure solutions and services at an industry-leading level. We take pride in our work, but only after we have achieved the best results. Our ultimate goal is to consistently deliver the highest value for our customers.",
    img: "/careers/img/values/image1.jpg",
  },
  {
    value: "Holistic",
    title: "We look at the total picture",
    body: "End to end, we keep a helicopter overview on the process, to ensure we don't miss out on any detail. Our customers can rest assured that we have already taken action to solve the unexpected. We aim for long term solutions that help everybody involved in the project, instead of short term fixes that harm others.",
    img: "/careers/img/values/image2.jpg",
  },
  {
    value: "Growth",
    title: "We care deeply about our employees, our customers and our partners",
    body: "Everything we do is linked to creating real ambassadorship internally and externally. Helping people unlock their true potential is at the core of our organisation.",
    img: "/careers/img/values/image3.jpg",
  },
  {
    value: "Worldly",
    title: "We take up responsibility for our planet and purpose",
    body: "We challenge industry standards by always taking the option of sustainability in our ideas, approach and operations. Fair pay and good working conditions for collaborators and suppliers is a matter of course. Our team consists of top professionals with a high degree of EQ and understanding of the world.",
    img: "/careers/img/values/image4.jpg",
  },
  {
    value: "Ownership",
    title: "Our customers expect us to know and inspire them",
    body: "They are carefree because we are meeting our commitments and take ownership. We operate at a world-class level because we constantly challenge ourselves to continuous improvement. We work as a team and use the expertise of the whole to make ourselves, our ideas and our execution better every day.",
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
