function showAll() {
    $('.card').removeClass('hidden');
};

function hideAll() {
    $('.card').addClass('hidden');
};

function filterContent(e) {
    let selectedFilter = $(this).children("option:selected").val();
    console.log(selectedFilter);

    if (selectedFilter === 'belgium') {
        hideAll();
        $('.card.belgium').removeClass('hidden');
    } else if (selectedFilter === 'netherlands') {
        hideAll();
        $('.card.netherlands').removeClass('hidden');
    } else if (selectedFilter === 'germany') {
        hideAll();
        $('.card.germany').removeClass('hidden');
    } else if (selectedFilter === 'ireland') {
        hideAll();
        $('.card.ireland').removeClass('hidden');
    } else if (selectedFilter === 'united-kingdom') {
        hideAll();
        $('.card.united-kingdom').removeClass('hidden');
    }
};


$('#country').change(filterContent);
$('#clear-all').click(showAll);
