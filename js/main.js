$(function () {



  $('.menu-mobile').on('click',function(e){
      e.preventDefault();
      $('.menu-mobile__btn').toggleClass('menu-mobile__active')
      $('.menu__list').toggleClass('menu-mobile__active')
      $('body').toggleClass('lock')
      $('.toggle-container').toggleClass('menu-mobile__active')
      $('.info__list-btn').toggleClass('menu-mobile__active')
      
  });//для добавления класа
  



  $('.menu__list-link').on('click',function(){
    // $('.menu-mobile__active').toggle()
    $('.menu__list').removeClass('menu-mobile__active')
    $('.menu-mobile__btn').removeClass('menu-mobile__active')
    $('.toggle-container').removeClass('menu-mobile__active')
    $('.info__list-btn').removeClass('menu-mobile__active')

    $('body').removeClass('lock')
  });





 $('body').addClass('dark').removeClass('dark');
  
  $(".star-html").rateYo({
    rating: 4,
    starWidth: "26px",
    readOnly: true,
    spacing: "9px",
    ratedFill: "#070707"
});
  $(".star-html").rateYo({
    rating: 4,
    starWidth: "26px",
    readOnly: true,
    spacing: "9px",
    ratedFill: "#070707"
});
  $(".star-js").rateYo({
    rating: 2,
    starWidth: "26px",
    readOnly: true,
    spacing: "9px",
    ratedFill: "#070707"
});
$(".star-bem").rateYo({
  rating: 3,
  starWidth: "26px",
  readOnly: true,
  spacing: "9px",
  ratedFill: "#070707"
});
$(".star-gulp").rateYo({
  rating: 4,
  starWidth: "26px",
  readOnly: true,
  spacing: "9px",
  ratedFill: "#070707"
});
$(".star-git").rateYo({
  rating: 3,
  starWidth: "26px",
  readOnly: true,
  spacing: "9px",
  ratedFill: "#070707"
});
$(".star-bootstrap").rateYo({
  rating: 3,
  starWidth: "26px",
  readOnly: true,
  spacing: "9px",
  ratedFill: "#070707"
});

$(".star-sass").rateYo({
  rating: 4,
  starWidth: "26px",
  readOnly: true,
  spacing: "9px",
  ratedFill: "#070707"
});
$(".star-wordpress").rateYo({
  rating: 2,
  starWidth: "26px",
  readOnly: true,
  spacing: "9px",
  ratedFill: "#070707"
});




// const swup = new Swup();
$(document).ready(function(){
  var body = $("body");
  body.fadeIn(600);
  $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function(e) {
   e.preventDefault();
   $("body").fadeOut(600);
   var self = this;
   setTimeout(function () {
    window.location.href = $(self).attr("href");
   }, 600);
  });
 });


 var checkbox = document.querySelector('input[name=theme]');

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 800)
        }
        new WOW().init();
        $('.menu__btn').on('click', function () {
          $('.menu__list').slideToggle();
      });

});
window.onload = function () {
  var smoothJumpUp = function() {
    if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 0);
    }
  }
  
  window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    document.getElementById('upbutton').style.display = 'block';
  } else {
    document.getElementById('upbutton').style.display = 'none';
  }
  }

  }

  let nightMode = document.querySelector('#night-mode');
  let mode = false;
  nightMode.addEventListener('click',function(){
    if (mode == false){
      mode = true;
      document.querySelector('body').style.background = '#000';
    }else{
      mode = false;
    }
  });


