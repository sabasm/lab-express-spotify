spotifyApi.searchArtists(/*'HERE GOES THE QUERY ARTIST'*/)
    .then(data => {
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    })
    .catch(err => {
      // ----> 'HERE WE CAPTURE THE ERROR'
      console.log(err)
    })