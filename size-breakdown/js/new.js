// GRAB TOGGLES
// GRAB XS ITEM (hidden by default unless the toggle says female)

// ADD ACTIVE CLASS TO ACTIVE TOGGLE
function addActive(e) {
    $('.gender-toggle .toggle').removeClass('active');
    $(this).addClass('active');
}

$('.gender-toggle .toggle').click(addActive);


// ON CHANGE RUN THE SCRIPT