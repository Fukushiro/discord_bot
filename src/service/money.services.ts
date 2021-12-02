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
