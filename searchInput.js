function searchFunction() {
  const newCardsArr = Array.from(allCards);
  const searchValue = event.target.value.toLocaleLowerCase();
  newCardsArr.forEach((card) => {
    card.style.display = '';
  });
  if (searchValue) {
    const filterCards = newCardsArr.filter((card) => {
      const str = card.querySelector('p').innerText.toLocaleLowerCase();
      return !str.includes(searchValue);
    });

    filterCards.forEach((card) => {
      card.style.display = 'none'; // Masquer les cartes non correspondantes
    });
  }
}
