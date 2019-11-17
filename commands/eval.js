const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix)) {
        if(message.author.id != '226423378817449985') {
            message.reply('You do not have permission to run this command. Only bot developers do!');
            return;
        } else {
            let script = args.join('');
            if(script.content.contains('_'))
                script.replace('_', ' ');
            message.reply(':alarm_clock: Running your script!').then((reply) => {
                try {
                    let result = eval(script);
                    if(result) 
                        reply.edit(':white_check_mark:')
                    else
                        reply.edit(':white_check_mark: Eval ran, but something went wrong with your script! [No data]');
                } catch(e) {
                    reply.edit(':x: could not evaluate your script!');
                    console.error(e);
                }
            })
        }
    }
}

module.exports.help = {
    name: 'eval'
}