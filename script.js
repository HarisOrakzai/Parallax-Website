// For Video Parallax
$(document).ready(function () {
    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.5) + 'px, 0)'); // parallax (25% scroll rate)
    });  
});




// makes the parallax elements
function parallaxIt() {

  // create variables
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // on window scroll event
  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }); 

  // for each of image background parallax element
  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = ($backgroundObj.data('speed') || 0 );

    $fwindow.on('scroll resize', function() {
      yPos = - ((scrollTop - bgOffset) / speed); 
      coords = '0% '+ yPos + 'px';

      $backgroundObj.css({ backgroundPosition: coords });
    }); 
  }); 

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
};

parallaxIt();




// Auto Scroll
$(document).ready(function() {
  var delay = false;
  var currentPage = 1;
  var pageCount = $(".section").length;
  var swipe = document.getElementsByTagName('.section');

  $(document).on('mousewheel DOMMouseScroll', function(event) {
        event.preventDefault();
        if (delay) return;
        delay = true;
        setTimeout(function() { delay = false }, 100)

        var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
        console.log(wd);

        if (wd < 0) {
            if (currentPage < pageCount) {
                currentPage++;
            }
        } else {
            if (1 < currentPage) {
                currentPage--;
            }
        }
    
        $('html,body').animate({
            scrollTop: $('#section' + currentPage).offset().top
        }, 100);
    });
});  


AOS.init({
  offset: 300,
  // duration: 1500,
});





// $(document).ready(function(){
//   var $window = $(window);
//     $('section[data-type="background"]').each(function(){
//         var $bgobj = $(this); // assigning the object
    
//         $(window).scroll(function() {
//             var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
//             console.log($window.scrollTop())
//             // Put together our final background position
//             var coords = '10% ' + yPos + 'px';

//             // Move the background
//             $bgobj.css({ backgroundPosition: coords });
//         }); 
//     });    
// });


// (function($) {
//   "use strict";
//   $.fn.sliderResponsive = function(settings) {
    
//     var set = $.extend( 
//       {
//         slidePause: 5000,
//         fadeSpeed: 800,
//         autoPlay: "on",
//         showArrows: "off", 
//         hideDots: "off", 
//         hoverZoom: "on",
//         titleBarTop: "off"
//       },
//       settings
//     ); 
    
//     var $slider = $(this);
//     var size = $slider.find("> div").length; //number of slides
//     var position = 0; // current position of carousal
//     var sliderIntervalID; // used to clear autoplay
      
//     // Add a Dot for each slide
//     $slider.append("<ul></ul>");
//     $slider.find("> div").each(function(){
//       $slider.find("> ul").append('<li></li>');
//     });
      
//     // Put .show on the first Slide
//     $slider.find("div:first-of-type").addClass("show");
      
//     // Put .showLi on the first dot
//     $slider.find("li:first-of-type").addClass("showli")

//      //fadeout all items except .show
//     $slider.find("> div").not(".show").fadeOut();
    
//     // If Autoplay is set to 'on' than start it
//     if (set.autoPlay === "on") {
//         startSlider(); 
//     } 
    
//     // If hideDots is set to 'on' then hide them
//     if (set.hideDots === "on") {
//         $slider.addClass('hideDots'); 
//     }
    
//     // If hoverZoom is set to 'off' then stop it
//     if (set.hoverZoom === "off") {
//         $slider.addClass('hoverZoomOff'); 
//     }
    
//     // function to start auto play
//     function startSlider() {
//       sliderIntervalID = setInterval(function() {
//         nextSlide();
//       }, set.slidePause);
//     }
    
//     // on mouseover stop the autoplay
//     $slider.mouseover(function() {
//       if (set.autoPlay === "on") {
//         clearInterval(sliderIntervalID);
//       }
//     });
      
//     // on mouseout starts the autoplay
//     $slider.mouseout(function() {
//       if (set.autoPlay === "on") {
//         startSlider();
//       }
//     });  

//     //when user clicks slider button
//     $slider.find(" > ul > li").click(function() {
//       position = $(this).index();
//       changeCarousel($(this).index());
//     });

//     //this changes the image and button selection
//     function changeCarousel() {
//       $slider.find(".show").removeClass("show").fadeOut();
//       $slider
//         .find("> div")
//         .eq(position)
//         .fadeIn(set.fadeSpeed)
//         .addClass("show");
//       // The Dots
//       $slider.find("> ul").find(".showli").removeClass("showli");
//       $slider.find("> ul > li").eq(position).addClass("showli");
//     }

//     return $slider;
//   };
// })(jQuery);


 
// //////////////////////////////////////////////
// // Activate each slider - change options
// //////////////////////////////////////////////
// $(document).ready(function() {
  
