var express = require ('express');
var app = express ();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );



app.listen(process.env.PORT || 9000, function(){
  console.log('server is listening on port 9000');
});

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.post( '/texter', urlencodedParser, function( req, res ){
  console.log( 'texter hit', req.body );

var results;

var x = Number(req.body.x);
var y = Number(req.body.y);


switch (req.body.type) {
  case "Minus":
  results= x-y;
  break;
case 'Plus':
results = x+y;
break;
case 'Multiply':
results = x * y;
break;
case "Divide":
results=x / y;
break;
default:
results=NaN;
}

res.send({totalValue: results});

});

app.use( express.static( 'public' ) );
