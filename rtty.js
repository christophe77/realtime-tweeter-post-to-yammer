var YammerAPIClient = require('yammer-rest-api-client');
var yammerDeveloperToken = '4006-P9wlbnsg27N5G1wDhSk9C';
var client = new YammerAPIClient({
    token: yammerDeveloperToken
});
var yammerGroupId = '10773066';


var Twitter = require('twitter');
var twitter = new Twitter({
    consumer_key: 'M8pWfI6ijRrCzUWor1U9B6hT',
    consumer_secret: 'yK9h7JKnQRGufDpiZOrsZhPg17kgdgIR8j23PxlIRal4Nda7g',
    access_token_key: '828194018253217793-rUqa26Nh1OE39In7chcOaeJsv4Bdqg',
    access_token_secret: 'qXF1BIcRhgBzuYJBbL2xBC8yzhZJk9VEjvtuV9TAUaOG'
});
var keywordTowatch = "intelligence artificielle";
twitter.stream('statuses/filter', { track: keywordTowatch },
    function(stream) {
        stream.on('data', function( tweet ) {
			if(!tweet.hasOwnProperty('retweeted_status')){
				var tweet_link = 'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str;
				var message = '[' + tweet.user.screen_name + ']' + tweet.text + ' | ' + tweet_link;		
				sendToYammerGroup(yammerGroupId, message);		
			}
        }); 
        stream.on('error', function ( error ) {
            console.error(error);
        }); 
    }
);
function sendToYammerGroup(groupId, message){
    client.messages.create({
        group_id: groupId,
        body: message
    }, function(error, data) {
        if (error) {
            console.log('There was an error posting the data');
        } else {
            console.log('Data posted');
        }
    });
};