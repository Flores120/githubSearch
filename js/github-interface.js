var apiKey = require('./../.env').apiKey;
var Search = require('./../js/github.js').searchModule;

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var list = new Search();
    var output = list.getlist();
    console.log(output);
 });
});




//  $('.results').text("Here are your results " + results);

//    input.forEach(function(input){
//    $('.results').append("<ul>" + input + "</ul>" );
//  });

// $.get('https://api.github.com/search/users'+ "?q=" + results).then(function(response){
//   var input = [];
//   for (var i = 0; i < response.items.length; i++) {
//    input.push(response.items[i].login);
//  }
