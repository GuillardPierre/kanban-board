function enableDragAndDrop() {
  const allCards = document.querySelectorAll(".card");
  const columns = document.querySelectorAll(".column");

  let dragged = null;

  columns.forEach((column) => {
    column.classList.add("dropzone");

    column.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    column.addEventListener("dragenter", (event) => {
      event.currentTarget.classList.add("dragover");
    });

    column.addEventListener("dragleave", (event) => {
      event.currentTarget.classList.remove("dragover");
    });

    column.addEventListener("drop", (event) => {
      if (dragged) {
        event.preventDefault();
        event.currentTarget.appendChild(dragged);
        dragged.classList.remove("dragging");
        event.currentTarget.classList.remove("dragover");
        const newStatus = event.currentTarget.getAttribute("data-status");
        dragged.setAttribute("data-status", newStatus);

        saveBoardState();
        dragged = null;
      }
    });
  });

allCards.forEach((card) => {
  addEventDraggable(card);
});

function addEventDraggable(card){
  card.setAttribute('draggable', 'true');

    card.addEventListener("dragstart", (event) => {
      dragged = event.target;
      event.target.classList.add("dragging");
    });

    card.addEventListener("dragend", (event) => {
      event.target.classList.remove("dragging");
      dragged = null;
    });
  };
}
