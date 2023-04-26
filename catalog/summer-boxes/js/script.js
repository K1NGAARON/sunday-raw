function toggleButton(e) {
    $(this).toggleClass('active');

    if ($(this).hasClass("active")) {
        $(this).text('Remove from cart');
    } else {
        $(this).text('Add to cart');
    }
}


function addProducts() {
    const form = document.querySelector('.contact-form form');
    const addToBoxBtns = document.querySelectorAll(".item .btn");
  
    // Loop through each button and attach a click event listener
    addToBoxBtns.forEach(btn => {
      btn.addEventListener("click", handleAddToBoxClick);
    });
  
    function handleAddToBoxClick() {
        const productName = this.parentNode.querySelector("h5").textContent.trim();
        
        // Find the checkbox field in the form
        const checkboxField = form.querySelectorAll('[name="product_interest"]');
      
        checkboxField.forEach(checkbox => {
            if (checkbox.value === productName) {
                if (checkbox.checked === false) {
                    checkbox.checked = true;
                } else {
                    checkbox.checked = false;
                }
            }
        });
    }
      
    // Attach click event listener to all "Add to box" buttons
    addToBoxBtns.forEach(btn => {
        btn.addEventListener("click", handleAddToBoxClick);
    });
}
  
window.addEventListener("load", addProducts, { once: true });
  

  

$('.items .btn').click(toggleButton);