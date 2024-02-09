function changeReviews() {
    const reviews = [
        {
            name: "iO",
            review: "L'expertise de Sunday dépasse le cadre habituel, comme ils l'ont démontré en comprenant parfaitement notre marché de niche.",
        },
        {
            name: "AVR",
            review: "Sunday a été d'une grande aide pour stimuler notre approche de gestion des distributeurs. Leurs solutions innovantes ont non seulement rationalisé nos processus, mais nous ont également permis de gérer efficacement nos distributeurs, favorisant de meilleures relations et améliorant la collaboration globale dans notre réseau d'affaires."
        },
        {
            name: "Anydesk",
            review: "Sunday est bien plus qu'un fournisseur de marchandise ; ce sont de véritables experts dans leur domaine. Leurs conseils avisés ont été déterminants dans la définition de notre stratégie de marchandise, garantissant que chaque produit s'aligne parfaitement avec notre marque et résonne avec nos clients."
        }
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);

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

let text1 = document.getElementById('number-1');
let text2 = document.getElementById('number-2');
let text3 = document.getElementById('number-3');

let speed = 2000

let animatedSection = document.querySelector('.animated-wrapper');

function load() {
    animate(text1, 0, 19, speed);
    animate(text2, 0, 21, speed);
    animate(text3, 0, 26, speed);
}

// Intersection Observer configuration
const observerOptions = {
    root: null,
    rootMargin: '0px',
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