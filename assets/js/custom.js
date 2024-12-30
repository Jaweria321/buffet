// recipes owl carousel
$('#owl-carousel-recipes').owlCarousel({
    margin:50,
    responsiveClass:true,
    navText: ["<img src='assets/images/arrow-left.png'>","<img src='assets/images/arrow-right.png'>"],
    nav: true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        1024:{
            items:3,
            nav:true
        }
    }
});
// testimonials owl carousel
$('#owl-carousel-testimonial').owlCarousel({
    margin:10,
    responsiveClass:true,
    navText: ["<img src='assets/images/arrow-left.png'>","<img src='assets/images/arrow-right.png'>"],
    nav: true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
});
// brands owl carousel
$('#owl-carousel-brands').owlCarousel({
    margin:10,
    responsiveClass:true,
    navText: ["<img src='assets/images/arrow-left.png'>","<img src='assets/images/arrow-right.png'>"],
    nav: false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:3
        },
        1400:{
            items:6
        }
    }
});
// reservation form select 2 dropdown
$('.occasion-dropdown').select2();
// sticky header 
$(document).ready(function(){
    let height = $(window).scrollTop();
    stickyHeaderClass(height);  
});
$(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    stickyHeaderClass(scroll);
});
function stickyHeaderClass(scrollPosition) {
    if (scrollPosition >= 100) {
        $('.main-header').addClass('sticky');
    } else {
        $('.main-header').removeClass('sticky');
    }
}
new WOW().init();