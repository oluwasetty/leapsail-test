$(document).ready(function() {
    $('.angle-down img').click(function() {
        $mdiv = $(this).parent().next();
        $('.feature-list').not($mdiv).hide()
        $mdiv.toggle(3000);
        $('.angle-down img').css('transform', 'none')
        if ($mdiv.css('display') === "none") {
            $('#main-features').css('height', '2800px');
            $('#features').css('height', '1800px');
        } else {
            $('#main-features').css('height', '4800px');
            $('#features').css('height', '4000px');
            $(this).css('transform', 'rotate(180deg)')
        }
    })
})