const possibleFilters=["HR","Sales","Marketing"];function showAll(){$(".card").removeClass("hidden")}function hideAll(){$(".card").addClass("hidden")}function filterContent(e){let l=$(this).children("option:selected").val();console.log(l),"hr"===l?(hideAll(),$(".card.hr").removeClass("hidden")):"sales"===l?(hideAll(),$(".card.sales").removeClass("hidden")):"marketing"===l&&(hideAll(),$(".card.marketing").removeClass("hidden"))}$("#category").change(filterContent),$("#clear-all").click(showAll);