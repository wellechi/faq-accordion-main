// Seleciona todos os botões de abertura
const buttonsOpen = document.querySelectorAll('.popup-open1, .popup-open2, .popup-open3, .popup-open4');
// Seleciona todos os botões de fechamento
const buttonsClosed = document.querySelectorAll('.popup-closed1, .popup-closed2, .popup-closed3, .popup-closed4');

// Adiciona os event listeners para abrir cada pop-up individualmente
buttonsOpen.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Seleciona a pop-up correspondente com base no índice do botão
        const popup = document.querySelector(`.popup-wrapper${index + 1}`);
        // Exibe a pop-up correspondente
        popup.style.display = 'block';
    });
});

// Adiciona os event listeners para fechar cada pop-up individualmente
buttonsClosed.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Seleciona a pop-up correspondente com base no índice do botão
        const popup = document.querySelector(`.popup-wrapper${index + 1}`);
        // Oculta a pop-up correspondente
        popup.style.display = 'none';
    });
});





