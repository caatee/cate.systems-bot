const { Load } = require('../loaders/cliloader.js');
const colors = require('colors');
const { MessageEmbed } = require('discord.js')

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', colors.red(err));
});



exports.run = (client, messageCreate, args, Discord) => {

  async function main() {

  let name = await messageCreate.author.username

  if(args[0] !== '-silent') {

    const exampleEmbed = new MessageEmbed()
    .setAuthor(messageCreate.author.tag)
    .setTitle('Created CLI succesfully with the following parameters.')
    .setDescription(`\`name: ${name}@cate.systems\npermission: Owner\``)
    .setTimestamp()

    messageCreate.channel.send({ embeds: [exampleEmbed] });

    Load(name); 
  }
  else
  {

    Load(name);

  }
}

main();
  }