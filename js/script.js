const imgsUrl = [
  'img/img16.jpg',
  'img/img17.jpg',
  'img/img18.jpg',
  'img/img19.jpg',
  'img/img20.jpg',
  'img/img21.jpg'
];

const heroImags = document.querySelectorAll('.hero .carousel-item');
heroImags.forEach((item, index) => {
  item.style.backgroundImage = `url(${imgsUrl[index]})
  `;
})
