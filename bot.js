
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
        message.channel.send({embed: {
            color: 3447003,
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
            },
            title: 'System stats',
            description: 'Statistics of the Bot and the AWS server',
            fields: [{
                name: 'Uptime',
                value: process.uptime().toFixed(4)
            },
            {
                name: 'RAM usage ',
                value: `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`
            },
            {
                name: 'Websocket',
                value: `${process.platform} (${process.arch}) `
            },
            {
                name: 'Host',
                value: `AWS Ohio Server (Ubuntu)`
            },
            {
                name: 'Ping',
                value: `${bot.ping} `
            },
            {
                name: 'DiscordJS version',
                value: `${require('discord.js').version} `
            },
            {
                name: 'Server count: ',
                value: `${bot.guilds.size} `
            }], 
            timestamp: new Date(),
            footer: {
                icon_url: bot.user.avatarURL,
                text: ''
            }
        }});
    }
});

bot.on('ready', async => {
    console.log('\nInsultBot starting up...');
    bot.user.setActivity('&insult @name', {type: 'PLAYING'});
    console.log('\nBot has started!\n');
});
