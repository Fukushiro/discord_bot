import Discord from 'discord.js';
import { config } from 'dotenv';
import { buy, getMoney } from './controller/money.controller';
config();
const prefix = '%';
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.on('messageCreate', function (message) {
  //   if (command == 'get') {
  //     const timeTaken = Date.now() - message.createdTimestamp;
  //     message.reply(`DASDAS dsadas ${timeTaken}`);
  //   }
  getMoney(message, prefix);
  buy(message, prefix);
});
client.login(process.env.TOKEN);
