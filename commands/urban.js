const config = require('../config.json');
const Discord = require('discord.js');
const ud = require('urban-dictionary');

module.exports.run = (bot, message, args) => {
    
    if(message.content.startsWith(config.prefix)) {
        ud.term(String(args), (error, entries, tags, sounds) => {
            if(error)
                console.log(error.message);
            else {
               const embed = new Discord.RichEmbed();
                embed.setColor(5438002);
                embed.setTitle('Urban dictionary');
                embed.addField('Word', entries[0].word);
                embed.addField('Definition', entries[0].definition);
                embed.addField('Example', entries[0].example);
                embed.addField(':thumbsup:', entries[0].thumbs_up);
                embed.addField(':thumbsdown:', entries[0].thumbs_down);
                message.channel.send(embed);
            }
        });
    }
};

module.exports.help = {
    name: 'urban'
};