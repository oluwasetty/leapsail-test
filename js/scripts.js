$(document).ready(function() {
    $('.angle-down img').click(function() {
        $mdiv = $(this).parents('.material').next();
        $('.feature-list').not($mdiv).not('#lg-feature-list').hide()
        $mdiv.toggle(3000);
        $('.angle-down img').css('transform', 'none')
        if ($mdiv.css('display') === "none") {
            $('#main-features').css('height', '2500px');
            $('#features').css('height', '1500px');
        } else {
            $('#main-features').css('height', '4800px');
            $('#features').css('height', '4000px');
            $(this).css('transform', 'rotate(180deg)')
        }
    })
})