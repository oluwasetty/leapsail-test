$(document).ready(function(){
  $('.angle-down').click(function(){
    $(this).next().toggle(function(){
      }, function(){3000);
      if ($(this).next().css('display') === "none") {
        alert('us')
      $('#main-features').css('height', '2500px');
      $('#features').css('height', '1500px');
  } else {
      alert('me')
      $('#main-features').css('height', '5000px');
      $('#features').css('height', '5000px');
  }
  })
})