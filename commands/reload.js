const colors = require('colors')

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', colors.red(err));
});

exports.run = (client, messageCreate, args) => {
    if(messageCreate.author.id = '627652596861108235' || '459268741138612226') {
    if(!args || args.length < 1) return messageCreate.reply("Must provide a command name to reload.");
    const commandName = args[0];
    if(!client.commands.has(commandName)) {
      return messageCreate.reply("That command does not exist");
    }
    delete require.cache[require.resolve(`./${commandName}.js`)];
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    messageCreate.reply(`The command ${commandName} has been reloaded`);
}
  };