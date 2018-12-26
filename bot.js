
var config = require('./config.json');
var unirest = require('unirest');
var Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(token);

bot.on('ready', async => {
    console.log('\nInsultBot starting up...');
    bot.user.setActivity('&insult @name', {type: 'LISTENING'});

    genInsult();
});

function getInsult(){
    unirest.get("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random")
.header("Authorization", "FREE")
.header("X-RapidAPI-Key", "")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
}