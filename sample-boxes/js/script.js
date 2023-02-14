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
let modal = document.querySelectorAll('.modal');

let modalFairs = document.querySelector(".modal.fairs");
let modalFairsBtn = document.querySelector(".fairs");

let modalWorkplace = document.querySelector(".modal.workplace");
let modalWorkplaceBtn = document.querySelector(".workplace");

let span = document.querySelector(".close");

// When the user clicks on the button, open the modal
modalFairsBtn.addEventListener('click', function() {
    modalFairs.style.display = "block";
});

window.addEventListener('click', function(e) {
    if (e.target == modalFairs) {
        modalFairs.style.display = "none";
      }
});


// When the user clicks on the button, open the modal
modalWorkplaceBtn.addEventListener('click', function() {
    modalWorkplace.style.display = "block";
});

$('.close').click(function() {
    $('.modal').hide();
})

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
      }
});