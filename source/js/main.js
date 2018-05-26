$(() => {
    new Swiper('.main-slider', {
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});

$(() => {
    let inputVisibility = false;
    $('.search-form__button').on('click', (e) => {
        if (!inputVisibility) {
            inputVisibility = true;
            e.preventDefault();
            $('.search-form__input').toggleClass('active');
        } else {
            inputVisibility = false;
        }
    });
});

$(() => {
    $('.dropdown-toggle').hover(function () {
        $(this).siblings('.dropdown-menu').addClass('active');
    });

});
