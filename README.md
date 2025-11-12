# Shatshum - O Chat Shumbrega da UnB

Chatbot simples desenvolvido com **Cadeias de Markov** para o workshop de Inteligência Artificial da UnB.

## 📁 Estrutura do Projeto

```
shatshumbrega/
├── Versões                            # Pasta com todas versões da implementação
    ├── shat1_Constant.js
    ├── shat2_Ring.js
    ├── shat3_Random.js
    ├── shat4_AprendeFrase.js
    ├── shat5_Tokens.js
    ├── shat6_Regex.js
    ├── shat7_TokenCount.js
    ├── shat8_ProximoToken.js
    ├── shat9_GerandoResposta.js
    ├── shat10_DoMeio.js
    └── shat10_DoMeio2.js
├── LICENSE                            # Licença MIT
├── README.md                          # Documentação
├── shatshum_ui.js                     # Integração entre a UI e as versões
├── shatshum.css                       # Estilos visuais (design simples)
└── shatshum.html                      # Estrutura HTML (simples e semântica)
```


## 🚀 Como Usar

### 1. Abrir o Chatbot
1. Abra a pasta do projeto no seu terminal
2. Rode esse comando:
```
python3 -m http.server
```
3. Abra o servidor local que aparecer no terminal
4. Abra a opção shatshum.html

### 2. Conversar
- Digite sua mensagem no campo de texto
- Pressione **Enter** ou clique no botão **Enviar** para enviar

### 3. Treinar com Arquivo Personalizado
1. Clique no botão **Treinar IA**
2. Selecione um arquivo `.txt` com frases (uma por linha ou separadas por pontos)
3. A IA será retreinada com as novas frases

### 4. Resetar
Clique em **Reset** para limpar o chat e resetar a IA aos dados padrão.

## 🧠 Como Funciona a IA (Cadeias de Markov)

### Conceito Básico
Uma **Cadeia de Markov** é um modelo probabilístico que prevê a próxima palavra baseada na palavra atual.

### Exemplo Prático

**Dados de treinamento:**
- "A UnB é linda"
- "A UnB é moderna"
- "A universidade é grande"

**Cadeia construída:**
```
"" → ["A"]
"A" → ["UnB", "universidade"]
"UnB" → ["é", "é"]
"é" → ["linda", "moderna", "grande"]
"universidade" → ["é"]
"linda" → [""]
"moderna" → [""]
"grande" → [""]
```

**Geração de resposta:**
1. Lê a frase input do usuário e armazena
2. A partir do começo, escolhe próxima palavra aleatoriamente das opções disponíveis
3. Repete até escolher o fim da frase
4. Formata e retorna a resposta


## 🎨 Personalização

### Modificar o CSS
Edite `shatshum.css` para personalizar cores, fontes, animações, etc.


## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Suporte a ES6+ JavaScript
- Nenhuma dependência externa necessária