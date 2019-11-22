const config = require('../config.json');
const unirest = require('unirest');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        var req = unirest("POST", "https://robomatic-ai.p.rapidapi.com/api.php");

        req.headers({
        	"x-rapidapi-host": "robomatic-ai.p.rapidapi.com",
        	"x-rapidapi-key": config.rapid_api_token,
        	"content-type": "application/x-www-form-urlencoded"
        });

        req.form({
        	"ChatSource": "RapidAPI",
        	"SessionID": "RapidAPI1",
        	"in": args,
        	"op": "in",
        	"cbid": "1",
        	"cbot": "1",
        	"key": config.robomatic_auth
        });

        req.end(function (res) {
        	if (res.error) throw new Error(res.error);
        
        	console.log(res.body);
        });
    }
}

module.exports.help = {
    name: 'chat'
};