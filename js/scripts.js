$(document).ready(function(){
  $('.angle-down').click(function(){
    $(this).next().toggle(function(){
      $('#main-features').css('height', '5000px');
      $('#features').css('height', '5000px');
      }, function(){
      $('#main-features').css('height', '2500px');
      $('#features').css('height', '1500px');
        }, 3000);
    $()
  })
})