var apiKey = "b39207005a23e54f016a20d706ad10f551e49024";
var Search = require('./../js/github.js').searchModule;

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var results = $('#searchInput').val();
    $.get('https://api.github.com/users?b39207005a23e54f016a20d706ad10f551e49024=' + apiKey).then(function(response){
    console.log(response[0].login);
  });
    $('.results').text("Here are your results " + results);
  });
});
