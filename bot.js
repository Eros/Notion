
var config = require('./config.json');
const unirest = require('unirest');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(config.discord_token);

const prefix = config.prefix;

bot.on('message', message => {

    let member = message.mentions.members.first();

    if(message.content.startsWith(prefix + 'insult' + ' ' + member)){
        unirest.get("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random")
        .header("Authorization", "FREE")
        .header("X-RapidAPI-Key", config.rapid_api_token)
        .end(function (result) {
        message.channel.send(member + result.raw_body);
});
    }

    if(message.content == prefix + 'sys') {
        var message = new Discord.RichEmbed().setColor('#7200ff')
                .setTitle('Server statistics')
                .addField('Uptime: ', process.uptime().toFixed(4))
                .addField('RAM usage: ', `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true)
                .addField('Websocket:', `${process.platform} (${process.arch})`, true)
                .addField('Host: ', (require('os').uptime() + ''))
                .addField('Ping: ', `${bot.ping}`)
                .addField('DiscordJS Version: ', require('discord.js').version)
                .addField('Active server count: ', `${bot.guilds.size}`);
                message.channel.send(message);
    }
});

bot.on('ready', async => {
    console.log('\nInsultBot starting up...');
    bot.user.setActivity('&insult @name', {type: 'PLAYING'});
    console.log('\nBot has started!\n');
});
