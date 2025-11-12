const tokenCount = {};
const proximoToken = {"":[]};

const TOKENS = /\p{L}+|\p{N}+|[:?,;!."]+/gu;

export function treinar_ia(input) {}

export function gerar_resposta(input) {
    const tokens = input.match(TOKENS);
    
    proximoToken[""].push(tokens[0]);
    
    for (let i = 0; i < tokens.length; i++) {
        const primeiroToken = tokens[i];
        const segundoToken = tokens[i+1] || "";
        
        if(!proximoToken[primeiroToken]){
            proximoToken[primeiroToken] = [];
        }
        
        proximoToken[primeiroToken].push(segundoToken);
    }

    return JSON.stringify(proximoToken);
}
