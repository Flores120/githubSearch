var apiKey = require('./../.env').apiKey;
var Search = require('./../js/github.js').searchModule;

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var results = $('#searchInput').val();
    var list = new Search;
    var output = list.getlist(list);
    console.log(ouput);
    $('.results').text("Here are your results " + results);
  });
});
