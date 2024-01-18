// Variable Declaration
const homeBtn = document.getElementById('home');

const searchQuery = document.getElementById('searchQuery');
const mainSearch = document.getElementById('mainSearch');
const artistSearch = document.getElementById('artistSearch');
const countrySearch = document.getElementById('countrySearch');

const artistDropdown = document.getElementById('artist-dropdown');
const countryDropdown = document.getElementById('country-dropdown');

const artistOne = document.getElementById('artist-1');
const artistTwo = document.getElementById('artist-2');
const artistThree = document.getElementById('artist-3');

const countryOne = document.getElementById('country-1');
const countryTwo = document.getElementById('country-2');
const countryThree = document.getElementById('country-3');

const songName = document.getElementById('song-name');
const songArtist =document.getElementById('song-artist');


function run(){

    // Run Loading Page Event Listener
    homeBtn.addEventListener('click', function(event){
        event.stopPropagation();
        localStorage.clear();
        window.location.replace('./index.html');
    });

    // Display Options in Dropdown Menus
    artistOne.textContent = JSON.parse(localStorage.getItem('artist1'));
    artistTwo.textContent = JSON.parse(localStorage.getItem('artist2'));
    artistThree.textContent = JSON.parse(localStorage.getItem('artist3'));
    countryOne.textContent = JSON.parse(localStorage.getItem('country-name1'));
    countryTwo.textContent = JSON.parse(localStorage.getItem('country-name2'));
    countryThree.textContent = JSON.parse(localStorage.getItem('country-name3'));

    //Event Listeners for Dropdown Menus
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

    // Song by Artist Option Display Event Listeners
    artistOne.addEventListener('click', function(event){
        // Clear Current Song from Storage and Display
        clearSongs();
        // Get Song by Artist
        getSongArtist(JSON.parse(localStorage.getItem('artist1')),1);
        // Stop Propagation
        event.stopPropagation();
        // Loading
        songName.textContent = 'LOADING...';
        // Timeout
        let timeout = setTimeout(function(){
            // Song Display
            songName.textContent = JSON.parse(localStorage.getItem('song-artist1'));
            songArtist.textContent = JSON.parse(localStorage.getItem('song-artist-name-artist1'));
            clearTimeout(timeout);
        },5000);
        // Dropdown Menu Settings
        artistSearch.setAttribute('data-click', 'false');
        artistDropdown.setAttribute('class','dropdown');
    });
    artistTwo.addEventListener('click', function(event){
        // Clear Current Song from Storage and Display
        clearSongs();
        // Get Song by Artist
        getSongArtist(JSON.parse(localStorage.getItem('artist2')),2);
        // Stop Propagation
        event.stopPropagation();
        // Loading
        songName.textContent = 'LOADING...';
        // Timeout
        let timeout = setTimeout(function(){
            // Song Display
            songName.textContent = JSON.parse(localStorage.getItem('song-artist2'));
            songArtist.textContent = JSON.parse(localStorage.getItem('song-artist-name-artist2'));
            clearTimeout(timeout);
        },5000);
        // Dropdown Menu Settings
        artistSearch.setAttribute('data-click', 'false');
        artistDropdown.setAttribute('class','dropdown');
    });
    artistThree.addEventListener('click', function(event){
        // Clear Current Song from Storage and Display
        clearSongs();
        // Get Song by Artist
        getSongArtist(JSON.parse(localStorage.getItem('artist3')),3);
        // Stop Propagation
        event.stopPropagation();
        // Loading
        songName.textContent = 'LOADING...';
        // Timeout
        let timeout = setTimeout(function(){
            // Song Display
            songName.textContent = JSON.parse(localStorage.getItem('song-artist3'));
            songArtist.textContent = JSON.parse(localStorage.getItem('song-artist-name-artist3'));
            clearTimeout(timeout);
        },5000);
        // Dropdown Menu Settings
        artistSearch.setAttribute('data-click', 'false');
        artistDropdown.setAttribute('class','dropdown');
    });

    // Get Artist in Country
    getArtistCountry(JSON.parse(localStorage.getItem('country-code1')),1);
    getArtistCountry(JSON.parse(localStorage.getItem('country-code2')),2);
    getArtistCountry(JSON.parse(localStorage.getItem('country-code3')),3);
    
    // Song by Country Option Display Event Listners
    countryOne.addEventListener('click', function(event){
        // Clear Current Song from Storage and Display
        clearSongs();
        // Get Song in Country
        getSongCountry(JSON.parse(localStorage.getItem('country-code1')),1);
        // Stop Propagation
        event.stopPropagation();
        // Loading
        songName.textContent = 'LOADING...';
        // Timeout
        let timeout = setTimeout(function(){
            // Song Display
            songName.textContent = JSON.parse(localStorage.getItem('song-country1'));
            songArtist.textContent = JSON.parse(localStorage.getItem('song-artist-name-country1'));
            clearTimeout(timeout);
        },5000);
        // Song Display
        songName.textContent = JSON.parse(localStorage.getItem('song-country1'));
        songArtist.textContent = JSON.parse(localStorage.getItem('song-artist-name-country1'));
        // Dropdown Menu Settings
        countrySearch.setAttribute('data-click', 'false');
        countryDropdown.setAttribute('class','dropdown');
    });
    countryTwo.addEventListener('click', function(event){
        // Clear Current Song from Storage and Display
        clearSongs();
        // Get Song in Country
        getSongCountry(JSON.parse(localStorage.getItem('country-code2')),2);
        // Stop Propagation
        event.stopPropagation();
        // Loading
        songName.textContent = 'LOADING...';
        // Timeout
        let timeout = setTimeout(function(){
            // Song Display
            songName.textContent = JSON.parse(localStorage.getItem('song-country2'));
            songArtist.textContent = JSON.parse(localStorage.getItem('song-artist-name-country2'));
            clearTimeout(timeout);
        },5000);
        // Dropdown Menu Settings
        countrySearch.setAttribute('data-click', 'false');
        countryDropdown.setAttribute('class','dropdown');
    });
    countryThree.addEventListener('click', function(event){
        // Clear Current Song from Storage and Display
        clearSongs();
        // Get Song in Country
        getSongCountry(JSON.parse(localStorage.getItem('country-code3')),3);
        // Stop Propagation
        event.stopPropagation();
        // Loading
        songName.textContent = 'LOADING...';
        // Timeout
        let timeout = setTimeout(function(){
            // Song Display
            songName.textContent = JSON.parse(localStorage.getItem('song-country3'));
            songArtist.textContent = JSON.parse(localStorage.getItem('song-artist-name-country3'));
            clearTimeout(timeout);
        },5000);
        // Dropdown Menu Settings
        countrySearch.setAttribute('data-click', 'false');
        countryDropdown.setAttribute('class','dropdown');
    });

    mainSearch.addEventListener('click',function(event){
        event.preventDefault();
        if(searchQuery.value){
            clearSongs();
            generalSearch(searchQuery.value);
             // Loading
            songName.textContent = 'LOADING...';
            // Timeout
            let timeout = setTimeout(function(){
                // Song Display
                songName.textContent = JSON.parse(localStorage.getItem('song'));
                songArtist.textContent = JSON.parse(localStorage.getItem('song-artist'));
                clearTimeout(timeout);
            },5000);
        } 
    });
}

run();
