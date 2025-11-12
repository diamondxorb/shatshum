const tokenCount = {};

export function treinar_ia() {}

const TOKENS = /\p{L}+|\p{N}+|[:?,;!."]+/gu;

export function gerar_resposta(input) {
    const tokens = input.match(TOKENS);
    
    for (let i = 0; i < tokens.length; i++) {
        let t = tokens[i];
        
        if (!tokenCount[t]) { tokenCount[t] = 1;}
        else { tokenCount[t]++; }
    }
    
    return JSON.stringify(tokenCount);
}
