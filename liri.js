require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = require('request');


var keys = require('.keys.js');
var twitterKeys = keys.twitterKeys;

var commandArg = process.argv;

var liriCmd = commandArg[2];

var liriArg = '';
for (var i = 2; i < commandArg.lenght; i++) {
    liriArg += commandArg[i] + ' ';
}

switch(action){
    case 'my-tweets':
        getTweets();






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
  
    client.get('statuses/user_timeline', params, function(error, tweets, response){
      for (var i = 0; i < tweets.length; i++) {
        if(!error) {
          console.log(tweets[i].text);
          console.log(tweets[i].created_at);
        }
      }
    });
  }
}