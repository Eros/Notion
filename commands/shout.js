const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        var string = message.content;
        var numbers = string.match(/([0-9])/g);
        string = string.replace(/([a-zA-Z])/g, ':regional_indicator_$1').toLowerCase();
        if(numbers) {
            string = string.replace(/([0-9])/g, match => {	
                return {'1': ':one:', '2': ':two:', '3': ':three:', '4': ':four:', '5': ':five:', '6': ':six:', '7': ':seven:', '8': ':eight:', '9': ':nine:', '0': ':zero:'}[match];	//                 return {'1': ':one:', '2': ':two:', '3': ':three:', '4': ':four:', '5': ':five:', '6': ':six:', '7': ':seven:', '8': ':eight:', '9': ':nine:', '0': ':zero:'}[match];
            }).replace(/\:one\:\:zero\:\:zero\:/, ':100:').replace(/\:one\:\:zero\:/g, ':keycap_ten:');
            message.channel.send(string);
        }
    }
}

module.exports.help = {
    name: 'shout'
}