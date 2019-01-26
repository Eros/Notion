const dbUtils = require('../mongoUtils');

module.exports.run = (bot, message, args) => {
    if(message.author.id !== '226423378817449985') { //lock it so that it's only the developer who can run the command
        message.reply('You cannot run this command!');
    } else {
        console.info('Creating new doc in Global_Banned for ' + args[0]);
        dbUtils.utils.create({username: message.author.id});
        console.info('Created new doc in Global_Banned for ' + args[0]);
        dbUtils.utils.update({username: message.author.id, 'status': true});
        console.info('Updated doc for ' + args[0] + ' set user to be globally banned!');
        message.reply(':green_checkmark: Globally banned ' + args[0]);
    }
}

module.exports.help = {
    name: 'globalban'
}