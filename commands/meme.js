const config = require('../config.json');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        const subs = ['dankmeme', 'meme', 'me_irl'];
        const result = subs[Math.floor(Math.random() * subs.length)];
        const image = randomPuppy(result);
        const embed = new Discord.RichEmbed()
            .setColor(6938222)
            .setImage(image)
            .setTitle(`From r/${result}`)
            .setURL(`https://reddit.com/r/${result}`);
        
        message.channel.send(embed);
    }
}

module.exports.help = {
    name: 'meme'
}