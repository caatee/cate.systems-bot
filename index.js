//shit fard code no bevery good code
const Discord = require('discord.js')
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
require('dotenv').config()
client.Commands = new Discord.Collection()
const config = require('./config.json')
const colors = require('colors')
client.config = config;
const fs = require("fs")

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;  
      const event = require(`./events/${file}`); 
      let nameevent = file.split(".")[0];

      client.on(nameevent, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
  });
  client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let command = file.split(".")[0];
    let thecommand = require(`./commands/${file}`);
    console.log(colors.green('[SUCCESS] ') + (`Loaded command ${command}`));
    
    client.commands.set(command, thecommand);
  });
});
client.login(process.env.DISCORD_TOKEN)