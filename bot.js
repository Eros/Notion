
var config = require('./config.json');
const unirest = require('unirest');
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');


fs.readdir('./commands/', (err, files) => {
    if(err)
        console.log('Error reading commands: \n' + err);

    let js = files.filter(f => f.split('.').pop() === 'js');
    if(js.length <= 0) {
        console.log('Unable to load commands');
        return;
    }

    js.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`Loaded command: ${f}`);
        bot.commands.set(props.help.name, props);
    });
});



//bot.on('message', message => {
//
//     let member = message.mentions.members.first();
//    
//    if(message.content.startsWith(prefix + 'insult' + ' ' + member)){
//        unirest.get("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random")
//        .header("Authorization", "FREE")
//        .header("X-RapidAPI-Key", config.rapid_api_token)
//        .end(function (result) {
//        message.channel.send(member + ' ' + result.raw_body.toLowerCase());
//});
//    }
//});

bot.on('ready', async => {
    console.log('\nInsultBot starting up...');
    bot.user.setActivity('&insult @name', {type: 'PLAYING'});
    console.log('\nBot has started!\n');
});
