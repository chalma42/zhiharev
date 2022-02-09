let scrollpos = window.scrollY;

const header = document.querySelector(".menu");
const scrollChange = 100;

const add_class_on_scroll = () => header.classList.add("full");
const remove_class_on_scroll = () => header.classList.remove("full");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
});

//стрелочка для меню слева
document.querySelector('.menu__arrow').onclick = function() {
  let elem = document.querySelector('.menu');
  if(elem.classList.contains('active')) {elem.classList.remove('active');}
  else {elem.classList.add('active');}
}

//скрипты для модальных окон
let modal = document.getElementById("myModal");

let btn = document.querySelectorAll(".myBtn");

btn.forEach(element => {
  element.onclick = function() {
    modal.style.display = "block";
  }
});

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}