var apiKey = require('./../.env').apiKey;

function Search(list){
  var input = [];
  var results = $('#searchInput').val();
  $.get('https://api.github.com/search/users'+ "?q=" + results).then(function(response){
    });
 }

 Search.prototype.getlist = function(results) {
   for (var i = 0; i < response.items.length; i++) {
    input.push(response.items[i].login);
   }
};

exports.searchModule = Search;
