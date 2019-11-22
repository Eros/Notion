const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    const words = message.content.split(' ').map(w => randomize(w.split(''), 3).map(array => array.join('')));
    message.channel.send(words);
};

module.exports.help = {
    name: 'dyslexic'
};

function randomize(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const position = Math.floor(Math.random() * i + 1);
        const u = array[i];
        array[i] = array[position];
        array[position] = u;
    }
    return array;
}