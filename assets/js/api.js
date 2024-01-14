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
        localStorage.setItem('artist-country-id'+countryNumber,JSON.stringify(artist));
    });

    // Get song by artist
    let requestURL3='https://musicbrainz.org/ws/2/artist/'+JSON.parse(localStorage.getItem('artist-country-id'+countryNumber))+'?inc=works&fmt=json';
    let request;
    fetch(requestURL3)
    .then(function(response){
        request=response.status
        return response.json();
    })
    .then(function(data){
        if(request!==200){
            localStorage.setItem('song-country'+countryNumber,JSON.stringify('Error: Try Again'));
        } else {
            if(data.works.length===0){
                localStorage.setItem('song-country'+countryNumber,JSON.stringify('null'));
            } else{
                let random=randomNumber(data.works.length-1);
                localStorage.setItem('song-country'+countryNumber,JSON.stringify(data.works[random].title));
            }
        }
    });
    

}

// Function to generate a random song by country
function getSongArtist(artist,artistNumber){
    
    //Get the artist id
    let requestURL1='https://musicbrainz.org/ws/2/artist/?query=artist:'+artist+'&fmt=json';
     fetch(requestURL1)
     .then(function(response){
        return response.json();
     })
     .then(function(data){
        localStorage.setItem('artist-id'+artistNumber,JSON.stringify(data.artists[0].id));
     });

    // Get song by artist
    let requestURL2='https://musicbrainz.org/ws/2/artist/'+JSON.parse(localStorage.getItem('artist-id'+artistNumber))+'?inc=works&fmt=json';
    let request;
    fetch(requestURL2)
    .then(function(response){
        request=response.status
        return response.json();
    })
    .then(function(data){
        if(request!==200){
            localStorage.setItem('song-artist'+artistNumber,JSON.stringify('Error: Try Again'));
        } else {
            if(data.works.length===0){
                localStorage.setItem('song-artist'+artistNumber,JSON.stringify('null'));
            } else{
                let random=randomNumber(data.works.length-1);
                localStorage.setItem('song-artist'+artistNumber,JSON.stringify(data.works[random].title));
            }
        }
    });
 
}
