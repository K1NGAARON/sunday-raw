function readMore(e) {
  $("#fullBody").toggleClass("active"),
    $("#introBody").toggleClass("active"),
    $("#read-more").hide();
}
const services = [
  {
    title: "Design",
    body: "Our design team starts their vision from a roll of fabric, just like the real fashion brands do. This means that we can create truly unique items for your brand. We don't settle for generic blanc sweaters and t-shirts with a printed logo. But we pride ourselves in designing clothing items that capture the unique essence of your brand, making it something your fans will love to wear.",
    img: "./img/design.png",
  },
  {
    title: "Production",
    body: "Every product we design, we carefully produce to the highest standards in quality and sustainability. We have dedicated production centers in Poland and Turkey making sure we have a close personal collaboration with all selected partners. Our inhouse R&D department gives you the opportunity to create completely custom fashion items from scratch.",
    img: "./img/production.png",
  },
  {
    title: "Global Shipping",
    body: "One of the main challenges our customers face is handling the logistics of the merchandise. The industry standard is that once the products are made, the supplier's job is done. We beg to differ. That's why we built our Wardrobe™ platform. A virtual closet that keeps an overview of your merch including real time stock levels and that helps our customers ship their merchandise globally in a couple of clicks. While we do the hard fulfillment work behind the scenes.",
    img: "./img/shipping.png",
  },
  {
    title: "Service",
    body: `
            Our customer is at the center of our business. That's why it is our only goal to make their lives better by:
            <br>
            <ul>
                <li>
                    Creating beautiful custom products that actually deliver results
                </li>
                <li>
                    Consistently investing in processes and software solutions that make their lives easier (Wardrobe™, Realistic 3D designs, Remote size gathering tool,...)
                </li>
                <li>
                    Helping and advising our clients during the whole process on a personal level. Because this is mainly a hassle for companies and we are the experts in textiles, we make the customer journey comfortable. From tweaking the products making sure they fit in your budget to suggesting size ranges, our team is there to support you with personal service every step of the way.
                </li>
            </ul>
        `,
    img: "./img/service.png",
  },
];
function showService(e) {
  $(".service-btn").removeClass("active"), $(this).addClass("active");
  let t = e.target.id,
    i = document.querySelector("#serviceTitle"),
    s = document.querySelector("#serviceBody"),
    r = document.querySelector("#serviceIMG");
  "design" === t
    ? ($(i).text(`${services[0].title}`),
      $(s).text(`${services[0].body}`),
      $(r).attr("src", `${services[0].img}`))
    : "production" === t
    ? ($(i).text(`${services[1].title}`),
      $(s).text(`${services[1].body}`),
      $(r).attr("src", `${services[1].img}`))
    : "shipping" === t
    ? ($(i).text(`${services[2].title}`),
      $(s).text(`${services[2].body}`),
      $(r).attr("src", `${services[2].img}`))
    : "service" === t &&
      ($(i).text(`${services[3].title}`),
      $(s).html(`${services[3].body}`),
      $(r).attr("src", `${services[3].img}`));
}
$(".service-btn").click(showService), $("#read-more").click(readMore);
