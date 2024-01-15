// Generates random number based on maximum value
function randomNumber(max){
    return Math.floor(Math.random()*max);
}

//Function for country API
function getRandomCountry(countryNumber) {
    let requestURL = 'https://restcountries.com/v3.1/all?fields=name,cca2';
    fetch(requestURL)
    .then(function(response) {
        return response.json();
    }) 
    .then(function(data){
        let random = randomNumber(data.length-1);
        localStorage.setItem('country-name'+countryNumber,JSON.stringify(data[random].name.common));
        localStorage.setItem('country-code'+countryNumber,JSON.stringify(data[random].cca2));
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
        let random = randomNumber(data.artists.length-1);
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
        let random = randomNumber(data.artists.length-1);
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
        let random=randomNumber(data.artists.length-1);
        artist=data.artists[random].name;
        localStorage.setItem('artist-country-name'+countryNumber,JSON.stringify(artist));
    });

    // Get song by artist
    let requestURL3='https://itunes.apple.com/search?term='+JSON.parse(localStorage.getItem('artist-country-name'+countryNumber))+'&entity=song&attribute=artistTerm&country='+code;
    fetch(requestURL3)
    .then(function(response){
     return response.json();
    })
    .then(function(data){
        console.log(data);
        if (data.resultCount===0){
            localStorage.setItem('song-country'+countryNumber,JSON.stringify(''));
            localStorage.setItem('song-artist-name-country'+countryNumber,JSON.stringify(''));
        } else {
            let random=randomNumber(data.resultCount-1);
            localStorage.setItem('song-country'+countryNumber,JSON.stringify(data.results[random].trackName));
            localStorage.setItem('song-artist-name-country'+countryNumber,JSON.stringify(data.results[random].artistName));
        }
    });
    
}

// Function to generate a random song by artist
function getSongArtist(artist,artistNumber){
    
    let artistName=artist.replace(' ','+');
    let requestURL='https://itunes.apple.com/search?term='+artistName+'&entity=song&attribute=artistTerm';
   fetch(requestURL)
   .then(function(response){
    return response.json();
   })
   .then(function(data){
    if (data.resultCount===0){
        localStorage.setItem('song-artist'+artistNumber,JSON.stringify(''));
        localStorage.setItem('song-artist-name-artist'+artistNumber,JSON.stringify(''));
    } else {
        let random=randomNumber(data.resultCount-1);
        localStorage.setItem('song-artist'+artistNumber,JSON.stringify(data.results[random].trackName));
        localStorage.setItem('song-artist-name-artist'+artistNumber,JSON.stringify(data.results[random].artistName));
    }
   });

}

