$(document).ready(function(){
  $('.angle-down').click(function(){
    $(this).next().toggle(3000);
      if ($(this).next().css('display') === "none") {
      $('#main-features').css('height', '2500px');
      $('#features').css('height', '1500px');
  } else {
      $('#main-features').css('height', '3500px');
      $('#features').css('height', '2500px');
  }
  })
})