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

let animatedSection = document.querySelector('.animated-wrapper');

function load() {
    animate(text1, 0, 19, 3000);
    animate(text2, 0, 21, 3000);
    animate(text3, 0, 26, 3000);
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