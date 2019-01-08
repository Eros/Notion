const yt = require('ytdl-core');
const config = require('../config.json')
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
            });
        message.channel.send(`Now playing: ${song.title}`);
        dispatcher = message.guild.voiceConnection.playStream(yt(song.url, {audioonly: true}), {passes: 1});
        let collector = message.channel.createCollector(m => m);
        collector.on('message', m => {
            if(m.content.startsWith(config.perfix + 'pause')) {
                message.channel.send('Paused current song').then(() => {
                    dispatcher.pause();
                });
            } else if(message.content.startsWith(config.prefix + 'resume')) {
                message.channel.send('Resuming current song').then(() => {
                    dispatcher.resume();
                });
            } else if(message.content.startsWith(config.prefix + 'skip')) {
                message.channel.send('Skipping current song').then(() => {
                    dispatcher.end();
                });
            } 
        });

        dispatcher.on('end', () => {
            collector.stop();
            play(queue[message.guild.id].songs.shift());
        })
    });

    if(message.content.startsWith(config.prefix + 'add')) {
        let url = messsage.content.split(' ')[1];
        if(url == '' || url === undefined)
            return message.reply('Invalid URL!');
        yt.getInfo(url, (err, info) => {
            if(err)
                return message.reply('Invalid YT link' + err);
            if(!queue.hasOwnProperty(message.guild.id))
                queueu[message.guild.id] = {}, queue[message.guild.id].playing = false, queuep[message.guild.id].songs = [];
            queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
            message.channel.send(`Added ${info.title} to the queue`);
        });
    }
}

module.exports.help = {
    name: 'play'
}