// J'attends que le DOM soit entièrement chargé pour bien avoir accès à toutes les cards avant de les trier
document.addEventListener("DOMContentLoaded", () => {
  const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");

  // Écouteur d'événement au clic sur le bouton
  sortByPriorityBtn.addEventListener("click", () => {
    // console.log("Click");

    // On séléctionne les colonnes du tableau
    const columns = document.querySelectorAll(".column");

    // On parcours toutes les colonnes en tant que colonne au singulier
    columns.forEach((column) => {
      // On récup les cards en tant que tableau pour pouvoir facilement les manipuler ensuite
      const cards = Array.from(column.querySelectorAll(".card"));

      // On trie les cartes en fonctions de leur "data-priority"
      cards.sort((cardA, cardB) => {
        // Si le résultat est positif, cela signifie que le "cardB" doit être placé avant "cardA" sinon c'est cardA qui sera placé avant cardB
        return (
          getPriorityValue(cardB.getAttribute("data-priority")) -
          getPriorityValue(cardA.getAttribute("data-priority"))
        );
      });

      // Je réinsers les cartes finalement triées dans leur colonne respective
      cards.forEach((card) => {
        column.appendChild(card);
      });
    });
  });
});

// On créé une fonction qui va traduire les priorités en chiffre si tel cas... pour pouvoir facilement les manipuler ensuite
function getPriorityValue(priority) {
  switch (priority) {
    case "high":
      return 3;
    case "medium":
      return 2;
    case "low":
      return 1;
    default:
      return 0;
  }
}
