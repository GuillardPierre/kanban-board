// Fonction pour sauvegarder l'état du tableau Kanban dans le localStorage
function saveBoardState() {
  const columns = document.querySelectorAll('.column');
  const boardState = [];

  columns.forEach((column) => {
    const status = column.getAttribute('data-status');
    const cards = Array.from(column.querySelectorAll('.card')).map((card) => ({
      id: card.getAttribute('data-id'),
      priority: card.getAttribute('data-priority'),
      title: card.querySelector('h3').textContent,
      content: card.querySelector('p').textContent,
    }));

    boardState.push({ status, cards });
  });

  // Enregistrement dans le localStorage
  localStorage.setItem('kanbanBoardState', JSON.stringify(boardState));
}

// Fonction pour remettre les éléments au bon endroit après la session
function loadBoardState() {
  const boardStateJSON = localStorage.getItem('kanbanBoardState');
  if (boardStateJSON) {
    const boardState = JSON.parse(boardStateJSON);

    boardState.forEach((columnData) => {
      const column = document.querySelector(
        `.column[data-status="${columnData.status}"]`
      );
      if (column) {
        column.querySelectorAll('.card').forEach((card) => card.remove());

        // Crée et ajoute les cartes dans la colonne après le chargement
        columnData.cards.forEach((cardData) => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.setAttribute('data-id', cardData.id);
          card.setAttribute('data-priority', cardData.priority);

          const h3 = document.createElement('h3');
          h3.textContent = cardData.title;
          const p = document.createElement('p');
          p.textContent = cardData.content;

          card.appendChild(h3);
          card.appendChild(p);
          column.appendChild(card);
          addEventDraggable(card);
        });
      }
    });
  }

  // Appel de la fonction pour activer le drag and drop après le chargement
  // enableDragAndDrop();
}

// Au chargement de la page, on reconstruit le tableau à partir du localStorage
document.addEventListener('DOMContentLoaded', () => {
  loadBoardState();
});
