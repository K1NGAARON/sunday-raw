const target = document.querySelector('.section.content > .row > .wrapper');
const content = [
    {
        title: "Maximizing Success: How Beer Brands can use Brand Extension to their advantage",
        body: "We probably all can think of an example: a beer company that uses its brand name to introduce a new product.",
        img: '/blog/brand-extensions-beer-brands/img/banner.jpg',
        url: '/blog/brand-extensions-beer-brands/',
        beachhead: 'marketing'
    },
    {
        title: "How To Prevent Quiet Quitting",
        body: "During the last year, a new expression has impacted the corporate world: Quiet Quitting.",
        img: "/blog/how-to-prevent-quiet-quitting/img/banner.jpg",
        url: "/blog/how-to-prevent-quiet-quitting/",
        beachhead: "hr"
    },
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
    },
    {
        title: "4 Strategies to Boost your Employee Retention",
        body: "Employee retention is a critical issue for organizations, as high turnover can be costly and disruptive.",
        img: "/blog/boost-employee-retention/img/banner.jpg",
        url: "/blog/boost-employee-retention/",
        beachhead: 'hr',
    },
    {
        title: "What Is a Merchandising Company and How Can It Help Your Business?",
        body: "Merchandising companies work by sourcing products from manufacturers or wholesalers and then reselling them to consumers.",
        img: "/blog/what-is-a-merchandising-company/img/banner.jpg",
        url: "/blog/what-is-a-merchandising-company/",
        beachhead: "sales",
    },
    {
        title: "Engage and Motivate Your Employees with Branded Merchandise",
        body: "Discover how to use branded merchandise such as hoodies, tote bags, onboarding boxes, and socks to engage and motivate your employees.",
        img: "/blog/engage-and-motivate-employees/img/banner.jpg",
        url: "/blog/engage-and-motivate-employees/",
        beachhead: "hr",
    },
    {
        title: "The Power of Branded Merchandise: Engaging and Motivating Your Team Members",
        body: "Discover how branded merchandise can help engage and motivate your team members, leading to higher productivity, increased retention, improved morale, and enhanced innovation.",
        img: "/blog/the-power-of-branded-merchandise/img/banner.jpg",
        url: "/blog/the-power-of-branded-merchandise/",
        beachhead: "hr",
    },
    {
        title: "The Power of Merchandise: How to Motivate and Engage Employees",
        body: "Discover how merchandise can be a powerful tool for improving employee motivation and engagement.",
        img: "/blog/the-power-of-merch/img/banner.jpg",
        url: "/blog/the-power-of-merch/",
        beachhead: "hr",
    },
    {
        title: "Keep Your Team Engaged: 6 Strategies to Boost Employee Motivation",
        body: "Learn six effective strategies to keep all employees on your team engaged and motivated.",
        img: "/blog/6-strategies-boost-motivation/img/banner.jpg",
        url: "/blog/6-strategies-boost-motivation/",
        beachhead: "",
    },
    // {
    //     title: "",
    //     body: "",
    //     img: "",
    //     url: "",
    //     beachhead: "",
    // },
];

function createCards() {
    for (let i = 0; i < content.length; i++) {
        const template = `
            <div class="card ${content[i].beachhead}">
                <a href="${content[i].url}">
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
                </a>
            </div>
        `;
        target.insertAdjacentHTML("beforeend", template);
    };
};

$(document).ready(createCards);