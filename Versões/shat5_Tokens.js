export function treinar_ia(input) {
}

export function gerar_resposta(input) {
  const tokens = input.split(" ");
  var result = "Tokens... (";
  result += tokens.join("|");
  result += ") --> ";
  
  // Reconstruindo a frase...
  result += tokens.join(' ');
  return result;
}
