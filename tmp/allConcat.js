var apiKey = require('./../.env').apiKey;
var Search = require('./../js/github.js').searchModule;

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var results = $('#searchInput').val();
    $.get('https://api.github.com/search/users?/'+ results + '/access_token='  + apiKey).then(function(response){
    console.log(response);
  });
    $('.results').text("Here are your results " + results);
  });
});
