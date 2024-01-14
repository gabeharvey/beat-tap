//Declaring variables
const artistSearch = document.getElementById('artistSearch');
const countrySearch = document.getElementById('countrySearch');
const artistDropdown = document.getElementById('artist-dropdown');
const countryDropdown = document.getElementById('country-dropdown');

//Adding evenlisteners to functionality
artistSearch.addEventListener('click', function(event){
    event.stopPropagation();
    if(artistSearch.getAttribute('data-click') === 'true') {
        artistSearch.setAttribute('data-click', 'false');
        artistDropdown.setAttribute('class','dropdown');
    }else {
        artistSearch.setAttribute('data-click', 'true');
        artistDropdown.setAttribute('class','dropdown is-active');
    }
});

countrySearch.addEventListener('click', function(event){
    event.stopPropagation();
    if(countrySearch.getAttribute('data-click') === 'true') {
        countrySearch.setAttribute('data-click', 'false');
        countryDropdown.setAttribute('class','dropdown');

    }else {
        countrySearch.setAttribute('data-click', 'true');
        countryDropdown.setAttribute('class','dropdown is-active');
    }
});


