console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
    // Ici, on récupère les éléments du DOM
    const addCardBtn = document.getElementById("addCardBtn");
    const addCardFormContainer = document.querySelector(".formContainer");
    const todoCardColumn = document.querySelector('.column[data-status="todo"]');
    const addCardForm = document.querySelector("#addCardForm");
    const addCardCancelbtn = document.querySelector("#cancelBtn");

    // Éventuellement, on écoute les événements
    addCardBtn.addEventListener("click", () => {
        if (addCardFormContainer.classList.contains("hidden")) {
            addCardFormContainer.classList.remove("hidden");
        } else {
            addCardFormContainer.classList.add("hidden");
        }
    });

    addCardCancelbtn.addEventListener("click", () => {
        addCardFormContainer.classList.add("hidden");
    });

    addCardForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(addCardForm);
    });

    function addCard(data) {

        // Créer un nouvel élément div
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-id', '1'); // Incrémenter
        card.setAttribute('data-priority', 'high');

        // Créer l'élément h3
        const heading = document.createElement('h3');
        heading.textContent = 'Tâche';

        // Créer l'élément p
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Contenu de la tâche';

        // Ajouter les éléments h3 et p à la div card
        card.appendChild(heading);
        card.appendChild(paragraph);

        // Ajouter la carte au body ou à un autre conteneur
        todoCardColumn.body.appendChild(card);
    };

});
