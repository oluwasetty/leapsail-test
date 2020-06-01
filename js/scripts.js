$(document).ready(function(){
  $('.angle-down').click(function(){
    $mdiv = $(this).next();
    $('.feature-list').not($mdiv).hide()
    $mdiv.toggle(3000);
      if ($mdiv.css('display') === "none") {
      $('#main-features').css('height', '3300px');
      $('#features').css('height', '2000px');
      $(this).find('img').css('transform', 'rotate(180deg)')
  } else {
      $('#main-features').css('height', '4800px');
      $('#features').css('height', '4000px');
      $(this).find('img').css('transform', 'rotate(-180deg)')
  }
  })
})