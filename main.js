const apiKey = '6add1d63e9fac30d8ed40467212d1d35a332d65e';
const apiProxy = 'http://galvanize-cors-proxy.herokuapp.com/';
const baseUrl = 'http://www.giantbomb.com/api/search/?api_key=';

function getGameData(searchString) {
  let apiUrl = `${apiProxy}${baseUrl}${apiKey}&format=json&query=${searchString}&resources=game`;

  return $.get(apiUrl)
}

function buildCards(cardData) {
  $('.blah-city').empty()

  for (var i = 0; i < cardData.results.length; i++) {
    let $gameResults = $('<div class="game-results col-xs-3">')
    let $gameImage = $('<div class="game-image">')
    let $noResize = $(`<img id="${i}" class="no-resize" src="${cardData.results[i].image.medium_url}" />`)

    $gameResults.append($gameImage)
    $gameImage.append($noResize)

    $('.blah-city').append($gameResults);
  }
  $('.blah-city').on('click', 'img', function(){
    $('blah-town').empty()
    let gameId = $(this).attr('id')
    let gameInfo = cardData.results[gameId].description

    $('.blah-town').append(gameInfo)
  })
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
