function changeReviews() {
    const reviews = [
        {
            name: "PGS",
            review: "We've found Sunday to be a game-changer in terms of cost-effectiveness. Their approach to merchandise not only delivers high-quality products but also does so in a way that is surprisingly budget-friendly, making them an invaluable partner for our business.",
        },
        {
            name: "Deel",
            review: "Sunday played a pivotal role in streamlining our merchandise operations. Their efficient approach has not only saved us time but has also made the entire process smooth and hassle-free, allowing us to focus more on our core business."
        },
        {
            name: "Interstellar",
            review: "One of the standout features of working with Sunday is the personalized service they provide. Having a fixed contact person makes communication seamless, and their commitment to great personal service has created a strong and enjoyable partnership."
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