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
});

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function fixNavBar() {
  if (window.pageYOffset > 90) {
    navBar.classList.add('navbar_fixed');
    padLayer.style.display = 'block';
  } else {
    navBar.classList.remove('navbar_fixed');
    padLayer.style.display = 'none';
  }
}

window.addEventListener('scroll', fixNavBar);
const navBar = document.querySelector('.js_navbar');
const padLayer = document.querySelector('.padlayer');

// deal with date
function date() {
  const d = new Date();
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  setDate('day', d.getMonth());
  setDate('month', month[d.getMonth()]);
  setDate('year', d.getFullYear());
}

function setDate(_class, val) {
  val = val < 0 ? `0${val}` : val;
  document.querySelector(`.${_class}`).innerHTML = val;
}

window.onload = date;