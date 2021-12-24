$('.menu-btn').on('click', function(){
    $(this).toggleClass('active');
    $('.header__top__menu-list').toggleClass('active');
    $('.header__top__buttons').toggleClass('active');

});
$(function(){
    $('.team__slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

        $('.team__slider').on('resize', function () {
            let maxH = 0;
            $('.team__slider__item').each(function(){
                $(this).css('height','auto');
                if ( $(this).height() > maxH ) {
                    maxH = $(this).height();
                }
            });
            $('.team__slider__item').height(maxH);
        }).resize();


    $('.price__slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });

    $('.reviews__slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__arrow slider__arrow-prev"> </button>',
        nextArrow: '<button class="slider__arrow slider__arrow-next"> </button>',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
        ]
    });

    $('.switch-btn').click(function(e){

        let $priceYear = $(this)
            .parents('.price__slider__item-price')
            .find('.price__period');
        let $period = $(this)
            .parents('.price__slider__item-price')
            .find('.period');

        if ($(this).hasClass('switch-on')) {
            console.log('1');
            //year to month
            let priceString = $priceYear.text();
            let price = priceString.slice(1);
            let priceNumber = parseInt(price);
            let priceMonth = Math.round(priceNumber/12);
            $priceYear.html('$' + priceMonth);
            $priceYear.attr('data-year', priceString);

            $period.html('Per Month');

        } else {
            console.log('2');
            //month to year
            let dataYear = $priceYear.attr('data-year');
            $priceYear.html(dataYear);

            $period.html('Per Year');
        }

        $(this).toggleClass('switch-on');
    });
});
$('#scrollTop__btn').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#scrollTop__btn').fadeIn();
    }else{
        $('#scrollTop__btn').fadeOut();
    }
});

/* Scroll event handler */
$(window).bind('scroll',function(e){
    parallaxScroll();

});
/* Scroll the background layers */
function parallaxScroll(){
    let scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
    $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');

}
