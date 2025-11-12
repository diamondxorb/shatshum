const tokenCount = {};
const proximoToken = {"":[]};

const TOKENS = /\p{L}+|\p{N}+|[:?,;!."]+/gu;

function update_proximoToken(tokens) {
    proximoToken[""].push(tokens[0]);
    
    tokens.forEach((primeiroToken, i) => {
        let segundoToken = tokens[i + 1] || "";

        if (!proximoToken[primeiroToken]) {
            proximoToken[primeiroToken] = [];
        }

        proximoToken[primeiroToken].push(segundoToken);
    });
}

function update_tokenCount(tokens) {
    tokens.forEach(t => {
        if (!tokenCount[t]) { tokenCount[t] = 1;}
        else { tokenCount[t]++;}
    });
}

export function treinar_ia(input) {
    let tokens = input.match(TOKENS);
    
    update_proximoToken(tokens);
    update_tokenCount(tokens);
}

export function gerar_resposta(input) {
    let tokenAtual = "";
    let output = [];
    let tokenSeguinte = "";
    
    do {
        const opcoes = proximoToken[tokenAtual];
        
        tokenSeguinte = opcoes[Math.floor(Math.random() * opcoes.length)];
        
        output.push(tokenSeguinte);
        
        tokenAtual = tokenSeguinte;
        
    } while(tokenSeguinte !== "");
    
    return output.join(" ");
}
