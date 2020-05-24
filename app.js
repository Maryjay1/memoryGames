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

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardChosenId = [];
  const cardsWon = [];

  //create your board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/cardCover.jpeg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/cardCover.jpeg');
      cards[optionTwoId].setAttribute('src', 'images/cardCover.jpeg');
      alert('You have clicked the same image!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/cardCover.jpeg');
      cards[[optionTwoId]].setAttribute('src', 'images/cardCover.jpeg');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulation! You found them all!';
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
