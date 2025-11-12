const TOKENS = /\p{L}+|\p{N}+|[:?,;!.]+/gu;
const TOKENS_SEM_PONTUACAO = /\p{L}+|\p{N}+/gu;

const INICIO = ' i n i c i o ';
const FIM = ' f i m ';

var tokens_sucessores   = {};
var tokens_antecessores = {};
var contador_de_tokens  = {};

export function treinar_ia(input) {
  let input_tokens = input.match(TOKENS);
  if(input_tokens.length == 0) { return; }
  input_tokens.push(FIM);

  let prev_token = INICIO;
  for(const next_token of input_tokens) {
    if(next_token != FIM) {
      if(!(next_token in contador_de_tokens)) {
        contador_de_tokens[next_token] = 0;
      }
      ++contador_de_tokens[next_token];
    }

    if(!(prev_token in tokens_sucessores)) { tokens_sucessores[prev_token] = []; }
    tokens_sucessores[prev_token].push(next_token);
    if(!(next_token in tokens_antecessores)) { tokens_antecessores[next_token] = []; }
    tokens_antecessores[next_token].push(prev_token);
    prev_token = next_token;
  }
}


export function gerar_resposta(input) {
  const assunto = get_assunto(input);
  let tokens = [...escolhe_lista_de_tokens(tokens_antecessores, assunto, INICIO)].reverse();
  if(assunto != INICIO) {
    tokens.push(assunto);
  }
  tokens.push(...escolhe_lista_de_tokens(tokens_sucessores, assunto, FIM));

  return tokens.join(' ')
    .replace(/\s+([:?,;!.])/g, '$1')
    .replace(/(\p{N}[,.])\s+(\p{N})/gu, '$1$2');
}


function* escolhe_lista_de_tokens(cadeia, start_token, ate) {
  var last_token = start_token;
  if(!(last_token in cadeia)) { return; }

  while(true) {
    const next_token_array = cadeia[last_token];
    const next_token = next_token_array[Math.floor(Math.random()*next_token_array.length)];
    if(next_token == ate) { return; }
    last_token = next_token;
    yield next_token;
  }
}


function get_assunto(input) {
  let input_tokens = input.match(TOKENS_SEM_PONTUACAO);
  let assunto = INICIO;
  let current_ocorrencias = Infinity;
  for(const token of input_tokens) {
    if(!(token in contador_de_tokens)) { continue; }

    if(contador_de_tokens[token] < 3) { continue; }
    if(contador_de_tokens[token] <= current_ocorrencias) {
      assunto = token;
      current_ocorrencias = contador_de_tokens[token];
    }
  }
  console.log("Assunto:", assunto);
  return assunto;
}