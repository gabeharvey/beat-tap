// Fetch Data
function fetchOptions() {
    // Set Random Artists
    getRandomArtistSolo(1);
    getRandomArtistGroup(2);
    getRandomArtistSolo(3);

    // Set Random Countries
    getRandomCountry(1);
    getRandomCountry(2);
    getRandomCountry(3);
}
fetchOptions();

// Timeout for Loading Page
let loadingPage = setTimeout( function (){
    window.location.replace('./main.html');
    clearTimeout(loadingPage);
}, 10000);