
var config = require('./config.json');
var unirest = require('unirest');
var Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

bot.login(config.discord_token);


fs.readdir('./commands/', (err, files) => {
    if(err)
        console.log(err);
    let jsFiles = files.filter(f => f.split('.').pop() === 'js');

    if(jsFiles.length <= 0) {
        console.log('Unable to load commands');
        return;
    }

    jsFiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`Loaded ${f} command`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', async => {
    console.log('\nInsultBot starting up...');
    bot.user.setActivity('&insult @name', {type: 'LISTENING'});
    console.log('\nBot has started!\n');
});
