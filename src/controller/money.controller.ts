import Discord from 'discord.js';
import {
  buyGeneratorService,
  getMoneyService,
} from '../service/money.services';
import { filtrar, getComando } from '../utils/filtros';
export async function getMoney(
  message: Discord.Message<boolean>,
  prefix: string
) {
  if (!filtrar(message, prefix)) {
    return;
  }

  const { comando } = getComando(message, prefix);
  if (comando == 'getmoney') {
    const userId = message.author.id;
    const guildId = message.guild?.id ?? '';
    const { response, funcionou } = await getMoneyService(userId, guildId);

    if (funcionou) {
      message.reply(
        `Cash:${response.data.cash}, Bank:${response.data.bank}, Total:${response.data.total}`
      );
    }
  }
}

export async function buy(message: Discord.Message<boolean>, prefix: string) {
  if (!filtrar(message, prefix)) {
    return;
  }

  const { comando, args } = getComando(message, prefix);
  const arg1: number = Number(args[0]);
  const arg2: number = Number(args[1]);
  console.log(args);

  if (comando == 'buy') {
    const userId = message.author.id;
    const guildId = message.guild?.id ?? '';
    const { response, funcionou } = await buyGeneratorService(
      userId,
      guildId,
      <number>arg1,
      <number>arg2
    );

    if (funcionou) {
      // message.reply(
      //   `Cash:${response.data.cash}, Bank:${response.data.bank}, Total:${response.data.total}`
      // );
    }
  }
}
