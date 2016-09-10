console.log('script.js is sourced');

$(document).ready(function(){
  console.log('Document is ready Jazzy');

  $( '#submitButton' ).on( 'click', function(){
    console.log( 'submitButton on click' );
var number1 = $( '#number1').val();
var number2 = $( '#number2').val();
var operators = $('#operators').val();

var objectToSend={
  x: number1,
  y: number2,
  type: operators
};

// var operators-['+', '-', 'x', '/'];



$.ajax({
  type: 'POST',
  url: '/texter',
  data: objectToSend,
  success: function( data ){
    console.log( 'got this from server - ' + data );
      } // end ajax success
    });
  });
})
