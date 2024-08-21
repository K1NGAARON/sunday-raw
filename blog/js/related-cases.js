const content = [
  {
      title: "The Metrics You Need: A Complete Guide to Measuring Merchandise Impact",
      tag: "",
      body: "Merchandise is more than just a freebie—it's a powerful tool for driving brand awareness, building customer loyalty, and turning satisfied customers into brand ambassadors.",
      img: "/blog/measure-merchandise-impact/img/banner.jpg",
      url: "/blog/measure-merchandise-impact/"
  },
  {
      title: "14 Holiday Campaign Success Stories: How Brands Connected with Audiences",
      tag: "",
      body: "",
      img: "/blog/14-holiday-success-stories/img/banner.jpg",
      url: "/blog/14-holiday-success-stories/"
  },
  {
      title: "The Ultimate guide to welcome gifts for new employees in 2025",
      tag: "",
      body: "",
      img: "/blog/ultimate-guide-to-welcome-gifts-2025/img/banner.jpg",
      url: "/blog/ultimate-guide-to-welcome-gifts-2025/"
  },
  {
      title: "Mastering the Design Brief: How to Create Effective Briefings for Premium Merchandise Collections",
      tag: "",
      body: "",
      img: "/blog/how-to-create-effective-merch-briefings/img/banner.jpg",
      url: "/blog/how-to-create-effective-merch-briefings/"
  },
  // {
  //     title: "",
  //     tag: "",
  //     body: "",
  //     img: "/blog/",
  //     url: "/blog/"
  // },
  // {
  //     title: "",
  //     tag: "",
  //     body: "",
  //     img: "/blog/",
  //     url: "/blog/"
  // },
];

function createCards(e) {
  const target = document.querySelector('.related-content .wrapper');
  const shuffledArray = content.sort((a, b) => 0.5 - Math.random());
  const slicedArray = shuffledArray.slice(0, 3);
  
  const cards = slicedArray.reverse().map(item => {
      return `
          <div class="card ${item.tag}">
              <img src="${item.img}" alt="${item.title}">
              <h5>
                  ${item.title}
              </h5>
              <a href="${item.url}" class="btn">
                  Read more
              </a>
          </div>
      `;
  }).join('');

  target.innerHTML = cards;
}

$(document).ready(function() {
  createCards();
});