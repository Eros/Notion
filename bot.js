
const config = require('./config.json');
const unirest = require('unirest');
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

bot.login(config.discord_token);

const prefix = config.prefix;

bot.on('message', message => {

    let member = message.mentions.members.first();

    if(message.content == prefix + 'insult' + ' ' + member){
        unirest.get("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random")
        .header("Authorization", "FREE")
        .header("X-RapidAPI-Key", config.rapid_api_token)
        .end(function (result) {
        message.channel.send(member + result.raw_body);
});
    }
});

bot.on('ready', async => {
    console.log('\nInsultBot starting up...');
    bot.user.setActivity('&insult @name', {type: 'PLAYING'});
    console.log('\nBot has started!\n');
});
