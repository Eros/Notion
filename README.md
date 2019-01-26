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

# Other crap

Due to some people using the bot in malicious ways (aka spamming the fuck out of the API intentionally) a globally banning feature is being implemented,
while the one on the AWS server is live and is preventing said users from using the bot the one in the source code is now being written in a MongoDB colleciton.
The bot will not store any form of messages, content (images, videos etc) nor will it store server information. Looking at the source code it is accessing 
one collection called Global_Banned this will store a users discord discrim (the random numbers and letters) and run a check when they use the bot.

# Disclaimer

The bot is meant to be for fun. If you find yourself hurt, offended, upset or anything from what it says then that aint my problem. Also I know my friends will view this
code and likely say its shit. I KNOW I GOT BORED OKAY.