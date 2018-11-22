var SpotifyWebApi = require('spotify-web-api-node');
const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//connect db

mongoose.connect('mongodb://localhost/ironMusic')
mongoose.connection.on('connected', 
function () {
    console.log("Mongoose ODM connected!")
})


//--app--
const app = express()
//statics
app.use(express.static('public'))
//views
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')


//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));


//routes
//      home route
const homepage = require('./routes/homepage')
app.use('/', homepage)

//-----------------------SPOTIFY API STUFF STARTS HERE
// Remember to paste your credentials here
var clientId = '4854eea6387f4adda3ae10341fae5ddf',
    clientSecret = '869a3929247d42689717c86b52f0d803';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});
//-----------------------SPOTIFY API STUFF ENDS HERE


app.listen(3000,()=>console.log('App running listening to port:3000'))