$(document).ready(function(){
  // $('.angle-down').click(function(){
  //   $(this).next().toggle(function(){
  //     alert('me')
  //     $('#main-features').css('height', '5000px');
  //     $('#features').css('height', '5000px');
  //     }, function(){
  //       alert('us')
  //     $('#main-features').css('height', '2500px');
  //     $('#features').css('height', '1500px');
  //       }, 3000);
  // })
    $('.angle-down').toggle(function(){
    // $(this).next().css('display', 'show');
      alert('me')
      $('#main-features').css('height', '5000px');
      $('#features').css('height', '5000px');
      }, function(){
    // $(this).next().css('display', 'hide');
    //     alert('us')
    //   $('#main-features').css('height', '2500px');
    //   $('#features').css('height', '1500px');
        });
})