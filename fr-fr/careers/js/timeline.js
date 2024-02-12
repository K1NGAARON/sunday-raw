// Timeline component
let timelineToggle = document.querySelectorAll(".steps-toggle");

function removeActiveTimeline() {
    for(let i = 0; i < timelineToggle.length; i++) {
        timelineToggle[i].classList.remove("active");
    }
};

$('.single-item').click(function(e){
    removeActiveTimeline();
    $(this).find('.steps-toggle').toggleClass('active');
});


const timelineSteps = [
    {
        stepTitle : "Entretien avec l'équipe RH",
        stepBody : "Nous avons reçu votre CV et lettre de motivation : notre recruteur international organisera une première rencontre avec vous pour mieux vous connaître et parler de vos objectifs futurs."
    },
    {
        stepTitle : "Entretien avec le manager direct",
        stepBody : "Vous avez bien fait, nous pensons qu'il pourrait y avoir une correspondance : rencontrez votre (futur) manager."
    },
    {
        stepTitle : "Entretien avec les fondateurs",
        stepBody : "Nos fondateurs aiment vous rencontrer et voir s'ils ressentent également la correspondance."
    },
    {
        stepTitle : "Bienvenue à bord !",
        stepBody : "Bienvenue à bord ! Nous vous guiderons à travers vos premiers jours avec un processus d'intégration complet."
    },
]

let step1Toggle = document.querySelector("#step-1");
let step2Toggle = document.querySelector("#step-2");
let step3Toggle = document.querySelector("#step-3");
let step4Toggle = document.querySelector("#step-4");

// Timelineholder 
let timelineTitle = document.querySelector("#body-title");
let timelineBody = document.querySelector("#body-text");

// Step 1
step1Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[0].stepTitle;
    timelineBody.innerHTML = timelineSteps[0].stepBody;
});

// Step 2
step2Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[1].stepTitle;
    timelineBody.innerHTML = timelineSteps[1].stepBody;
});

// Step 3
step3Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[2].stepTitle;
    timelineBody.innerHTML = timelineSteps[2].stepBody;
});

// Step 4
step4Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[3].stepTitle;
    timelineBody.innerHTML = timelineSteps[3].stepBody;
});