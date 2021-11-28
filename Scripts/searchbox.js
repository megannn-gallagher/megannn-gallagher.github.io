$( function() {

    // Add the hard coded page options
    // For the redirect to work, there must be a page with
    // name of the format: companyPage-<id>.html
    availableSearchOptions = [
        {
            id: "Duff",
            label: "Duff Beer"
        },
        {
            id: "Krusty",
            label: "Krusty Burger"
        }
    ];

    $('.homepage-search-box').autocomplete({
        minLength: 1,
        source: availableSearchOptions,
        select: function(event, ui) {
            window.location.href = 'companyPage-' + ui.item.id + '.html';
        }
    })
});