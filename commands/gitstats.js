const config = require('../config.json')
const octokit = require('@octokit/rest')
const git = new octokit()

module.exports.run = (bot, message, args) => {
    
    git.authenticate({
        type: 'oauth',
        token: config.git_secret_key
    });

    console.log('\n[+] Logged into git\n')
}

module.exports.help = {
    name: 'gitstats'
}