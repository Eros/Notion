var config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

bot.login(config.discord_token);

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err)
        console.log('[X] Error reading commands: \n' + err);

    let js = files.filter(f => f.split('.').pop() === 'js');
    if (js.length <= 0) {
        console.log('[!] Unable to load commands');
        return;
    }

    js.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`[+] Loaded command: ${f}`)
        bot.commands.set(props.help.name, props);
    });
});

bot.on('message', message => {
    if (message.author.bot)
        return;
    if (message.channel.type === 'dm')
        return;

    let prefix = config.prefix;
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(cmd.slice(prefix.length));

    if (commandFile)
        commandFile.run(bot, message, args);
});

bot.on('ready', async => {
    console.log('\n[!] InsultBot starting up...');
    bot.user.setActivity('List of commands » &help', { type: 'PLAYING' });
    console.log('\n[+] Bot has started!\n');
});
