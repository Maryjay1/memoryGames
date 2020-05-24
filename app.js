document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    { name: 'false', img: 'images/image1.jpeg' },
    { name: 'false', img: 'images/image2.jpeg' },
    { name: 'false', img: 'images/image3.jpeg' },
    { name: 'false', img: 'images/image4.jpeg' },
    { name: 'false', img: 'images/image5.jpeg' },
    { name: 'false', img: 'images/image6.jpeg' },
  ];
});

const grid = document.querySelector.('.grid')

//create your board

function createBoard() {
    for (let i - 0; i >cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/cardCover.jpeg')
        card.setAttribute('data-id', )
    }
}
