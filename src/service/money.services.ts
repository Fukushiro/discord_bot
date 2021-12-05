import { falhaSemRetorno, success } from '.';
import { api } from '../utils/api';

export async function getMoneyService(userId: string, guildId: string) {
  try {
    const response = await api.post('unb/get', {
      guild: guildId,
      user: userId,
    });

    return success(response);
  } catch (e) {
    // console.log(e);

    return falhaSemRetorno();
  }
}

export async function buyGeneratorService(
  userId: string,
  guildId: string,
  generatorId: number,
  amount: number
) {
  try {
    const response = await api.post('usuariogenerator/buy', {
      guild: guildId,
      user: userId,
      generatorId: generatorId,
      amount: amount,
    });

    return success(response);
  } catch (e) {
    return falhaSemRetorno();
  }
}

export async function generateMoney(userId: string, guildId: string) {
  try {
    const response = await api.post('usuariogenerator/generate', {
      user: userId,
      guild: guildId,
    });

    return success(response);
  } catch (e) {
    return falhaSemRetorno();
  }
}
