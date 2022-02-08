let scrollpos = window.scrollY;

const header = document.querySelector(".menu");
const scrollChange = 200;

const add_class_on_scroll = () => header.classList.add("full");
const remove_class_on_scroll = () => header.classList.remove("full");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
});