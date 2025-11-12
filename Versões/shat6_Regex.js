export function treinar_ia(input) {
}

const TOKENS = /\p{L}+|\p{N}+|[:?,;!.]+/gu;

export function gerar_resposta(input) {
  const tokens = input.match(TOKENS);
  var result = "Tokens... (";
  result += tokens.join("|");
  result += ") --> ";
  
  // Reconstruindo a frase...
  result += tokens.join(' ')
    .replace(/\s+([:?,;!.])/g, '$1')
    .replace(/(\p{N}[,.])\s+(\p{N})/gu, '$1$2');
  return result;
}
