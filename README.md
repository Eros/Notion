# InsultBot

In simple terms it's a bot that is used to insult your friends and people you don't generally like.
Use this link to add it to your discord: https://discordapp.com/oauth2/authorize?&client_id=527624995317481482&scope=bot&permissions=0

# Developers

The bot is built in NodeJS, if you wish to edit or contribute you will need the following:

unirest

`npm install unirest`

Discord.js

`npm install discord.js`

As well as the config template which is in the root directory of the bot:

```
{
    "discord_token": "TOKEN HERE",
    "rapid_api_token": "TOKEN HERE",
    "prefix": "&"
}
```

The bot runs of Insult Generator API from https://rapidapi.com/Lakerolmaker/api/insult-generator you will need to create an account and use your own token.
