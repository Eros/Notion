# InsultBot

In simple terms it's a bot that is used to insult your friends and people you don't generally like.
Use this link to add it to your discord: https://discordapp.com/oauth2/authorize?&client_id=527624995317481482&scope=bot&permissions=0

# Developers

The bot is built in NodeJS, if you wish to edit or contribute you will need the following:

Discord.js

`npm install discord.js`

As well as the config template which is in the root directory of the bot:

```
{
    "discord_token": "TOKEN HERE",
    "prefix": "&"
}
```

The bot runs of Insult Generator API from https://rapidapi.com/Lakerolmaker/api/insult-generator you will need to create an account and use your own token.

## Updates

28/09/2019:

Removed the old API from the insult command, the API had died and was no longer working just throwing
a html error. As of now it has been replaced with one that does not require a key from RapidAPI, and no
longer requires unirest.

08/11/2019:

Added in the boomer command to send a boomer video. Fixed the help command. Fucked up the AWS 
server and fixed it again, removed ForeverJS framework in the main file as it's running server
side now.
