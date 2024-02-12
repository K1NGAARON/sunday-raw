const possibleFilters = [
    'HR',
    'Sales',
    'Marketing'
];

function showAll() {
    $('.card').removeClass('hidden');
};

function hideAll() {
    $('.card').addClass('hidden');
};

function filterContent(e) {
    let selectedFilter = $(this).children("option:selected").val();
    console.log(selectedFilter);

    if (selectedFilter === 'hr') {
        hideAll();
        $('.card.hr').removeClass('hidden');
    } else if (selectedFilter === 'sales') {
        hideAll();
        $('.card.sales').removeClass('hidden');
    } else if (selectedFilter === 'marketing') {
        hideAll();
        $('.card.marketing').removeClass('hidden');
    }
};

$('#category').change(filterContent);
$('#clear-all').click(showAll);