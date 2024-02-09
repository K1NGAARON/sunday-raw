const reviews = [
    {
        body: `
            “Nous organisons plus de 400 événements à travers le monde. Sunday Wardrobe nous aide à gérer toute la logistique très facilement.”
        `,
        url: "/cases/deel/",
        logo: "/platform/img/deel-logo.png",
        mockup: "/platform/img/mock-up-deel.png",
    },
    {
        body: `
            “Automatiser les parrainages clients : envoi de 800 boîtes de remerciement à de nouveaux clients chaque mois.”
        `,
        url: "/cases/zolar/",
        logo: "/cases/zolar/img/zolar-logo.png",
        mockup: "/platform/img/zolar-mock.png",
    },
    {
        body: `
            “Introduire une boutique web interne conviviale n'a pas seulement rationalisé nos activités de marchandise, mais a également augmenté la participation et la satisfaction des employés.”
        `,
        url: "/cases/pgs/",
        logo: "/cases/pgs/img/pgs-logo.png",
        mockup: "/platform/img/pgs-mock.png",
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