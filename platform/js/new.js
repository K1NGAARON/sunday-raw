const reviews = [
    {
        body: `
            “We host over 400 events globally. Sunday Wardrobe helps us to manage all logistics very easy.”
        `,
        url: "",
        logo: "/platform/img/deel-logo.png",
        mockup: "/platform/img/mock-up-deel.png",
    },
    {
        body: `
            “Body 2”
        `,
        url: "",
        logo: "/platform/img/deel-logo.png",
        mockup: "/platform/img/mock-up-deel.png",
    },
    {
        body: `
            “Body 3”
        `,
        url: "",
        logo: "/platform/img/deel-logo.png",
        mockup: "/platform/img/mock-up-deel.png",
    },
];

let currentIndex = 0;

function updateTestimonial(index) {
    const testimonialContent = document.querySelector('.testimonial-content');
    const logoElement = document.getElementById('logo');
    const bodyElement = document.getElementById('body');
    const urlElement = document.getElementById('url');
    const mockElement = document.getElementById('mockup');

    currentIndex = (index + reviews.length) % reviews.length;

    const currentReview = reviews[currentIndex];

    logoElement.src = currentReview.logo;
    bodyElement.innerHTML = currentReview.body;
    urlElement.href = currentReview.url;
    mockElement.src = currentReview.mockup;
}

document.getElementById('next').addEventListener('click', () => {
    updateTestimonial(currentIndex + 1);
});

document.getElementById('prev').addEventListener('click', () => {
    updateTestimonial(currentIndex - 1);
});

updateTestimonial(currentIndex);