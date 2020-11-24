$(document).ready(function () {
    var parallaxSliderOptions = {
        speed: 1000,
        effect: 'coverflow',
        autoplay: false,
        parallax: true,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 30,
            depth: 10,
            stretch: 0,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: '.image-slider .next-ctrl',
            prevEl: '.image-slider .prev-ctrl',
        },
        on: {
            init: function () {
                let swiper = this;
                for (let index = 0; index < swiper.slides.length; index++) {
                    $(swiper.slides[index])
                        .find('.img-container')
                        .attr({ 'data-swiper-parallax': 0.75 * swiper.width });
                }
                let index = swiper.activeIndex;
                $(swiper.slides).removeClass('active');
                $(swiper.slides[index]).addClass('active');
            },
            transitionEnd: function () {
                let swiper = this;
                let index = swiper.activeIndex;
                $(swiper.slides).removeClass('active');
                $(swiper.slides[index]).addClass('active');
            },
            resize: function () {
                this.update();
            },
        },
    };
    var slider = new Swiper('.image-slider', parallaxSliderOptions);
});
