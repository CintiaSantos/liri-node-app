require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = require('request');
var keys = require('./keys');
var twitterKeys = keys.twitterKeys;

var commandArg = process.argv;

var liriCmd = commandArg[2];

var liriArg = '';
for (var i = 2; i < commandArg.lenght; i++) {
  liriArg += commandArg[i] + ' ';
};

switch(action){
  case 'my-tweets':
      getTweets();
  break;
};
switch(action){
  case 'spotify-this-song':
      chooseSong();
  break;
};
switch(action){
  case 'movie-this':
      chooseMovie();
  break;
};
switch(action){
  case 'do-what-it-says':
      DoWhatItSays();
  break;
};

    function getTweets() {

      var client = new Twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
      });

      var params = {
        screen_name: "Cintia_Santos"
      };

      client.get('statuses/user_timeline', params, function (error, tweets, response) {
        for (var i = 0; i < tweets.length; i++) {
          if (!error) {
            console.log(tweets[i].text);
            console.log(tweets[i].created_at);
          }
        }
      });
  
function spotifySong(song){
  spotify.search({ type: 'track', query: song}, function(error, data){
    if(!error){
      for(var i = 0; i < data.tracks.items.length; i++){
        var songData = data.tracks.items[i];
  
        console.log("Artist: " + songData.artists[0].name);
        
        console.log("Song: " + songData.name);

        console.log("Preview URL: " + songData.preview_url);
  
        console.log("Album: " + songData.album.name);
        console.log("-----------------------"); }
        }
    else{
        console.log('Error occurred.');
      }
    });
  }
}

function omdbData(movie){
  var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';

  request(omdbURL, function (error, response, body){
    if(!error && response.statusCode == 200){
      var body = JSON.parse(body);

      console.log("Title: " + body.Title);
      console.log("Release Year: " + body.Year);
      console.log("IMdB Rating: " + body.imdbRating);
      console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors);
      console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
      console.log("Rotten Tomatoes URL: " + body.tomatoURL);

    } else{
      console.log('Error occurred.')
    }
    if(movie === "Mr. Nobody"){
      console.log("-----------------------");
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      console.log("It's on Netflix!");
    }
  });
}