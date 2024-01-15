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

function changeReviews() {
    const reviews = [
        {
            name: "Client 1",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet quam architecto quae atque! Id pariatur, nobis asperiores error quas delectus nisi ducimus exercitationem?",
        },
        {
            name: "Client 2",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet quam architecto quae atque! Id pariatur, nobis asperiores error quas delectus nisi ducimus exercitationem?"
        },
        {
            name: "Client 3",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet quam architecto quae atque! Id pariatur, nobis asperiores error quas delectus nisi ducimus exercitationem?"
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