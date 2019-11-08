const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        let tagged = message.mentions.members.first();
        if(tagged == '' || tagged == null)
            message.reply('Wow now whos the boomer? (TAG SOMEONE!)')
        else {
            message.channel.send('Okay boomer ' + tagged, {
                files: ['./boomer.mp4']
            });
        }
    }
}

module.exports.help = {
    name: 'boomer'
}