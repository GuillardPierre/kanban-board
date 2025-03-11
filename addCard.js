console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
  // Ici, on récupère les éléments du DOM
  const addCardBtn = document.getElementById("addCardBtn");
  const addCardForm = document.querySelector(".formContainer");
  const addCardCancelbtn = document.querySelector("#cancelBtn");

  // Éventuellement, on écoute les événements
  addCardBtn.addEventListener("click", () => {
    if (addCardForm.classList.contains("hidden")) {
      addCardForm.classList.remove("hidden");
    } else {
      addCardForm.classList.add("hidden");
    }
  });

  addCardCancelbtn.addEventListener("click", () => {
      addCardForm.classList.add("hidden");
  });

});
