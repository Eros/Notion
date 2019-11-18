// const config = require('../config.json');

// module.exports.run = (bot, message, args) => {
//     if(message.content.startsWith(config.prefix)) {
//         var str = args;
//         var numbers = str.match(/([0-9])/g);
//         str = str.replace(/([a-zA-Z])/g, ':regional_indicator_$1:').toLowerCase();
//         if(numbers) {
//             str = str.replace(/([0-9])/g, match => {
//                 return {"1": ":one:", "2": ":two:", "3": ":three:", "4": ":four:", "5": ":five:", "6": ":six:", "7": ":seven:", "8": ":eight:", "9": ":nine:", "0": ":zero:"}[match];
//             }).replace(/\:one\:\:zero\:\:zero\:/, ":100:").replace(/\:one\:\:zero\:/g, ":keycap_ten:");
//         }
//         console.log(str); //just for debug
//         message.channel.send(str);
//     }
// }

// module.exports.help = {
//     name: 'help'
// }