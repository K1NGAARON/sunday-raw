function toggleButton(e) {
    $(this).toggleClass('active');

    if ($(this).hasClass("active")) {
        $(this).text('Remove from box');
    } else {
        $(this).text('Add to cart');
    }
}


function addProducts() {
    const form = document.querySelector('.side .contact-form form');
    const addToBoxBtns = document.querySelectorAll(".item .btn");
    const estimatedPriceElement = document.querySelector('.estimated-price');
    let estimatedPrice = 0;
  
    // Loop through each button and attach a click event listener
    addToBoxBtns.forEach(btn => {
      btn.addEventListener("click", handleAddToBoxClick);
    });
  
    function handleAddToBoxClick() {
        const productName = this.parentNode.querySelector("h5").textContent.trim();
        const productPrice = parseFloat(this.dataset.price);
        
        // Find the checkbox field in the form
        const checkboxField = form.querySelectorAll('[name="product_interest"]');
      
        checkboxField.forEach(checkbox => {
            if (checkbox.value === productName) {
                if (checkbox.checked === false) {
                    checkbox.checked = true;
                    estimatedPrice += productPrice;
                } else {
                    checkbox.checked = false;
                    estimatedPrice -= productPrice;
                }
            }
        });
    
        // Update the counter element
        const counter = document.querySelector(".counter");
        counter.textContent = `${estimatedPrice.toFixed(2)}`;
    }
    
      
    // Attach click event listener to all "Add to box" buttons
    addToBoxBtns.forEach(btn => {
        btn.addEventListener("click", handleAddToBoxClick);
    });
}
  
window.addEventListener("load", addProducts, { once: true });

  

  

$('.items .btn').click(toggleButton);