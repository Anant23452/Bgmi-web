$(function() {
    gnbInit();
    
    commonInit();
	
	animateInit();
    
    mainInit();    
    
});

function gnbInit() {
    //gnb
    $("#header .btn_menu").on("click",function() {
        $("#header").addClass("active");
		$("#popup_mask").show();
        return false;
    });
    $("#header .btn_close").on("click",function() {
        $("#header").removeClass("active");
		$("#header .btn_wrap .btn_sns").removeClass("on");
		$("#popup_mask").hide();
        return false;
    });
    
  
    //top
    var btnTop = $("#btn_top").on("click",function() {
		$("#gnb li a").removeClass("active");
		$(".gnb_menu_01").addClass("active");
        $("html,body").stop(true,true).animate({ scrollTop:0 },300);
        return false;
    });
	
    var header = $("#header");
	var btnshare = $(".btn_share");
	var mask = $("#popup_mask2");
	var subtopselet = $(".sub_visual .select_box");
	
    function topShow() {
        var getHeight = $(window).height();
        var getTop = $(window).scrollTop();
        if(getTop > 0) {
            if(!btnTop.hasClass("active")) btnTop.addClass("active");
        }
        else {
            if(btnTop.hasClass("active")) btnTop.removeClass("active");
        }
        if(getTop > 0) {
            if(!header.hasClass("bg")) header.addClass("bg");
        }
        else {
            if(header.hasClass("bg")) header.removeClass("bg");
        }
		if(getTop > 0) {
            if(mask.hasClass("active")) mask.removeClass("active");			
        }
        else {
            //
        }
		if(getTop > 0) {
            if(btnshare.hasClass("active")) btnshare.removeClass("active");			
        }
        else {
            //
        }
		if(getTop > 0) {
            if(subtopselet.hasClass("active")) subtopselet.removeClass("active");			
        }
        else {
            //
        }
    }
    $(window).on("scroll touchmove",function() {
        topShow();
    });
    topShow();
}

function commonInit() {
    $(".bg_cover").each(function() {
        $(this).css("backgroundImage","url(" + $(this).children(".bg").attr("src") + ")");
    });


}

function animateInit() {
        var getAnimate = $(".page_animate");
        if(getAnimate.length > 0) {
            var animateInterval = null;
            var mainNumberObj = $("#main_number");
            function animateScroll() {
                clearTimeout(animateInterval);
                animateInterval = setTimeout(function() {
                    var getScroll = $(window).scrollTop();
                    var getScrollTop = getScroll + $(window).height();
                    var animateIdx = 0;
                    $(".page_animate").each(function() {
                        var getObj = $(this);
                        var getTop = getObj.offset().top;
                        //var getHeight = getObj.height();
                        if(getScrollTop > getTop) {
                            if(!getObj.hasClass("animate")) {
                                animateIdx += 1;
                                var getAnimateIdx = animateIdx;
                                setTimeout(function() {
                                    getObj.addClass("animate");
                                    if(getObj.hasClass("number_box")) {
                                        var getNumber = parseInt(mainNumberObj.data("value"), 10);
                                        mainNumberObj.html("").prop("count",0).stop(true,true).delay(animateIdx * 100).animate({
                                            count:getNumber
                                        }, {
                                            duration: 4000,
                                            easing:"easeOutExpo",
                                            step: function (now) {
                                                var getStep = Math.ceil(now);
                                                getStep = getStep.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                $(this).text(getStep);
                                            }
                                        });
                                    }
                                }, getAnimateIdx * 100);
                            }
                        }
                        else {
                            getObj.removeClass("animate");
                        }
                    });
                    
                }, 10);
            }
            $(window).on("scroll resize", function() {
                animateScroll();
            });
            animateScroll();
        }
    }

function mainInit() {
    
	
	
    
}


	//영상팝업시작
	$(function() {
		page.common();
	});
	
	var page = {
		common: function() {
			
			//영상 팝업
			page.video.init();
		},
		video: {
			init: function() {
				var popupMovie = $("#popup_movie .popup_area");
				var popupMovieBox = popupMovie.find(".movie_box");
				
				$("#popup_movie").on("click", function(e) {
					if($(e.target).attr("id") == "popup_movie") {
						btnVideoClose.trigger("click");
					}
				});
				
				$("#btn_video").on("click", function() {
					var getMovie = $(this).attr("href");
					$("#popup_movie").fadeIn(300);
					setTimeout(function() {
						popupMovieBox.html('<iframe src="https://www.youtube.com/embed/' + getMovie + '?rel=0&autoplay=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');
					}, 10);
					return false;
				});
				
				var btnVideoClose = $("#popup_movie .btn_close").on("click", function() {
					$("#popup_movie").fadeOut(300, function() {
						popupMovieBox.empty();
					});
					return false;
				});
				
				function movieResize() {
					var getWidth = $(window).width() - 40;
					if(getWidth > 1024) getWidth = 1024;
					var getHeight = getWidth * 0.5625;
					popupMovie.css({ width:getWidth, height:getHeight, marginTop:-(getHeight / 2), marginLeft:-(getWidth / 2) });
					popupMovieBox.css({ width:getWidth, height:getHeight });
				}
				$(window).on("resize", function() {
					movieResize();
				});
				movieResize();
			}
		}
	}

    //쿠키
$(function(){
    //최초 쿠키에 cookie_privacy라는 쿠키값이 존재하면
    var cookie_privacy = $.cookie('cookie_privacy');
    if(cookie_privacy != undefined) {
        //쿠키값을 담는다
        $(".btn_learn").val(cookie_privacy);
        $("body").addClass("cookies_close");	
       
    }
     
    //cookie_button 클릭시
    $(".btn_learn22").click(function(){
        //cookie_close 있으면 쿠키저장
        $("body").addClass("cookies_close");	
        $("body").addClass("open_privacy");	
        $("body").addClass("open_fullpopup");	
       
        if($("body").hasClass("cookies_close")) {
       
                $.cookie('cookie_privacy', $(".btn_learn").val());
                
            //미체크면 쿠키에 정보가 있던간에 삭제
            } else {
                $.removeCookie("cookie_privacy");
            }
            
    })

    $(".btn_cookies_close").click(function(){
        //cookie_close 있으면 쿠키저장
        $("body").addClass("cookies_close");	
       
       
       
        if($("body").hasClass("cookies_close")) {
       
                $.cookie('cookie_privacy', $(".btn_cookies_close").val());
                
            //미체크면 쿠키에 정보가 있던간에 삭제
            } else {
                $.removeCookie("cookie_privacy");
            }
            
    })


    
})