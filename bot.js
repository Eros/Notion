const config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const collection_name = 'Globally_Banned';
const dbUtils = require('./mongoUtils');

var db = undefined;

bot.login(config.discord_token);

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err)
        console.log('[X] Error reading commands: \n' + err);

    let js = files.filter(f => f.split('.').pop() === 'js');
    if(js.length <= 0) {
        console.log('[X] Unable to load commands');
        return;
    }

    js.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`[!] Loaded command: ${f}`);
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
        //if(chatPrecheck(message))
        //    message.reply('You are globally banned, you cannot run this command!');
        //else 
         commandFile.run(bot, message, args);
});

bot.on('ready', async => {
    console.log('\n [+] InsultBot starting up...');
    bot.user.setActivity('&insult @name', {type: 'PLAYING'});
    console.log('\n [+] Bot has started!\n');

    //this is just for debug and testing
    findInDocument();

    //mongo setup and handling
    console.log('Setting up MongoDB...');
    MongoClient.connect(config.mongo_url, function(err, client) {
        if(err) {
            throw err;
            console.log('Could not connect to Mongo, error thrown!');
        } else {
            db = client.db('InsultBot');
            console.log('Logged into MongoDB');
        }
    });
});

bot.on('guildCreate', guild => {
    console.info('Joined new server > ' + guild.name);
    //some mongo stuff will go here eventually
});

function findInDocument() {
    const cursor = db.collection(collection_name).find({test_string});
    console.log(cursor);
}