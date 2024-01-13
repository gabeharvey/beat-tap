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

   //Get the amount of total artists in country
    let requestURL1='https://musicbrainz.org/ws/2/artist/?query=country:'+code+'&fmt=json';
    fetch(requestURL1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        localStorage.setItem('offset-artist-country'+countryNumber,randomNumber(data.count));
    });

    //Get an artist in country
    let artist;
    let requestURL2='https://musicbrainz.org/ws/2/artist/?query=country:'+code+'&fmt=json&limit=100&offset='+JSON.parse(localStorage.getItem('offset-artist-country'+countryNumber));
    fetch(requestURL2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let random=randomNumber(data.artists.length);
        artist=data.artists[random].id;
        localStorage.setItem('artist-country-temp'+countryNumber,JSON.stringify(artist));
    });

    // Get total songs of artist
    let requestURL3='https://musicbrainz.org/ws/2/artist/'+JSON.parse(localStorage.getItem('artist-country-temp'+countryNumber))+'?inc=recordings&fmt=json';
    fetch(requestURL3)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        if(data.recordings.length){
            localStorage.setItem('total-songs-country'+countryNumber,JSON.stringify(data.recordings.length));
            console.log(data.recordings);
        } else {
            localStorage.setItem('total-songs-country'+countryNumber,0);
        }
    });

    if(JSON.parse(localStorage.getItem('total-songs-country'+countryNumber))!==0) {
        // Get a song by artist
        let requestURL4='https://musicbrainz.org/ws/2/artist/'+JSON.parse(localStorage.getItem('artist-country-temp'+countryNumber))+'?inc=recordings&fmt=json';
        fetch(requestURL4)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let random=randomNumber(JSON.parse(localStorage.getItem('total-songs-country'+countryNumber))-1);
            if(data.recordings[random].title){
                localStorage.setItem('song-country'+countryNumber,JSON.stringify(data.recordings[random].title));
            } else {
                localStorage.setItem('song-country'+countryNumber,JSON.stringify(data.recordings[random].name));
            }
        });
    } else {
        localStorage.setItem('song-country'+countryNumber,JSON.stringify('No titles to display'));
    }

}

getSongCountry('KR',2);