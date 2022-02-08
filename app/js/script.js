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