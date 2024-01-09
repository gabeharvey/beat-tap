//Declaring variables
const artist = document.getElementById('artist');
const genre = document.getElementById('genre');
const location = document.getElementById('location');

//Adding evenlisteners to functionality
artist.addEventListener('click', function(event){
    event.stopPropagation();
});

genre.addEventListener('click', function(event){
    event.stopPropagation();
});

loacation.addEventListener('click', function(event){
    event.stopPropagation();
});

//Add html dynamics for dropdown menu


