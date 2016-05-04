$(function() {
	$('.field, textarea').focus(function() {
        if(this.title==this.value) {
            this.value = '';
        }
    }).blur(function(){
        if(this.value=='') {
            this.value = this.title;
        }
    });

    $('#slider .slides').jcarousel({
    	scroll: 1,
		auto: 7,
		itemFirstInCallback : mycarousel_firstCallback,
        wrap: 'both',
		buttonNextHTML: null,
		buttonPrevHTML: null
    });
    function mycarousel_firstCallback(carousel, item, idx) {
        $('#slider .nav a').bind('click', function() {
            carousel.scroll(jQuery.jcarousel.intval($(this).text()));
            $('#slider .nav a').removeClass('active');
            $(this).addClass('active');
            return false;
        });
        $('#slider .nav a').removeClass('active');
        $('#slider .nav a').eq(idx-1).addClass('active');
    }

    var navPadding = (($('#navigation .shell').width() - 6 - $('#navigation ul').outerWidth() ) / $('#navigation ul').children().length)/2;
    $('#navigation ul li a').css({ 'padding-left':navPadding, 'padding-right':navPadding});

    $('#slider .nav ul').css({ width: $('#slider .nav ul').children().length*18})

    if ( $.browser.opera ) $('#slider .image img, #slider .jcarousel-container').css({ 'border-bottom-left-radius':0 , 'border-bottom-right-radius': 0, 'border-top-left-radius':0, 'border-top-right-radius':0 });

    $('.social-links a').hover(function(){
        $(this).find('img').stop(true, true).fadeTo(300, 0.5);
    }, function(){

        $(this).find('img').stop(true, true).fadeTo(300, 1);
    });
	

});