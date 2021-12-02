import Discord from 'discord.js';
import { getMoneyService } from '../service/money.services';
import { filtrar, getComando } from '../utils/filtros';
export async function getMoney(
  message: Discord.Message<boolean>,
  prefix: string
) {
  if (!filtrar(message, prefix)) {
    return;
  }

  const comando = getComando(message, prefix);
  if (comando == 'getmoney') {
    const userId = message.author.id;
    const guildId = message.guild?.id ?? '';
    const { response, funcionou } = await getMoneyService(userId, guildId);
    console.log(response);

    if (funcionou) {
      message.reply(
        `Cash:${response.data.cash}, Bank:${response.data.bank}, Total:${response.data.total}`
      );
    }
  }
}
