var express = require ('express');
var app = express ();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );


app.listen('9000', 'localhost', function(){
  console.log('server is listening on port 9000');
});

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.post( '/texter', urlencodedParser, function( req, res ){
  console.log( 'texter hit', req.body );
});

app.use( express.static( 'public' ) );
