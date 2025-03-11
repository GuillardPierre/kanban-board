window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    createCloseButtonForCard(card);
  });
});

function createCloseButtonForCard(card) {
  var closeButton = document.createElement('button');
  closeButton.innerHTML = 'X';
  card.appendChild(closeButton);

  closeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    card.remove();
    saveBoardState();
  });
}
