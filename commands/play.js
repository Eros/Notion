const yt = require('ytdl-core');

module.exports.run = (bot, message, args) => {

    play(Queue.getFront());
    
    function play(song) {
        if(song === undefined)
            return message.reply('Queue is empty');
        dispatcher = message.guild.voiceConnection.playStream(yt(song.url, {audioonly: true}), {passes: 1});
    }
}

module.exports.help = {
    name: 'play'
}
