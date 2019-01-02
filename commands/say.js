const { exec } = require('child_process');

module.exports.run = (bot, message, args) => {
    const voiceChannel = message.member.voiceChannel;

    var outFileName = require('../tts_audio') + message.author.id + '.mp3';
    var voice = "en-uk-north";
    var text = args;
    var command = `espeak.exe -v ${voice} -w ${outFileName} ${text}`;

    voiceChannel.join().then(connection => {
        exec(command, (err, stdout, stderr) => {
            if(err)
                console.log('Error occured while trying to convert tts to file', err);
            else {
                const dispatcher = connection.playFile(outFileName);

                dispatcher.on('end', end => voiceChannel.leave())
            }
        });
    });
}

module.exports.help = {
    name: 'say'
}