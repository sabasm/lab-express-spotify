var SpotifyWebApi = require('spotify-web-api-node');

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