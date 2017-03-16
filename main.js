const apiKey = '6add1d63e9fac30d8ed40467212d1d35a332d65e';
const apiProxy = 'http://galvanize-cors-proxy.herokuapp.com/';
const baseUrl = 'http://www.giantbomb.com/api/search/?api_key=';

function getGameData(searchString) {
  let apiUrl = `${apiProxy}${baseUrl}${apiKey}&format=json&query=${searchString}&resources=game`;

  return $.get(apiUrl)
}

function buildCards(cardData) {
  console.log(cardData)
  for (var i = 0; i < cardData.results.length; i++) {
    let $gameResults = $('<div class="game-results col-xs-3">')
    let $gameImage = $('<div class="game-image">')
    let $anchor = $('<a href="page.html"></a>')
    let $noResize = $(`<img id="${i}" class="no-resize" src="${cardData.results[i].image.medium_url}" />`)

    $gameResults.append($gameImage)
    $gameImage.append($anchor)
    $anchor.append($noResize)

    $('.blah-city').append($gameResults);
  }
}

$('form').submit(function(e) {
  e.preventDefault()

  let searchString = $('.form-control').val();

  getGameData(searchString)
    .then(function(cardData){
      buildCards(cardData);
    })
    .catch(function (error){
      console.log('Error: ', error)
    })
});

//build the function to bring in all the infor for a game
//buildthe jQuery call to run it on click of image

// function callInfo() {
//   $.ajax({
//     url: 'https://galvanize-student-apis.herokuapp.com/gcommerce/products',
//     method: 'GET'
//     }).then(function (response) {
//     console.log(response.length)
//     console.log(response)
//     }).catch(function (error) {
//     console.log('error', error);
//   })
// }
// $('.form-control').on('click', )
// $('.blah-city').on('click', )
