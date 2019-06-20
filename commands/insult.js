const unirest = require('unirest');
const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {
        let member = message.mentions.members.first();

        if (member == '' || member == null)
            message.reply('You noob, you need to tag someone!');

        unirest.get("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random")
            .header("Authorization", "FREE")
            .header("X-RapidAPI-Key", config.rapid_api_token)
            .end(function (result) {
                var insult = result.raw_body.toLowerCase();
                message.channel.send(member + ' ' + insult);
            });
    }
}

module.exports.help = {
    name: 'insult'
}