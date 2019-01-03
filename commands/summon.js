module.exports.run = (bot, message, args) => {
    new Promise((resolve, reject) => {
        const voiceChannel = message.member.voiceChannel;
        if(!voiceChannel || voiceChannel.type !== 'voice')
            return message.reply('I could not join your voice channel!');
            voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
    });
}

module.exports.help = {
    name: 'summon'
}