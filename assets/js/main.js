//Declaring variables
const artistSearch = document.getElementById('artistSearch');
const genreSearch = document.getElementById('genreSearch');
const countrySearch = document.getElementById('countrySearch');

//Adding evenlisteners to functionality
artistSearch.addEventListener('click', function(event){
    event.stopPropagation();
    if(artistSearch.getAttribute('data-click') === 'true') {
        artistSearch.setAttribute('data-click', 'false');
        console.log(artistSearch.getAttribute('data-click'));
    }else {
        artistSearch.setAttribute('data-click', 'true');
        console.log(artistSearch.getAttribute('data-click'));
    }
});

genreSearch.addEventListener('click', function(event){
    event.stopPropagation();
    if(genreSearch.getAttribute('data-click') === 'true') {
        genreSearch.setAttribute('data-click', 'false');
        console.log(genreSearch.getAttribute('data-click'));
    }else {
        genreSearch.setAttribute('data-click', 'true');
        console.log(genreSearch.getAttribute('data-click'));
    }
});

countrySearch.addEventListener('click', function(event){
    event.stopPropagation();
    if(countrySearch.getAttribute('data-click') === 'true') {
        countrySearch.setAttribute('data-click', 'false');
        console.log(countrySearch.getAttribute('data-click'));

    }else {
        countrySearch.setAttribute('data-click', 'true');
        console.log(countrySearch.getAttribute('data-click'));
    }
});


