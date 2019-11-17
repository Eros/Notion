const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed();
    embed.setColor('#49291'); //idk what this colour is but fuck it
    embed.addField('How to play: ', 'react to this message with one of the emojis below, and ill make a random decision!');
    const m = await message.channel.send(embed);
    //gets the reaction from the sender then let the bot make a random choice
    const reaction = await promptMessage(m, message.author, 30, choose)
};

async function promptMessage(message, author, time, reactions) {
    time *= 1000;
    for(const reaction of reactions)
        await message.react(reaction);
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, {max: 1, time: time}).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: 'rps'
};