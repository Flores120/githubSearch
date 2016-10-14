var apiKey = require('./../.env').apiKey;
var Search = require('./../js/github.js').searchModule;

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var results = $('#searchInput').val();
    $.get('https://api.github.com/users/?=' + apiKey).then(function(response){
    console.log(response);
  });
    $('.results').text("Here are your results " + results);
  });
});
