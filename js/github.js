var apiKey = require('./../.env').apiKey;

function Search(){

}
 Search.prototype.getlist = function(results) {
   var input = [];
   $.get('https://api.github.com/search/users'+ "?q=" + results).then(function(response){
   for (var i = 0; i < response.items.length; i++) {
    input.push(response.items[i].login);
    console.log(response.items[i]);
   }
      input.forEach(function(input){
      $('.results').append("<ul>" + input + "</ul>");
      // $("#img").attr("src", (input.avatar_url));
    });
  });
};

// Search.prototype.getRep = function(results) {
//   var input = [];
//   $.get('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc').then(function(response){
//     console.log(response);
//   });
// };
exports.searchModule = Search;
