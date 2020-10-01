// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const config = require('./config.json');
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.on('message', message => {
    if (message.author.username === 'Derek')
    {
        rand = Math.round(Math.random()*config.phrases.length-1);
        message.channel.send(config.phrases[rand]);
    }
    if (message.member.hasPermission("ADMINISTRATOR"))
    {
        if(message.content.startsWith(console.prefix + console.addition))
        {

        }
    }
});




// login to Discord with your app's token
client.login(config.token);