//   $("#slider1").sliderResponsive({
//   // Using default everything
//     // slidePause: 5000,
//     // fadeSpeed: 800,
//     // autoPlay: "on",
//     // showArrows: "off", 
//     // hideDots: "off", 
//     // hoverZoom: "on", 
//     // titleBarTop: "off"
//   });
 
// });



// const parallax1 = document.getElementById ("section1");

// window.addEventListener("scroll" , function ()
// {
// 	let offset1 = window.pageYOffset;
// 	console.log(offset1);
// 	parallax1.style.backgroundPositionY = offset1 * 0.7 + "px";
// })

// const parallax2 = document.getElementById ("section2");

// window.addEventListener("scroll" , function ()
// {
// 	let offset2 = 1000
// 	parallax2.style.backgroundPositionY = offset2 * 0.7 + "px";
// })

// const parallax3 = document.getElementById ("section3");

// window.addEventListener("scroll" , function ()
// {
// 	let offset3 = window.pageYOffset
// 	parallax3.style.backgroundPositionY = offset3 * 0.7 + "px";
// })


    
// $(document).ready(function() {

// 	var timeStart = 0;

// 	function wheely(e) {
// 		var y = e.originalEvent.deltaY;
// 		var timeStop = new Date().getTime();
// 		var timeDiff = timeStop - timeStart;
// 		if (timeDiff > 200) {
// 			if (y > 0) {
// 				nextSlide();
// 			}
// 			if (y < 0) {
// 				prevSlide();
// 			}
// 		}
// 		timeStart = timeStop;
// 	}

// 	function prevSlide() {
// 		if ($('.active').is(':first-child')) {
// 			if (!$('.slider').hasClass('dragging')) {
// 				$('.slide:first-child').addClass('bounce');
// 				setTimeout(function() {
// 					$('.slide:first-child').removeClass('bounce');
// 				}, 300);
// 			}
// 		} else {
// 			$('.active').removeClass('active').addClass('queue').prev().removeClass('prev').addClass('active');
// 		}
// 	}

// 	function nextSlide() {
// 		if ($('.active').is(':last-child')) {
// 			if (!$('.slider').hasClass('dragging')) {
// 				$('.slide:last-child').addClass('bounce');
// 				setTimeout(function() {
// 					$('.slide:last-child').removeClass('bounce');
// 				}, 300);
// 			}
// 		} else {
// 			$('.active').removeClass('active').addClass('prev').next().removeClass('queue').addClass('active');
// 		}
// 	}

// 	function hotkeys(e) {
// 		if (e.keyCode == 38) {
// 			prevSlide();
// 		}

// 		if (e.keyCode == 40) {
// 			e.preventDefault();
// 			nextSlide();
// 		}
// 	}

// 	function dragStart(e) {
// 		e.preventDefault();
// 		if (e.type == 'touchstart') {
// 			$(document).off('mousedown', dragStart);
// 			startPoint = e.originalEvent.touches[0].pageY;
// 		} else {
// 			startPoint = e.pageY;
// 		}
// 		dragDist = 0;
// 		$(document).on('touchmove mousemove', dragMove);
// 	}

// 	function dragMove(e) {
// 		if (e.type == 'touchmove') {
// 			var movePoint = e.originalEvent.touches[0].pageY;
// 		} else {
// 			var movePoint = e.pageY;
// 		}
		
// 		dragDist = (movePoint - startPoint) / $('.slider').height() * 100;

// 		$('.slider').addClass('dragging');

// 		$('.slide, .bg').css({
// 			transition: '0ms'
// 		});

// 		if (dragDist < 0) {
// 			$('.active .bg').css({
// 				opacity: 1 + (dragDist / 200)
// 			});
// 			$('.active').css({
// 				transform: 'translate3d(0,' + (dragDist / 2) + '%,0)'
// 			}).next().css({
// 				transform: 'translate3d(0,' + (100 + dragDist) + '%,0)'
// 			});
// 		}

// 		if (dragDist > 0) {
// 			$('.active').css({
// 				transform: 'translate3d(0,' + dragDist + '%,0)'
// 			}).prev().css({
// 				animation: 'none',
// 				transform: 'translate3d(0,' + (-50 + dragDist / 2) + '%,0)'
// 			}).find('.bg').css({
// 				opacity: 0.5 + (dragDist / 200)
// 			});
// 		}
// 	}

// 	function dragEnd() {
// 		$(document).off('touchmove mousemove', dragMove);
// 		$('.slide, .bg').removeAttr('style');
// 		if (dragDist > 20) {
// 			prevSlide();
// 		}
// 		if (dragDist < -20) {
// 			nextSlide();
// 		}

// 		setTimeout(function() {
// 			$('.slider').removeClass('dragging');
// 		}, 800);
// 	}

// 	$(document).on('wheel', wheely);
// 	$(document).on('keydown', hotkeys);
// 	$(document).on('touchstart mousedown', dragStart);
// 	$(document).on('touchend mouseup', dragEnd);

// }); 