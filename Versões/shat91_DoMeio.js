const tokenCount = {};
const proximoToken = {"":[]};
const anteriorToken = {"":[]};

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

function update_anteriorToken(tokens) {
    tokens.reverse();
    
    anteriorToken[""].push(tokens[0]);
    
    tokens.forEach((primeiroToken, i) => {
        let segundoToken = tokens[i + 1] || "";

        if (!anteriorToken[primeiroToken]) {
            anteriorToken[primeiroToken] = [];
        }

        anteriorToken[primeiroToken].push(segundoToken);
    });
}

function update_tokenCount(tokens) {
    tokens.forEach(t => {
        if (!tokenCount[t]) { tokenCount[t] = 1;}
        else { tokenCount[t]++;}
    });
}

function escolher_token(tokens) {
    let menorToken = null;
    let menorCount = Infinity;
    
    tokens.forEach(t => {
        let count = tokenCount[t];
        if (count <= menorCount) {
            menorToken = t;
            menorCount = count;
        }
   });
   
   return menorToken;
}

export function treinar_ia(input) {
    let tokens = input.match(TOKENS);

    update_tokenCount(tokens);    
    update_proximoToken(tokens);
    update_anteriorToken(tokens);
}

export function gerar_resposta(input) {
    let tokenMeio = escolher_token(input.match(TOKENS));
    let output = [];
    let tokenSeguinte = "";
    let tokenAnterior = "";

    output.push(tokenMeio);
    
    let tokenAtual = tokenMeio;
    do {
        let opcoes = proximoToken[tokenAtual];
        
        tokenSeguinte = opcoes[Math.floor(Math.random() * opcoes.length)];
        
        output.push(tokenSeguinte);
        
        tokenAtual = tokenSeguinte;
        
    } while(tokenSeguinte !== "");
    
    tokenAtual = tokenMeio;
    do {
        let opcoes = anteriorToken[tokenAtual];
        
        tokenAnterior = opcoes[Math.floor(Math.random() * opcoes.length)];
        
        output.unshift(tokenAnterior);
        
        tokenAtual = tokenAnterior;
    } while(tokenAnterior !== "");
    
    return output.join(" ");
}
