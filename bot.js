var config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

bot.login(config.discord_token);

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err)
        console.log('Error reading commands: \n' + err);

    let js = files.filter(f => f.split('.').pop() === 'js');
    if(js.length <= 0) {
        console.log('Unable to load commands');
        return;
    }

<<<<<<< HEAD
    js.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`Loaded command: ${f}`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('message', message => {


    let messages = message;
    
    if(message.author.bot)
        return;
    if(message.channel.type === 'dm')
        return;
    
    let prefix = config.prefix;
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(cmd.slice(prefix.length));

    if(commandFile)
        commandFile.run(bot, message, args);
=======
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
>>>>>>> master
});


//bot.on('message', message => {
//

//});

bot.on('ready', async => {
    console.log('\nInsultBot starting up...');
    bot.user.setActivity('&insult @name', {type: 'PLAYING'});
    console.log('\nBot has started!\n');
});