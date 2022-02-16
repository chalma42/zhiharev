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
let modal2 = document.getElementById("myModal2");

let btn = document.querySelectorAll(".myBtn");
let btn2 = document.querySelectorAll(".myBtn2");

btn.forEach(element => {
  element.onclick = function() {
    modal.style.display = "block";
  }
});
btn2.forEach(element => {
  element.onclick = function() {
    modal2.style.display = "block";
  }
});

let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close2")[0];

span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
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
$('#tel3').inputmask({"mask": "+7 (999) 999-9999"}); 


/*отправка данных с формы Заправка картриджей*/
$("#refillingCartridges").submit(function(e) {
  let form = $('#refillingCartridges')[0];
  let formData = new FormData(form);
  console.log();
  if (!$('input[name*="tel"]').val()) {
    $('input[name*="tel"]').css('border-color', 'red');
    $('input[name*="tel"]').css('background-color', '#ffdada');
    return false;
  } else {
    $('input[name*="tel"]').css('border-color', '#D3ECFF');
    $('input[name*="tel"]').css('background-color', '#E4F0F9');
  }
  if (!$('input[name*="name"]').val()) {
    $('input[name*="name"]').css('border-color', 'red');
    $('input[name*="name"]').css('background-color', '#ffdada');
    return false;
  } else {
    $('input[name*="name"]').css('border-color', '#D3ECFF');
    $('input[name*="name"]').css('background-color', '#E4F0F9');
  }
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "../lib/post.php",
    //data: $("#refillingCartridges").serialize(),
    processData: false,
    contentType: false,
    data: formData,
    success: function(data) {
      $(".tabs").css('display', 'none');
      $(".tabs-content").css('display', 'none');
      $("#my_form_message").addClass('open');
      $("#my_form_message").html(data);
    }
  });
});
/*отправка данных с формы Ремонт оргтехники*/
$("#repair").submit(function(e){
  let form2 = $('#repair')[0];
  let formData2 = new FormData(form2);

  if (!$('#repair input[name*="tel"]').val()) {
    $('#repair input[name*="tel"]').css('border-color', 'red');
    $('#repair input[name*="tel"]').css('background-color', '#ffdada');
    return false;
  } else {
    $('#repair input[name*="tel"]').css('border-color', '#D3ECFF');
    $('#repair input[name*="tel"]').css('background-color', '#E4F0F9');
  }
  if (!$('#repair input[name*="name"]').val()) {
    $('#repair input[name*="name"]').css('border-color', 'red');
    $('#repair input[name*="name"]').css('background-color', '#ffdada');
    return false;
  } else {
    $('#repair input[name*="name"]').css('border-color', '#D3ECFF');
    $('#repair input[name*="name"]').css('background-color', '#E4F0F9');
  }

  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "../lib/post.php",
    processData: false,
    contentType: false,
    data: formData2,
    success: function(data) {
      $(".tabs").css('display', 'none');
      $(".tabs-content").css('display', 'none');
      $("#my_form_message").addClass('open');
      $("#my_form_message").html(data);
    }
  });
});

/*отправка данных с формы Стать партнером*/
$("#beParnter").submit(function(e){
  let form3 = $('#beParnter')[0];
  let formData3 = new FormData(form3);

  
  if (!$('#beParnter input[name*="name"]').val()) {
    $('#beParnter input[name*="name"]').css('border-color', 'red');
    $('#beParnter input[name*="name"]').css('background-color', '#ffdada');
    return false;
  } else {
    $('#beParnter input[name*="name"]').css('border-color', '#D3ECFF');
    $('#beParnter input[name*="name"]').css('background-color', '#E4F0F9');
  }
  if (!$('#beParnter input[name*="tel"]').val()) {
    $('#beParnter input[name*="tel"]').css('border-color', 'red');
    $('#beParnter input[name*="tel"]').css('background-color', '#ffdada');
    return false;
  } else {
    $('#beParnter input[name*="tel"]').css('border-color', '#D3ECFF');
    $('#beParnter input[name*="tel"]').css('background-color', '#E4F0F9');
  }

  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "../lib/post.php",
    processData: false,
    contentType: false,
    data: formData3,
    success: function(data) {
      $("#beParnter").css('display', 'none');
      $("#my_form_message2").addClass('open');
      $("#my_form_message2").html(data);
    }
  });
});