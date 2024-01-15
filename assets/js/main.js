function run(){
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

    const songContainer = document.getElementById('song-container');

    // Set Random Artists in Dropdown Menu
    getRandomArtistSolo(1);
    getRandomArtistGroup(2);
    getRandomArtistSolo(3);
    artistOne.textContent = JSON.parse(localStorage.getItem('artist1'));
    artistTwo.textContent = JSON.parse(localStorage.getItem('artist2'));
    artistThree.textContent = JSON.parse(localStorage.getItem('artist3'));

    // Set Random Countries in Dropdown Menu
    getRandomCountry(1);
    getRandomCountry(2);
    getRandomCountry(3);
    countryOne.textContent = JSON.parse(localStorage.getItem('country-name1'));
    countryTwo.textContent = JSON.parse(localStorage.getItem('country-name2'));
    countryThree.textContent = JSON.parse(localStorage.getItem('country-name3'));

    //Event Listners for Dropdown Menus
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
}

run();
