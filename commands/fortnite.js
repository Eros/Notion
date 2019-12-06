const config = require('../config.json');
const Client = require('fortnite');
const fortnite = new Client(config.fortnite_token);
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        const user = args[0];
        const search = getUser(user);
        if(!search.username)
            return message.reply('Oops! I could not find that user.');
        
        const life = search.stats.lifetime;
        const solo = search.stats.solo;
        const duo = search.stats.duo;
        const squad = search.stats.squad;

        const embed = new Discord.RichEmbed()
                .setTitle(`${search.username}`)
                .setURL(search.url)
                .setColor('#9d4dbb')
                .setFooter('Fortnite stats provided by Fortnitetracker.com')
                .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '** Solo **')
                .addField('KD: ', `${solo.kd}`)
                .addField('Kills: ', `${solo.kills}`)
                .addField('Kills per match: ', `${solo.kills_per_match}`, true)
                .addField('Wins: ', `${solo.wins}`)
                .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '** Duos **')
                .addField('KD: ', `${duo.kd}`)
                .addField('Kills: ', `${duo.kills}`)
                .addField('Kills per match: ', `${duo.kills_per_match}`, true)
                .addField('Wins: ', `${duo.wins}`)
                .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '** Squads **')
                .addField('KD: ', `${squad.kd}`)
                .addField('Kills: ', `${squad.kills}`)
                .addField('Kills per match: ', `${squad.kills_per_match}`, true)
                .addField('Wins: ', `${squad.wins}`)
                .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '** Lifetime **')
                .addField('KD: ', `${life.kd}`)
                .addField('Kills: ', `${life.kills}`)
                .addField('Kills per match: ', `${life.kills_per_match}`, true)
                .addField('Wins: ', `${life.wins}`);
        
        message.channel.send(embed);
    }
}

async function getUser(args) {
    return await fortnite.user(args);
}

module.exports.help = {
    name: 'ft'
}