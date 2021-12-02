import Discord from 'discord.js';
import { config } from 'dotenv';
import { getMoney } from './controller/money.controller';
config();
const prefix = '%';
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

console.log(process.env.TOKEN);

client.on('messageCreate', function (message) {
  console.log('dsadsa');

  //   if (command == 'get') {
  //     const timeTaken = Date.now() - message.createdTimestamp;
  //     message.reply(`DASDAS dsadas ${timeTaken}`);
  //   }
  getMoney(message, prefix);
});
client.login(process.env.TOKEN);
