
$(function () {




    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    // mian_visual 이전 다음 버튼
    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })
    $('.main_visual .arrows .next').on('click', function () {
        $('.main_slide').slick('slickNext')
    });



    // 2 main_about
    $('.about_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.main_about .arrows .left').on('click', function () {
        $('.about_slide').slick('slickPrev');
    });
    $('.main_about .arrows .right').on('click', function () {
        $('.about_slide').slick('slickNext');
    });



    // 헤더 배경색
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

    })

    //up
    $(function () {
        $('.to_top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500)
        });
    });

    // 비쥬얼에 가면 사라짐
    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 저장
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 300) {
            // 스크롤 내린만큼 오면 나타나기
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });



});

