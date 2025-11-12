const resposta_padrao = "Acabou meu repertório..."
const repertorio = [
  "Como você se chama?",
  "E como as outras pessoas chamam você? :-)",
  "Meu nome é ShatShum!",
  "Tenho 19 anos. E você?",
  "Eu gosto de matemática. E você?",
  "Então, você gosta de matemática... e de computação, também! Que bacana!",
  "Inteligente... pero no mucho!",
  "Contém aromatizante artificial de inteligência, sabor idêntico ao original!",
  "Não me canso de jogar conversa fora...",
];

export function treinar_ia(input) {
  repertorio[repertorio.length] = input;
}

export function gerar_resposta(input) {
  if(repertorio.length == 0) {
    return resposta_padrao;
  }

  return repertorio[Math.floor(Math.random() * repertorio.length)];
}
