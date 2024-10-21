const target = document.querySelector(".section.content > .row > .wrapper"),
content = [
{
	title:
		"Maximizing Success: How Beer Brands can use Brand Extension to their advantage",
	body: "We probably all can think of an example: a beer company that uses its brand name to introduce a new product.",
	img: "/blog/brand-extensions-beer-brands/img/banner.jpg",
	url: "/blog/brand-extensions-beer-brands/",
	beachhead: "marketing",
},
{
	title: "How To Prevent Quiet Quitting",
	body: "During the last year, a new expression has impacted the corporate world: Quiet Quitting.",
	img: "/blog/how-to-prevent-quiet-quitting/img/banner.jpg",
	url: "/blog/how-to-prevent-quiet-quitting/",
	beachhead: "hr",
},
{
	title:
		"5 practical tips on How to put together the Best Swag Bag for your next event",
	body: "Who doesn't love gifts? Stay top of mind with your prospects, customers and even possible new hires at your next",
	img: "/blog/best-swag-bag/img/banner.jpg",
	url: "/blog/best-swag-bag/",
	beachhead: "fairs",
},
{
	title: "The Most Effective Employee Retention Strategy in 2023",
	body: "Employees are an important part of any business. They're often the face of your company, so keeping them happy is key.",
	img: "/blog/employee-retention-strategy-2023/img/banner.jpg",
	url: "/blog/employee-retention-strategy-2023/",
	beachhead: "hr",
},
{
	title: "The 4 employer branding trends that you should follow",
	body: "Employer branding is the secret to attracting the best talent from within the industry.",
	img: "/blog/employer-branding-trends/img/banner.jpg",
	url: "/blog/employer-branding-trends/",
	beachhead: "hr",
},
{
	title: "How long does it take to onboard a new employee?",
	body: "If you're looking to hire new employees, it‘s important to understand how long it will take to onboard them. There are several reasons why knowing this timeframe is beneficial.",
	img: "/blog/how-long-to-onboard-employee/img/banner.jpg",
	url: "/blog/how-long-to-onboard-employee/",
	beachhead: "hr",
},
{
	title: "How to make your employees happy and healthy",
	body: "The wellbeing of employees throughout the organization will be significantly improved by taking note of your team's needs.",
	img: "/blog/make-employees-happy/img/banner.jpg",
	url: "/blog/make-employees-happy/",
	beachhead: "hr",
},
{
	title: "7 Ways to Make Your Next Conference or Event More Sustainable",
	body: "There's no denying that events have an impact on our environment.",
	img: "/blog/make-your-event-more-sustainable/img/banner.jpg",
	url: "/blog/make-your-event-more-sustainable/",
	beachhead: "fairs",
},
{
	title: "What are Pantone colors?",
	body: "The basic elements of a good branding are: a catchy name, a recognizable logo, a clear typography and popping colors.",
	img: "/blog/what-are-pantone-colors/img/banner.jpg",
	url: "/blog/what-are-pantone-colors/",
	beachhead: "design",
},
{
	title: "Why is the onboarding process important?",
	body: "In the world of human resources, onboarding is a term many are familiar with. But when you step outside of HR, candidates and new hires may not have a clear understanding of what exactly the onboarding process involves.",
	img: "/blog/why-is-onboarding-important/img/banner.png",
	url: "/blog/why-is-onboarding-important/",
	beachhead: "hr",
},
{
	title: "4 Strategies to Boost your Employee Retention",
	body: "Employee retention is a critical issue for organizations, as high turnover can be costly and disruptive.",
	img: "/blog/boost-employee-retention/img/banner.jpg",
	url: "/blog/boost-employee-retention/",
	beachhead: "hr",
},
{
	title:
		"What Is a Merchandising Company and How Can It Help Your Business?",
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
	title:
		"The Power of Branded Merchandise: Engaging and Motivating Your Team Members",
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
	title:
		"Keep Your Team Engaged: 6 Strategies to Boost Employee Motivation",
	body: "Learn six effective strategies to keep all employees on your team engaged and motivated.",
	img: "/blog/6-strategies-boost-motivation/img/banner.jpg",
	url: "/blog/6-strategies-boost-motivation/",
	beachhead: "",
},
{
	title: "The Metrics You Need: A Complete Guide to Measuring Merchandise Impact",
	body: "Merchandise is more than just a freebie—it's a powerful tool for driving brand awareness, building customer loyalty, and turning satisfied customers into brand ambassadors.",
	img: "/blog/measure-merchandise-impact/img/banner.jpg",
	url: "/blog/measure-merchandise-impact/",
	beachhead: "",
},
{
	title: "14 Holiday Campaign Success Stories: How Brands Connected with Audiences",
	body: "",
	img: "/blog/14-holiday-success-stories/img/banner.jpg",
	url: "/blog/14-holiday-success-stories/",
	beachhead: "",
},
{
	title: "The Ultimate guide to welcome gifts for new employees in 2025",
	body: "",
	img: "/blog/ultimate-guide-to-welcome-gifts-2025/img/banner.jpg",
	url: "/blog/ultimate-guide-to-welcome-gifts-2025/",
	beachhead: "",
},
{
	title: "Mastering the Design Brief: How to Create Effective Briefings for Premium Merchandise Collections",
	body: "",
	img: "/blog/how-to-create-effective-merch-briefings/img/banner.jpg",
	url: "/blog/how-to-create-effective-merch-briefings/",
	beachhead: "",
},
{
	title: "How to Slash Event Merchandise Costs by 40%: A Step-by-Step Guide",
	body: "",
	img: "/blog/how-to-slash-event-merch-costs/img/banner.jpg",
	url: "/blog/how-to-slash-event-merch-costs/",
	beachhead: "",
},
{
	title: "Design inspiration: 20 eye-catching merchandise collections from a range of industries.",
	body: "",
	img: "/blog/20-eye-catching-merch-collections/img/banner.jpg",
	url: "/blog/20-eye-catching-merch-collections/",
	beachhead: "",
},
{
	title: "Cheap vs. Quality Merchandise: A clear analysis of the true costs",
	body: "",
	img: "/blog/cheap-vs-quality-merch/img/banner.jpg",
	url: "/blog/cheap-vs-quality-merch/",
	beachhead: "",
},
{
	title: "The 10% Rule: Your Key to Perfect Custom Merchandise Every Time",
	body: "",
	img: "/blog/the-key-to-perfect-merch/img/banner.jpg",
	url: "/blog/the-key-to-perfect-merch/",
	beachhead: "",
},
{
	title: "From strategy to delivery: How Sunday raises the bar beyond traditional suppliers",
	body: "",
	img: "/blog/how-sunday-raises-the-bar/img/banner.jpg",
	url: "/blog/how-sunday-raises-the-bar/",
	beachhead: "",
},
{
	title: "Memo to the CEO: The strategic importance of merchandise in our marketing plan",
	body: "",
	img: "/blog/strategic-importance-of-merch-in-marketing/img/banner.jpg",
	url: "/blog/strategic-importance-of-merch-in-marketing/",
	beachhead: "",
},
{
	title: "Unlocking efficiency: The advantages of centralizing merchandise across departments (And how to start)",
	body: "",
	img: "/blog/the-advantages-of-centralizing-merch/img/banner.jpg",
	url: "/blog/the-advantages-of-centralizing-merch/",
	beachhead: "",
},
{
	title: "49 Creative Merch Campaigns You’ll Want to Copy",
	body: "",
	img: "/blog/49-creative-merch-campaigns/img/banner.jpg",
	url: "/blog/49-creative-merch-campaigns/",
	beachhead: "",
},
{
	title: "17 Irresistible Year-End Gifts Your Customers Won’t Forget in 2025",
	body: "",
	img: "/blog/17-irresistible-year-end-gifts-in-2025/img/banner.jpg",
	url: "/blog/17-irresistible-year-end-gifts-in-2025/",
	beachhead: "",
},
{
	title: "20 End-of-Year Gifts to Show Appreciation and Leave a Lasting Impression on Your Partners",
	body: "",
	img: "/blog/20-end-of-year-gifts-for-partners/img/banner.jpg",
	url: "/blog/20-end-of-year-gifts-for-partners/",
	beachhead: "",
},
{
	title: "27 corporate gifts your coworkers will love in 2024",
	body: "",
	img: "/blog/27-corporate-gifts/img/banner.jpg",
	url: "/blog/27-corporate-gifts/",
	beachhead: "",
},
{
	title: "The 10 most difficult countries to ship merchandise to and how to overcome the challenges",
	body: "",
	img: "/blog/10-most-difficult-countries-to-ship-merch-towards/img/banner.jpg",
	url: "/blog/10-most-difficult-countries-to-ship-merch-towards/",
	beachhead: "",
},
{
	title: "The 5 Most Common Challenges When Scaling Branded Merchandise (and How to Tackle Them)",
	body: "",
	img: "/blog/top-5-challenges-when-scaling-branded-merch/img/banner.jpg",
	url: "/blog/top-5-challenges-when-scaling-branded-merch/",
	beachhead: "",
},
{
	title: "90 Days to Success: Your First Project with Sunday",
	body: "",
	img: "/blog/90-days-to-success-with-sunday/img/banner.jpg",
	url: "/blog/90-days-to-success-with-sunday/",
	beachhead: "",
},
{
	title: "Discover how to budget your employee merchandise spend for maximum impact and engagement - without the guesswork",
	body: "",
	img: "/blog/discover-how-to-budget-employee-merch/img/banner.jpg",
	url: "/blog/discover-how-to-budget-employee-merch/",
	beachhead: "",
},
{
	title: "Copy this proven merch strategy to dominate your next industry fair!",
	body: "",
	img: "/blog/proven-merch-strategy-for-your-next-fair/img/banner.jpg",
	url: "/blog/proven-merch-strategy-for-your-next-fair/",
	beachhead: "",
},
{
	title: "Why the best time to evaluate your merchandise is when you don’t have a project.",
	body: "",
	img: "/blog/the-best-time-to-evaluate-merch/img/banner.jpg",
	url: "/blog/the-best-time-to-evaluate-merch/",
	beachhead: "",
},
{
	title: "Read our scientific research with University Brussels on the impact of merchandise on employee engagement and customer perception. It’s the only one in the world!",
	body: "",
	img: "/blog/scientific-research-on-the-impact-of-merch/img/banner.jpg",
	url: "/blog/scientific-research-on-the-impact-of-merch/",
	beachhead: "",
},
{
	title: "Why outsourcing your merchandise logistics is the smart move you didn't know you needed",
	body: "",
	img: "/blog/why-outsourcing-merch-logistics-is-smart/img/banner.jpg",
	url: "/blog/why-outsourcing-merch-logistics-is-smart/",
	beachhead: "",
},
{
	title: "The Ultimate Guide to building a Dealer merchandise and incentive program",
	body: "",
	img: "/blog/ultimate-guide-to-building-a-dealer-merch-program/img/banner.jpg",
	url: "/blog/ultimate-guide-to-building-a-dealer-merch-program/",
	beachhead: "",
},
{
	title: "How to build an employee merchandise and incentive program",
	body: "",
	img: "/blog/how-to-build-an-employee-merch-incentive-program/img/banner.jpg",
	url: "/blog/how-to-build-an-employee-merch-incentive-program/",
	beachhead: "",
},
{
	title: "The 80/20 rule of merchandise: How wearables and gadgets work together",
	body: "",
	img: "/blog/the-80-20-rule-of-merch/img/banner.jpg",
	url: "/blog/the-80-20-rule-of-merch/",
	beachhead: "",
},
{
	title: "5 Ways to maximize the impact of your merchandise launch",
	body: "",
	img: "/blog/5-ways-to-maximize-the-impact-of-your-merch-launch/img/banner.jpg",
	url: "/blog/5-ways-to-maximize-the-impact-of-your-merch-launch/",
	beachhead: "",
},
// {
// 	title: "",
// 	body: "",
// 	img: "",
// 	url: "",
// 	beachhead: "",
// },
];

function createCards() {
	content.reverse().map(e => {
	  let o = `
			  <div class="card ${e.beachhead}">
				  <a href="${e.url}">
					  <img src="${e.img}" alt="${e.title}">
					  <h5>
						  ${e.title}
					  </h5>
  
					  <a class="btn dark-blue-btn" href="${e.url}">
						  Read the blog
					  </a>
				  </a>
			  </div>
		  `;
	  target.insertAdjacentHTML("beforeend", o);
	});
}
  
$(document).ready(createCards);  
