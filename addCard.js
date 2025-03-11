console.log('Kanban JS loaded...');

function addEventDraggable(card) {
  card.setAttribute('draggable', 'true');

  card.addEventListener('dragstart', (event) => {
    dragged = event.target;
    event.target.classList.add('dragging');
  });

  card.addEventListener('dragend', (event) => {
    event.target.classList.remove('dragging');
    dragged = null;
  });
}

// Exemple éventuel de structure
window.addEventListener('DOMContentLoaded', () => {
  // Ici, on récupère les éléments du DOM
  const addCardBtn = document.getElementById('addCardBtn');
  const addCardFormContainer = document.querySelector('.formContainer');
  const todoCardColumn = document.querySelector('.column[data-status="todo"]');
  const addCardForm = document.querySelector('#addCardForm');
  const addCardCancelbtn = document.querySelector('#cancelBtn');
  let currentId = 5;

  // Éventuellement, on écoute les événements
  addCardBtn.addEventListener('click', () => {
    if (addCardFormContainer.classList.contains('hidden')) {
      addCardFormContainer.classList.remove('hidden');
    } else {
      addCardFormContainer.classList.add('hidden');
    }
  });

  addCardCancelbtn.addEventListener('click', () => {
    addCardFormContainer.classList.add('hidden');
  });

  addCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const dataForm = { title, description, priority };
    console.log(dataForm);
    addCard(dataForm);

    // Clear fields
    addCardForm.reset();
    addCardFormContainer.classList.add('hidden');
  });

  function addCard(data) {
    // Card
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', currentId);
    card.setAttribute('data-priority', data.priority);

    currentId++;

    // h3
    const heading = document.createElement('h3');
    heading.textContent = data.title;

    // paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = data.description;

    // add h3 & paragraph to card
    card.appendChild(heading);
    card.appendChild(paragraph);

    // add card to column
    todoCardColumn.appendChild(card);
    addEventDraggable(card);
    createCloseButtonForCard(card);
    allCards = document.querySelectorAll('.card');
  }
});
