const target = document.querySelector('.section.content > .row > .wrapper');
const content = [
    {
        title: '5 practical tips on How to put together the Best Swag Bag for your next event',
        body: "Who doesn't love gifts? Stay top of mind with your prospects, customers and even possible new hires at your next",
        img: '/blog/best-swag-bag/img/banner.jpg',
        url: '/blog/best-swag-bag/',
        beachhead: 'fairs',
    },
    {
        title: 'The Most Effective Employee Retention Strategy in 2023',
        body: "Employees are an important part of any business. They're often the face of your company, so keeping them happy is key.",
        img: '/blog/employee-retention-strategy-2023/img/banner.jpg',
        url: '/blog/employee-retention-strategy-2023/',
        beachhead: 'hr',
    },
    {
        title: 'The 4 employer branding trends that you should follow',
        body: "Employer branding is the secret to attracting the best talent from within the industry.",
        img: '/blog/employer-branding-trends/img/banner.jpg',
        url: '/blog/employer-branding-trends/',
        beachhead: 'hr',
    },
    {
        title: 'How long does it take to onboard a new employee?',
        body: "If you’re looking to hire new employees, it‘s important to understand how long it will take to onboard them. There are several reasons why knowing this timeframe is beneficial.",
        img: '/blog/how-long-to-onboard-employee/img/banner.jpg',
        url: '/blog/how-long-to-onboard-employee/',
        beachhead: 'hr',
    },
    {
        title: 'How to make your employees happy and healthy',
        body: "The wellbeing of employees throughout the organization will be significantly improved by taking note of your team's needs.",
        img: '/blog/make-employees-happy/img/banner.jpg',
        url: '/blog/make-employees-happy/',
        beachhead: 'hr',
    },
    {
        title: '7 Ways to Make Your Next Conference or Event More Sustainable',
        body: "There’s no denying that events have an impact on our environment.",
        img: '/blog/make-your-event-more-sustainable/img/banner.jpg',
        url: '/blog/make-your-event-more-sustainable/',
        beachhead: 'fairs',
    },
    {
        title: 'What are Pantone colors?',
        body: "The basic elements of a good branding are: a catchy name, a recognizable logo, a clear typography and popping colors.",
        img: '/blog/what-are-pantone-colors/img/banner.jpg',
        url: '/blog/what-are-pantone-colors/',
        beachhead: 'design',
    },
    {
        title: 'Why is the onboarding process important?',
        body: "In the world of human resources, onboarding is a term many are familiar with. But when you step outside of HR, candidates and new hires may not have a clear understanding of what exactly the onboarding process involves.",
        img: '/blog/why-is-onboarding-important/img/banner.png',
        url: '/blog/why-is-onboarding-important/',
        beachhead: 'hr',
    }
];

function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card ${content[i].beachhead.toLowerCase()}">
                <img src="${content[i].img}" alt="${content[i].title}">
                <h5>
                    ${content[i].title}
                </h5>
                <p>
                    ${content[i].body}
                </p>
                <a class="btn" href="${content[i].url}">
                    Read the blog
                </a>
            </div>
        `;
        target.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createCards);