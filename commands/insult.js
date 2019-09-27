const unirest = require('unirest');
const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {
        let member = message.mentions.members.first();

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
       var response = xmlHttp.open("GET", "https://insult.mattbas.org/api/insult", true);
       response.send();
       message.channel.send(response);
    }
}

module.exports.help = {
    name: 'insult'
}