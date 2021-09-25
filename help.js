const config = require("./config.json");
const { MessageEmbed } = require('discord.js')
// im is afk brb
//ok :yaycat:
exports.help = {
    category: "information"
}

exports.run = (client, messageCreate, args) => {
    
    const message = messageCreate

    message.channel.send(client.commands.map(cmd => `${cmd.category}`))



    }
//}