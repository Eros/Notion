const yt = require('ytdl-core');
let queue = {}

module.exports.run = (bot, message, args) => {
    if(queue[message.guild.id] === undefined)
        return message.reply('Add some songs to the queue first!');
    if(!message.guild.voiceConnection)
        return message.reply('You need to be in a voice channel first!');
    if(queue[message.guild.id].playing)
        return message.reply('Song is already playing!');

    let dispatcher;
    queue[message.guild.id].playing = true;

    (function play(song) {
        console.log(`[!] Playing song >> ${song}`);

        if(song === undefined)
            return message.reply('Queue is empty!').then(() => {
                queue[message.guild.id].playing = false;
                message.member.voiceChannel.leave();
            })
    })
}

module.exports.help = {
    name: 'play'
}