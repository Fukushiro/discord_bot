function success(RESPONSE: any) {
  return { response: RESPONSE, funcionou: true };
}

function falhaSemRetorno() {
  return { response: null, funcionou: false };
}

function falhaComRetorno(RESPONSE: any) {
  return { response: RESPONSE, funcionou: false };
}

export { success, falhaComRetorno, falhaSemRetorno };
