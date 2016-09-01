console.log('omdb scourced');



$(document).ready(function (){
  console.log( 'doc ready' );

$('#searchButton').on('click', function (){
  console.log('searchButton on click');

  $('#movieNameIn').html(function(){
    console.log('input field check');
    if( $(this).val().length === 0 ) {
        alert('Fill in the search box fool');
    }

  //get user input
  var movieName = $('#movieNameIn').val();
  var searchURL = 'http://www.omdbapi.com/?s=' + movieName;
  console.log('searchURL: ', searchURL);

  //ajax call
  $.ajax({
    url: searchURL,
    dataType: 'JSON',
    success: function(data){
      console.log('ajax success data ', data.Search);
      showResults(data.Search);
    }//end success
  });//end ajax
});//end blank input check 
});//end searchButton
});//end document ready

var showResults = function (results){

  console.log('in showResults');
  //clear the dom
  $('#outputDiv').empty();
  for (var i = 0; i < results.length; i++) {
    //Add Title and Year paragraph to the DOM
    $('#outputDiv').append('<p>' + results[i].Title + ' ' + results[i].Year + '<p>');
    //Add Poster Poster
    $('#outputDiv').append('<img src="' + results[i].Poster + '">');
  }//end For
};//end showResults
