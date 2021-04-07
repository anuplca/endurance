
	//Banner Slider 
    $(document).ready(function(){
        $('.slider').owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            margin: 0,
            autoplay:true,
            autoplayTimeout:2000,
            smartSpeed:800,
        });
    });

	//SlideBox
    $(document).ready(function(){
        $('.slideBox').owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            autoplay:true,
            autoplayTimeout:5000,
            smartSpeed:800,
            responsive:{
                    0:{
                        items:1

                    },
                    430:{
                        items:2
                    },
                    767:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                }
        });
    });

	//testimonies_slide
    $(document).ready(function(){
        $('.testimonies_slide').owlCarousel({
            loop: true,
            nav: false,
            margin: 50,
            autoplay:true,
            autoplayTimeout:5000,
            smartSpeed:800,
            responsive:{
                0:{
                    items:1

                },
                425:{
                    items:2
                },
                768:{
                    items:3
                }
            }
        });
    });

	//count
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

/* Bottom to top button */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 2000) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

/* Onscroll */
window.onscroll = function() {
    myFunction()
};
var header = document.getElementById("mobileMenu");
var sticky = header.offsetTop;
console.log(sticky);
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

/* toggle */
function toggle(){
	var mobileMenu = document.getElementById("mobileMenu")
	mobileMenu.classList.toggle('active')
}
