const freebies = [
    {
        title: "Fashion trend report for businesses in 2022",
        body: "",
        img: '/freebies/trend-report/img/trend-report.png',
        url: ''
    },
    {
        title: "Download our lookbook",
        body: "",
        img: '',
        url: ''
    },
];

function createCards() {
    const target = document.querySelector('#freebiesContent');

    for (let i = 0; i < freebies.length; i++) {
        const template = `
        <div>
            ${freebies[i].title}
            
        </div>
        <img src="${freebies[i].img}">
        `;
        target.insertAdjacentHTML("afterbegin", template);
    };
};

// $(document).ready(createCards);