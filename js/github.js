function Search(){
   $.get('https://api.github.com/search/users'+ "?q=" + results).then(function(response){
 });
 }
 Search.prototype.getlist = function (list) {
   var input = [];
   for (var i = 0; i < response.items.length; i++) {
    input.push(response.items[i].login);
   }
 };

exports.searchModule = Search;
