let elopenmodal = document.getElementById('menu');
let elClosemodal = document.getElementById('close');
let elopen = document.getElementById('navbar');

elopenmodal.addEventListener('click', function () {
  elopen.classList.add('show');
  elopenmodal.classList.add('hide');
  elClosemodal.classList.add('show-it');
});

elClosemodal.addEventListener('click', function () {
  elopenmodal.classList.remove('hide');
  elopen.classList.remove('show');
  elClosemodal.classList.remove('show-it');
});

var topbutton = document.getElementById('up');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topbutton.style.opacity = "1";
    topbutton.style.transition = "all 0.5s linner";
  } else {
    topbutton.style.opacity = "0";
    topbutton.style.transition = "all 0.5s linner";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}