$(() => {
    new Swiper('.main-slider', {
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
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
    let isOpen  = false;
    $(document).on('click',function(){
        if(isOpen) {
            console.log("Delete");
            $('.dropdown-menu--sub').removeClass('active');
            $('.dropdown-menu').removeClass('active');
        }
    });

    $('.dropdown-toggle').hover(function () {
        isOpen = true;

        $('.dropdown-menu--sub').removeClass('active');
        $(this).siblings('.dropdown-menu').addClass('active');

        setTimeout(() => {
            isOpen  = false;
            $(this).siblings('.dropdown-menu').removeClass('active');
        }, 5000)
    });
});

$(()=>{
    $('.nav-open-button').on('click',function(){
        $('.nav').addClass('active');
    });

    $('.nav-close-button').on('click',function(){
        $('.nav').removeClass('active');
    });

});

