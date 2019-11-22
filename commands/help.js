const config = require('../config.json');
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {

        const embed = new Discord.RichEmbed();
        embed.setColor(0x00AE86);
        embed.setTitle('List of commands');
        embed.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '** Fun commands **');
        embed.addField('» &insult @name', 'Generate insults at the targeted user');
        embed.addField('» &boomer @name', 'Let someone know they\'re a boomer!');
        embed.addField('» &cat', 'Provides a picture of a cat');
        embed.addField('» &dadjoke', 'Tells a dad joke');
        embed.addField('» &lovecalc @name @name', 'Why not let a bot determine how good your relationship is?');
        embed.addField('» &rps', 'Play rock, paper, scissors with the bot [Temporarily Disabled]');
        embed.addField('» &shout message', 'Make your message massive [Temporarily Disabled]');
        embed.addField('» &8ball question', 'Ask the (not so) magic 8ball a question!');
        embed.addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',' ** System & Admin commands **');
        embed.addField('» &sys', 'Provides information on the bot and the server it\'s running on');
        embed.addField('» &announcements', 'Read the latest information from the bot developers');
        embed.addField('» &eval', 'Evaluate a script (Bot developer only)');
        embed.addField('» &purge number', 'Bulk deletes messages, max 100 messages per use. Requires MANAGE_MESSAGES permission');
        embed.setFooter('Bot developer by https://twitter.com/RapidTheNerd');
        embed.setAuthor('Notion Developers');
        message.channel.send(embed);
    }
};

module.exports.help = {
    name: 'help'
};