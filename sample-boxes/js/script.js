const boxes = [
    {
        title: "Fairs & Events box",
        body: "Planning an event or visiting a fair? Make a lasting impression by handing out a quality branded items.",
        img: '/sample-boxes/img/fairs.jpg',
        btn: 'fairs'
    },
    {
        title: "Workplace health box",
        body: "How do you recognise a team? That's easy, by the way they are dressed: they all wear the same outfit.",
        img: '/sample-boxes/img/workplace.jpg',
        btn: 'workplace'
    }, 
];

function createCards(e) {
    let target = document.querySelector('#boxesHolder');
    for (let i = 0; i < boxes.length; i++) {
        let template = `
            <div class="card">
                <img src="${boxes[i].img}" alt="${boxes[i].title}">
                <h5>
                    ${boxes[i].title}
                </h5>
                <p>
                    ${boxes[i].body}
                </p>
                <div class="btn-wrapper">
                    <a href="#contact" class="btn request">Request free sample</a>
                    <a class="btn inside ${boxes[i].btn}">What's in the box?</a>
                </div>
            </div>
        `;
        target.insertAdjacentHTML('beforeend', template);
    }
};

// $(document).ready(createCards);


// Get the modal
let modal = document.querySelector(".modal");
let modalBtn = document.querySelector(".fairs");
let span = document.querySelector(".close");

// When the user clicks on the button, open the modal
modalBtn.addEventListener('click', function() {
    modal.style.display = "block";
});

span.addEventListener('click', function(e) {
    modal.style.display = "none";
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
      }
});