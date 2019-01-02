module.exports.run = (bot, message, args) => {
    new Promise((resolve, reject) => {
        const voiceChannel = message.member.voiceChannel;

        if(!voiceChannel)
            return message.reply('I\'m not in a voice channel!');
        voiceChannel.leave().then(connection => resolve(connection)).catch(err => reject(err));
    }); 
}

module.exports.help = {
    name: 'leave'
}