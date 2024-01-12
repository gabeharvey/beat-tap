// Generates random number based on maximum value
function randomNumber(max){
    return Math.floor(Math.random()*max);
}

//Function for country API
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

//Function to generate a random genre
function getRandomGenre(genreNumber) {
    let randomGenre;
    let offset = randomNumber(1800);
    let requestURL='https://musicbrainz.org/ws/2/genre/all?limit=100&offset='+offset+'&fmt=json';
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let random = randomNumber(data.genres.length);
        randomGenre=data.genres[random].name;
        localStorage.setItem('genre'+genreNumber,JSON.stringify(randomGenre));
    });
}

//Function to generate a random group artist
function getRandomArtistGroup(artistNumber) {
    let randomArtist;
    let offset =randomNumber(521800);
    let requestURL='https://musicbrainz.org/ws/2/artist/?query=type:group&fmt=json&limit=100&offset='+offset;
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let random = randomNumber(data.artists.length);
        randomArtist=data.artists[random].name;
        localStorage.setItem('artist'+artistNumber,JSON.stringify(randomArtist));
    });
}

//Function to generate a random solo artist
function getRandomArtistSolo(artistNumber) {
    let randomArtist;
    let offset =randomNumber(1234700);
    let requestURL='https://musicbrainz.org/ws/2/artist/?query=type:person&fmt=json&limit=100&offset='+offset;
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let random = randomNumber(data.artists.length);
        randomArtist=data.artists[random].name;
        localStorage.setItem('artist'+artistNumber,JSON.stringify(randomArtist));
    });
}

// Function to generate a random song by country
function getSongCountry(code,countryNumber){
    //let offset = [];

    //Get the amount of total artists in country
    let requestURL1='https://musicbrainz.org/ws/2/artist/?query=country:'+code+'&fmt=json';
    fetch(requestURL1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        localStorage.setItem('offset-song-country',randomNumber(data.count));
    });

    //Get an artist in country
    let artist;
    let requestURL2='https://musicbrainz.org/ws/2/artist/?query=country:'+code+'&fmt=json&limit=100&offset='+localStorage.getItem('offset-song-country');
    console.log(requestURL2);
    fetch(requestURL2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let random=randomNumber(data.artists.length);
        artist=data.artists[random].name;
        localStorage.setItem('artist-country-temp'+countryNumber,JSON.stringify(artist));
    });

}

getSongCountry('GB',2);
