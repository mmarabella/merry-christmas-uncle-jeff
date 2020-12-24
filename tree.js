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