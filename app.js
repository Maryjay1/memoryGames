document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    { name: '1', img: 'images/image1.jpeg' },
    { name: '1', img: 'images/image1.jpeg' },
    { name: '2', img: 'images/image2.jpeg' },
    { name: '2', img: 'images/image2.jpeg' },
    { name: '3', img: 'images/image3.jpeg' },
    { name: '3', img: 'images/image3.jpeg' },
    { name: '4', img: 'images/image4.jpeg' },
    { name: '4', img: 'images/image4.jpeg' },
    { name: '5', img: 'images/image5.jpeg' },
    { name: '5', img: 'images/image5.jpeg' },
    { name: '6', img: 'images/image6.jpeg' },
    { name: '6', img: 'images/image6.jpeg' },
  ];

  const grid = document.querySelector('.grid');
  var cardsChosen = [];
  var cardChosenId = [];

  //create your board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/cardCover.jpeg');
      card.setAttribute('data-id', i);
      //card.addEventListener('click', flipcard)
      grid.appendChild(card);
    }
  }

  //check for matches

  //flip your card
  function flipcard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(chckForMatch, 500);
    }
  }

  createBoard();
});
