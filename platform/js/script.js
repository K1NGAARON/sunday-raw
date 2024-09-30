$(document).ready(function () {
    const content = {
        1: {
            heading: "Streamline your entire merchandise lifecycle:",
            image: "./img/image-1.jpg",
            listItems: [
                "<span class='bold'>Order status & history</span> Follow your orders easily in the platform.",
                "<span class='bold'>Reorder overview</span> See all your branded products in one easy-to-reorder overview.",
                "<span class='bold'>Inventory tracking</span> Keep real-time tabs on stock levels. Organize your company-wide merchandise in virtual department 'closets'.",
                "<span class='bold'>Save recipients & addresses</span> Save preferred sizes and delivery addresses for your recipients.",
                "<span class='bold'>Group orders</span> Set up company group order campaigns to save time and money."
            ]
        },
        2: {
            heading: "Make informed decisions with actionable insights:",
            image: "./img/image-2.jpg",
            listItems: [
                "<span class='bold'>Keep track of your merch</span> Monitor who receives what merchandise in what campaign.",
                "<span class='bold'>Engagement analytics</span> Track how your merchandise is performing in the real world.",
                "<span class='bold'>Wearability statistics</span> Get live feedback on the wearing frequency of your items.",
                "<span class='bold'>Merchandise impressions</span> Understand the reach and visibility of your branded items.",
                "<span class='bold'>Track ambassadors</span> Discover your real brand ambassadors and activate them."
            ]
        },
        3: {
            heading: "Optimize your merchandise distribution:",
            image: "./img/image-3.jpg",
            listItems: [
                "<span class='bold'>Global logistics</span> Coordinate shipping and handling across multiple regions effortlessly. Our platform takes care of customs.",
                "<span class='bold'>Redeem campaigns</span> Set up beautiful campaigns to offer recipients a choice and gather their information for delivery.",
                "<span class='bold'>Event campaigns</span> Send merchandise in bulk to your next event and track all prospects in the platform.",
                "<span class='bold'>Your merchandise store</span> We assist you in setting up a custom shop for employees, customers or fans, allowing them to make purchases using coins or real money.",
                "<span class='bold'>World class support</span> Our team of merchandise and logistics experts is ready to assist you with any issues that arise."
            ]
        }
    };

    // Handle nav-item click
    $('.why-wrapper-nav .nav-item').click(function () {
        $('.why-wrapper-nav .nav-item').removeClass('active');
        $(this).addClass('active');

        // Get the index of the clicked item (1, 2, or 3)
        const index = $('.why-wrapper-nav .nav-item').index(this) + 1;

        $('.why-wrapper h3').text(content[index].heading);

        $('.why-wrapper .why-wrapper-image').attr('src', content[index].image);

        // Change the list items
        const list = $('.why-wrapper ul');
        list.empty(); // Clear current list items
        content[index].listItems.forEach(function (item) {
            list.append('<li>' + item + '</li>');
        });
    });
});