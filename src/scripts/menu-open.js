import $ from "jquery";

// Constants
const $hamburger = document.getElementById('hamburger');

// Adding "open" class when hamburger menu is clicked
$('#hamburger').click(function(){
  $hamburger.classList.toggle('open');
  $('body').attr('id', 'show');
  $(".navwrap").slideToggle();
});

$('li a').click(function(){
  $(".navwrap").slideUp();
  $hamburger.classList.remove('open');
});