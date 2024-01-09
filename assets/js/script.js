//Declaring variables
const artist = document.getElementById('artist');
const genre = document.getElementById('genre');
const locationEl = document.getElementById('location');

//Adding evenlisteners to functionality
artist.addEventListener('click', function(event){
    event.stopPropagation();
    if(artist.getAttribute('data-click') === 'true') {
        artist.setAttribute('data-click', 'false');
        console.log(artist.getAttribute('data-click'));
    }else {
        artist.setAttribute('data-click', 'true');
        console.log(artist.getAttribute('data-click'));
    }
});

genre.addEventListener('click', function(event){
    event.stopPropagation();
    if(genre.getAttribute('data-click') === 'true') {
        genre.setAttribute('data-click', 'false');
        console.log(genre.getAttribute('data-click'));
    }else {
        genre.setAttribute('data-click', 'true');
        console.log(genre.getAttribute('data-click'));
    }
});

locationEl.addEventListener('click', function(event){
    event.stopPropagation();
    if(locationEl.getAttribute('data-click') === 'true') {
        locationEl.setAttribute('data-click', 'false');
        console.log(locationEl.getAttribute('data-click'));
    }else {
        locationEl.setAttribute('data-click', 'true');
        console.log(locationEl.getAttribute('data-click'));
    }
});

//Add html dynamics for dropdown menu


