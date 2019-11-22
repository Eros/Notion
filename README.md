![Notion Image](notion.png)

Formerly known as InsultBot Notion is a bot designed to have fun
around your discord server. It does not provide any form of moderation apart
from the ability to purge messages.

# Developers

If you want to contribute to Notion then you'll need the following

1) NodeJS (https://nodejs.org/en/)
2) Discord.js `npm install discord.js`
3) unirest `npm install unirest`
4) urban dictionary `npm install urban-dictionary`
5) yoMamma `npm install yo-mamma`

You'll also have to create a config.json file in the parent directory
this looks like

```json
{
"discord_token": "DISCORD TOKEN HERE",
"rapid_api_token": "RAPID API TOKEN HERE",
"robomatic_auth": "ROBOMATIC AUTH HERE", //GET THIS FROM THE RAPID API PAGE 
"prefix": "&"
}
```
To learn about discord development read through this:
https://discordapp.com/developers/docs/intro

A few of the APIs are hosted on RapidAPI which requires one key only
to manage you'll need to create an account and generate your API key at https://rapidapi.com
you wont need to do much else unless you want to track the amount of uses of each API.

To start the bot simply run `node bot.js` in the parent directory.

# Disabled Commands

Some commands are currently disabled due to errors that I haven't gotten round to fixing yet. As of now
there are currently two commands that are disabled.

#### rps

This provides a simple rock paper scissors game.

Current issue > currently it uses emojis for the game input, all of the emojis currently work except the scissors one, this ends up breaking the bot and causes it to crash.

#### chat

This command hooks into the robomatic api as a chat api

Current issue > no matter what the input is output comes back as empty, this happens no matter where you test the api and is something on the api developers side.

# Contributing

Contributions are welcome but please follow some guidelines:

1) Your contribution MUST be in a different branch, I will not review it if it's in the master branch
2) Keep it in JavaScript. I don't mind external APIs being used but don't use other languages
3) Follow discords developer terms of service, if anything breaks this your contribution will not be included.
4) I'm busy a lot - I'll review it when I get to it so please don't beg me
5) Submit your contribution via pull request, I'll review it and merge if it's good
6) Bugs should be submitted under the issues tab, alternatively they can be tweeted to me at https://twitter.com/RapidTheNerd
# Todo list and known bugs

### Bugs

1) Rock paper scissors command currently throws an error whenever the user selects scissors, any other emoji works fine
2) Commands can only be ran if the start of the command has a check whether or not the content starts with config.prefix
   
   2.1. This is also checked in the bot.js file under the command manager