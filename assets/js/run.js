// Variable Declaration
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
        // Clear Current Song from Storage
        clearSongs();
        // Get Song by Artist
        getSongArtist(JSON.parse(localStorage.getItem('artist1')),1);
        // Stop Propagation
        event.stopPropagation();
        // Dropdown Menu Settings
        artistSearch.setAttribute('data-click', 'false');
        artistDropdown.setAttribute('class','dropdown');
    });
    artistTwo.addEventListener('click', function(event){
        // Clear Current Song from Storage
        clearSongs();
        // Get Song by Artist
        getSongArtist(JSON.parse(localStorage.getItem('artist2')),2);
        // Stop Propagation
        event.stopPropagation();
        // Dropdown Menu Settings
        artistSearch.setAttribute('data-click', 'false');
        artistDropdown.setAttribute('class','dropdown');
    });
    artistThree.addEventListener('click', function(event){
        // Clear Current Song from Storage
        clearSongs();
        // Get Song by Artist
        getSongArtist(JSON.parse(localStorage.getItem('artist3')),3);
        // Stop Propagation
        event.stopPropagation();
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
        // Clear Current Song from Storage
        clearSongs();
        // Get Song in Country
        getSongCountry(JSON.parse(localStorage.getItem('country-code1')),1);
        // Stop Propagation
        event.stopPropagation();
        // Dropdown Menu Settings
        countrySearch.setAttribute('data-click', 'false');
        countryDropdown.setAttribute('class','dropdown');
    });
    countryTwo.addEventListener('click', function(event){
        // Clear Current Song from Storage
        clearSongs();
        // Get Song in Country
        getSongCountry(JSON.parse(localStorage.getItem('country-code2')),2);
        // Stop Propagation
        event.stopPropagation();
        // Dropdown Menu Settings
        countrySearch.setAttribute('data-click', 'false');
        countryDropdown.setAttribute('class','dropdown');
    });
    countryThree.addEventListener('click', function(event){
        // Clear Current Song from Storage
        clearSongs();
        // Get Song in Country
        getSongCountry(JSON.parse(localStorage.getItem('country-code3')),3);
        // Stop Propagation
        event.stopPropagation();
        // Dropdown Menu Settings
        countrySearch.setAttribute('data-click', 'false');
        countryDropdown.setAttribute('class','dropdown');
    });
}
