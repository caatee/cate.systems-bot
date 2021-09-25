module.exports = (client, messageCreate) => {

  if (messageCreate.author.bot) return;

  if (!messageCreate.content.startsWith(client.config.prefix)) return;

  const args = messageCreate.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, messageCreate, args);
};