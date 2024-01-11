//Declaring variables
const artistEl = document.getElementById('artist');
const genreEl = document.getElementById('genre');
const countryEl = document.getElementById('country');

//Adding evenlisteners to functionality
artistEl.addEventListener('click', function(event){
    event.stopPropagation();
    if(artist.getAttribute('data-click') === 'true') {
        artist.setAttribute('data-click', 'false');
        console.log(artist.getAttribute('data-click'));
    }else {
        artist.setAttribute('data-click', 'true');
        console.log(artist.getAttribute('data-click'));
    }
});

genreEl.addEventListener('click', function(event){
    event.stopPropagation();
    if(genre.getAttribute('data-click') === 'true') {
        genre.setAttribute('data-click', 'false');
        console.log(genre.getAttribute('data-click'));
    }else {
        genre.setAttribute('data-click', 'true');
        console.log(genre.getAttribute('data-click'));
    }
});

countryEl.addEventListener('click', function(event){
    event.stopPropagation();
    if(locationEl.getAttribute('data-click') === 'true') {
        locationEl.setAttribute('data-click', 'false');
        console.log(locationEl.getAttribute('data-click'));

    }else {
        locationEl.setAttribute('data-click', 'true');
        console.log(locationEl.getAttribute('data-click'));
    }
});

// Generates random number based on maximum value
function randomNumber(max){
    return Math.floor(Math.random()*max);
}

//function for country API
function getRandomCountry() {
    let countryObj = {
        name: '',
        code: ''
    };
    let requestURL = 'https://restcountries.com/v3.1/all?fields=name,cca2';
    fetch(requestURL)
    .then(function(response) {
        return response.json();
    }) 
    .then(function(data){
        let random = randomNumber(data.length);
        countryObj.name=data[random].name.common;
        countryObj.code=data[random].cca2;
    });
    return countryObj;
}


