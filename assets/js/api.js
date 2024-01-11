// Generates random number based on maximum value
function randomNumber(max){
    return Math.floor(Math.random()*max);
}

//function for country API
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