const config = require('../config.json');
const Discord = require('discord.js');
const ud = require('urban-dictionary');

module.exports.run = (bot, message, args) => {
    
    if(message.content.startsWith(config.prefix)) {
        ud.term(String(args), (error, entries, tags, sounds) => {
            if(error)
                console.log(error.message);
            else {
                var def = entries[0].definition;
                if(def.length > 1024) 
                    def = entries[1].definition;
                
              
               if(def.length < 1024) { 
                const embed = new Discord.RichEmbed();
                   embed.setColor(5438002);
                   embed.setTitle('Urban dictionary');
                   embed.addField('Word', entries[0].word);
                   embed.addField('Definition', def);
                   embed.addField('Example', entries[0].example);
                   embed.addField(':thumbsup:', entries[0].thumbs_up);
                   embed.addField(':thumbsdown:', entries[0].thumbs_down);
                   message.channel.send(embed);
                } else {
                    message.reply(`Oops discord won\'t let me send that definition because it\'s too long! Here\'s the link for it: ${entries[0].permalink}`)
                }
            }
        });
    }
};

module.exports.help = {
    name: 'urban'
};