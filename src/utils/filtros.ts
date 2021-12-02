import Discord from 'discord.js';
export function filtrar(message: Discord.Message<boolean>, prefix: string) {
  if (message.author.bot) return false;
  if (!message.content.startsWith(prefix)) return false;
  return true;
}

export function getComando(message: Discord.Message<boolean>, prefix: string) {
  const comandBody = message.content.slice(prefix.length);
  const args = comandBody.split(' ');
  const command = args.shift()?.toLowerCase();
  return command;
}
