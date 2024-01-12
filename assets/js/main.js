//Declaring variables
const artistEl = document.getElementById('artist');
const genreEl = document.getElementById('genre');
const countryEl = document.getElementById('country');

//Adding evenlisteners to functionality
artistEl.addEventListener('click', function(event){
    event.stopPropagation();
    if(artistEl.getAttribute('data-click') === 'true') {
        artistEl.setAttribute('data-click', 'false');
        console.log(artistEl.getAttribute('data-click'));
    }else {
        artistEl.setAttribute('data-click', 'true');
        console.log(artistEl.getAttribute('data-click'));
    }
});

genreEl.addEventListener('click', function(event){
    event.stopPropagation();
    if(genreEl.getAttribute('data-click') === 'true') {
        genreEl.setAttribute('data-click', 'false');
        console.log(genreEl.getAttribute('data-click'));
    }else {
        genreEl.setAttribute('data-click', 'true');
        console.log(genreEl.getAttribute('data-click'));
    }
});

countryEl.addEventListener('click', function(event){
    event.stopPropagation();
    if(countryEl.getAttribute('data-click') === 'true') {
        countryEl.setAttribute('data-click', 'false');
        console.log(countryEl.getAttribute('data-click'));

    }else {
        countryEl.setAttribute('data-click', 'true');
        console.log(countryEl.getAttribute('data-click'));
    }
});


