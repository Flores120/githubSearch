var apiKey = require('./../.env').apiKey;

function Search(){

}
 Search.prototype.getlist = function(results) {
   var input = [];
   $.get('https://api.github.com/search/users'+ "?q=" + results).then(function(response){
   for (var i = 0; i < response.items.length; i++) {
    input.push(response.items[i].login);
   }
      input.forEach(function(input){
      $('.results').append("<ul>" + input + "</ul>" );
    });
});
};

exports.searchModule = Search;
