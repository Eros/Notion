const queue = new Queue();

module.exports.run = (bot, message, args) => {
    var song = message.split()[1];
    queue.addElement(message.content);
    message.reply(`Added ${song} to the queue`)
}

module.exports.help = {
    name: 'add'
}