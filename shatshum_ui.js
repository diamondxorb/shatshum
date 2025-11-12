const chatHistory = document.getElementById('chat-history');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const resetButton = document.getElementById('reset-button');


displayMessage("Olá eu sou um robô e ainda estou aprendendo a falar. Quanto mais você fala comigo mais eu aprendo!", 'bot');

resetButton.addEventListener('click', () => {
    chatHistory.replaceChildren();
    displayMessage('Memória reiniciada.', 'bot');
});



var treinar_ia = (input) => {}
var gerar_resposta = (input) => {
    return "Só sei que nada sei!";
}

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userInput = messageInput.value.trim();

    if (userInput) {
        displayMessage(userInput, 'user');
        if(window.treinar_ia) {treinar_ia = window.treinar_ia;}
        if(window.gerar_resposta) {gerar_resposta = window.gerar_resposta;}
        treinar_ia(userInput);
        displayMessage(gerar_resposta(userInput), 'bot');
        messageInput.value = '';
    }
});

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;
    chatHistory.appendChild(messageElement);

    chatHistory.scrollTop = chatHistory.scrollHeight;
}
