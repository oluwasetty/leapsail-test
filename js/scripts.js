$(document).ready(function(){
  $('.angle-down').click(function(){
    $('.feature-list').css('display', 'none');
    $(this).next().toggle(3000);
      if ($(this).next().css('display') === "none") {
      $('#main-features').css('height', '2500px');
      $('#features').css('height', '1500px');
      $(this).find('img').css('transform', 'rotate(180deg)')
  } else {
      $('#main-features').css('height', '4500px');
      $('#features').css('height', '3700px');
      $(this).find('img').css('transform', 'rotate(-180deg)')
  }
  })
})