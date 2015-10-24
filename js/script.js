$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});
$('.link').click(function(event) {
    $('.link').css("color", "#fff");
    $(this).css("color", "#EAE160");
});

$(document).ready(function() {
    $(".fancybox-button").fancybox({
        prevEffect      : 'none',
        nextEffect      : 'none',
        closeBtn        : false,
        helpers     : {
            title   : { type : 'inside' },
            overlay : { locked : false } ,
            buttons : {}
        }
    });
});

$("#heading").fitText(1.1, { minFontSize: '35px', maxFontSize: '70px' });
$("#sub_heading").fitText(1.1, { minFontSize: '10px', maxFontSize: '20px' });
$("#SeconTitle").fitText(1.1, { minFontSize: '25px', maxFontSize: '40px' });