const Discord = require('discord.js');
var client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus("dnd");
    console.log("Bot Prêt !");
});

client.on('message', message => {
  if (message.content.startsWith("Salut")){
    message.reply("salut");
   }
});

client.login(process.env.BOT_TOKEN);
