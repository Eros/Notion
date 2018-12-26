
var config = require('./config.json');
var unirest = require('unirest');
var Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(config.discord_token);

bot.on('ready', async => {
    console.log('\nInsultBot starting up...');
    bot.user.setActivity('&insult @name', {type: 'LISTENING'});
    console.log('\nBot has started!\n');

   unirest.get("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random")
        .header("Authorization", "FREE")
        .header("X-RapidAPI-Key", config.rapid_api_token)
        .end(function (result) {
        console.log(result.raw_body)
    });
});
