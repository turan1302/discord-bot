const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready",(msg)=>{
    console.log(`Bot Hazır: ${client.user.tag}`);
})

client.on("message",msg=>{
    if (msg.content=="iftar"){
        msg.reply("apiyi bulman lazım dostum gerisini mfsoftware den yardım alırsın :grinning:");
    }
})


client.login(TOKEN);