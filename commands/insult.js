const Discord = require('discord.js');
const unirest = require('unirest');

module.exports.run = (bot, message, args) => {
    let member = message.mentions.members.first();
    
    if(message.content.startsWith(prefix + 'insult' + ' ' + member)){
        unirest.get("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random")
        .header("Authorization", "FREE")
        .header("X-RapidAPI-Key", config.rapid_api_token)
        .end(function (result) {
        message.channel.send(member + ' ' + result.raw_body.toLowerCase());
});
    }
}

module.exports.help = { name: 'insult' }