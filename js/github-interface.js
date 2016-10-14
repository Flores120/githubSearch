
$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var search = $('#searchInput').val();
    $('.results').text("Here are your results " + search);
  });
});
