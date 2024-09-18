(function (global, $) {

    var $menu     = $('#gnb li a'),
		$quick     = $('#quick_menu a '),
        $contents = $('.scroll'),
        $doc      = $('html, body');
	
	$(function () {
        $menu.on('click','a', function(e){
            var $target = $(this).parent(),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop().animate({ scrollTop:0 },800);
            return false;
        });
    });
		
    $(window).scroll(function(){

        var scltop = $(window).scrollTop();

        $.each($contents, function(idx, item){
            var $target   = $contents.eq(idx),
                i         = $target.index(),
                targetTop = $target.offset().top - 76;
				
            if (targetTop <= scltop) {
                $menu.removeClass('active');
                $menu.eq(idx).addClass('active');
				$quick.removeClass('active');
                $quick.eq(idx).addClass('active');
				$("#header").removeClass("active");
            }
        })

    });

}(window, window.jQuery));


$(document).ready(function(){
	$("a.scroll2").click(function(event){            
		var $anchor = $(this);
		$('html,body').stop().animate({
			scrollTop:$($anchor.attr('href')).offset().top - 70
		}, 800);
		event.preventDefault();
	});
	
	$("a.scroll3").click(function(event){            
		var $anchor = $(this);
		$('html,body').stop().animate({
			scrollTop:$($anchor.attr('href')).offset().top - 30
		}, 800);
		event.preventDefault();
	});
	
	
	
	
});