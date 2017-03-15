console.log('sanity check');


var apiKey = '6add1d63e9fac30d8ed40467212d1d35a332d65e';
var apiProxy = 'http://galvanize-cors-proxy.herokuapp.com/';
var baseUrl = 'http://www.giantbomb.com/api/search/?api_key=';


$('form').submit(function(e) {
  var searchString = $('.form-control').val();
  var apiUrl = apiProxy + baseUrl + apiKey + '&format=json&query=' + searchString + '&resources=game';
  console.log(apiUrl);
  $.ajax({
    url: apiUrl,
    method: 'GET'
  }).then(function(result){

    for (var i = 0; i <= 8; i++) {
      console.log(result.results[i])
      $('#'+ i).attr('src',result.results[i].image.medium_url);
    } if ($('#'+ i).attr('src',result.results[i].image.medium_url)===null){
      return hideDiv
    }
  }).catch(function (error){
    console.log('Error: ', error)
  })
  e.preventDefault()
});



function unhideDiv(element){
  $('.game-results').removeClass('hidden')
};

$('#search-it-brah').on('click', unhideDiv)
