const config = require('../config.json');
const https = require('https');

module.exports.run = (bot, message, args) => {
    if (message.content.startsWith(config.prefix)) {
        let member = message.mentions.members.first();

        if(member == '' || member == null)
            message.reply('You noob, you need to tag someone!');
        else {
        https.get('https://insult.mattbas.org/api/insult', (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            
            resp.on('end', () => {
                message.channel.send(member + ' ' + data);
            })
        }).on('error', (err) => {
            console.log('[!] Error caught: ' + err.message);
            });
        }
    }
}

module.exports.help = {
    name: 'insult'
}