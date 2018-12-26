const Discord = require('discord.js');
const unirest = require('unirest');
const config = require('../config.json');

module.exports.run = (bot, message, args) => {
    unirest.get("https://lakerolmaker-insult-generator-v1.p.rapidapi.com/?mode=random")
        .header("Authorization", "FREE")
        .header("X-RapidAPI-Key", config.rapid_api_token)
        .end(function (result) {
          console.log(result.raw_body);
    });
}