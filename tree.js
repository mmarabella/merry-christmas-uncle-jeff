const vw = $(window).width();
const vh = $(window).height();
console.log(vw);

$('.container').css('left', (vw/2 - 100));
$('.container').css('top', (vh/2 - 200));

$('.container').on('mouseover', function(){
    $('.bauble').addClass('light');
    $('.star').addClass('star-light');
  });
  
$('.container').on('mouseout', function(){
  $('.bauble').removeClass('light');
});

$('.paper').on('click', function(){
  $('.paper').addClass('paper-animation');
});

$('.pressie').on('click', function() {
  console.log('clicked');
  $('.bottom-flap').toggleClass('flap-color');
  $('.top-flap').toggleClass('invisible');
  $('.paper').toggleClass('invisible');
});