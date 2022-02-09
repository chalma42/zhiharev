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

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let tab = document.querySelectorAll('.tabs a');

tab.forEach(elem => {
  elem.onclick = function() {
    if(!this.classList.contains('check')) {
      let currentTab = document.querySelector('.check');
      currentTab.classList.remove('check');
      this.classList.add('check');
    }
  }
});

/*Для формы с файлами*/
$('#refillingCartridges #button').click(function () {
  $("#refillingCartridges input[type='file']").trigger('click');
});
$('#repair #button2').click(function () {
  $("#repair input[type='file']").trigger('click');
});

$("#refillingCartridges input[type='file']").change(function () {
  $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''));
});
$("#repair input[type='file']").change(function () {
  $('#val2').text(this.value.replace(/C:\\fakepath\\/i, ''))
})

//маска телефона
$('#tel').inputmask({"mask": "+7 (999) 999-9999"}); 
$('#tel2').inputmask({"mask": "+7 (999) 999-9999"}); 