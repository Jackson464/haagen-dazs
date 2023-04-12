//header-bottom fixed
let headerHeight = $('header').outerHeight();
$(window).on('scroll',function(){
    if($(window).scrollTop()>='35'){
        $('.header-bottom').addClass('fixed');
        $('.mb-bt').addClass('hide');
    }else{
        $('.header-bottom').removeClass('fixed');
        $('.mb-bt').removeClass('hide');
    }
});

//sub-menu height
const header = document.querySelector('.header-bottom'),
      nav = document.querySelector('.menu')
// nav에 마우스 올리면 header 높이가 300, 마우스 내리면 50으로 변경

nav.addEventListener('mouseover',function(){
    header.style.height = '230px'
})
nav.addEventListener('mouseout',function(){
    header.style.height = '39px'
})
// console.log(outerWidth)

//swiper slide
$(document).ready(function(){
    // visual banner
    var swiper = new Swiper(".main-swiper", {
        cssMode: true,
        loop: true,
        speed: 5000,
        autoplay: {
            // delay: 35000000,
            disableOnInteraction: false,
        },
        // pagination: '.swiper-pagination',
        // paginationClickable: true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable : true,
        },
        mousewheel: true,
        keyboard: true,
      });

      let sw_banner = new Swiper(".sw-banner", {
        slidesPerView: 2,
        // direction: 'horizontal',
        spaceBetween: 30,
        autoplay: {
            disableOnInteraction: false,
        },
        loopAdditionalSlides: 1,
        loop: true,
        observer: true,
        observeParents: true,
        speed: 1500,
        breakpoints: {
            1200: { slidesPerView: 6, },
            882: { slidesPerView: 4,},
            660: { slidesPerView: 3,},
            480: { slidesPerView: 2,},
            320: { slidesPerView: 1,}
        }
      });

      let mb_slide = new Swiper(".mb-ice-contents", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        loopAdditionalSlides: 1,
        observer: true,
        observeParents: true,
        breakpoints: {
            1040: {slidesPerView: 3,},
            920: {slidesPerView: 3,},
            660: {slidesPerView: 2,}
        }
      })
})

// hover price
// new
const new_box = $('.new')
const icon_wrap_01 = $('.new .icon-wrap')

new_box.mouseenter(function(){
    icon_wrap_01.addClass('visible')
})

new_box.mouseleave(function(){
    icon_wrap_01.removeClass('visible')
})

// best
// best01
const best_box1 = $('.best01')
const icon_wrap_02 = $('.best01 .icon-wrap')

best_box1.mouseenter(function(){
    icon_wrap_02.addClass('visible')
})

best_box1.mouseleave(function(){
    icon_wrap_02.removeClass('visible')
})
// best02
const best_box2 = $('.best02')
const icon_wrap_03 = $('.best02 .icon-wrap')

best_box2.mouseenter(function(){
    icon_wrap_03.addClass('visible')
})

best_box2.mouseleave(function(){
    icon_wrap_03.removeClass('visible')
})

//hover contents right
$(document).ready(function(){
    $(".hover").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
      );
})

$(document).ready(function(){
    //Mobile menu
    //.mb-bt를 저장해서 활용하자
    $('.mb-bt').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('mb-bt-open')
        $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
        $('.mb-nav').toggleClass('mb-nav-open')
        $('.mb-menu>li').height(48)
    })
    //화면사이즈 체크
    $(window).resize(function () {
        let temp = $(window).width();
        // console.log(temp);
        if (temp > 1220) {
            $('.mb-bt').removeClass('mb-bt-open')
            $('.mb-menu-mask').removeClass('mb-menu-mask-active')
            $('.mb-nav').removeClass('mb-nav-open')
        } else {
            $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
            $('.all-menu-mask').removeClass('all-menu-mask-active')
        }
    })
    //모바일 메뉴 펼치기 기능
    //1. 모바일 메뉴 불러오기
    const mb_mainmenu = $('.mb-mainmenu')
    //2. 모바일 서브메뉴 불러오기
    const mb_submenu = $('.mb-submenu')
    //3. 펼쳐진 서브메뉴의 높이값
    let mb_submenu_height = [];
    //4. 높이값 계산을 실행
    // 배열명.foreach(function(item, index){할일})
    // $.each(배열명, function(index, item){할일})
    $.each(mb_submenu, function(index){
        // 각각의 .mb-submenu로 가서
        // il의 갯수를 샌다
        let count = $(this).find('li').length;
        // console.log(count)
        // 최종결과저장 (51px * count + 22)
        mb_submenu_height[index] = 48 * count + 22;
    })
    // console.log(mb_submenu_height)
    let mb_li = $('.mb-menu > li')
    $.each(mb_mainmenu,function(index){
        $(this).click(function(e){
            e.preventDefault();
            // mb-mainmenu-open이 있으면 펼치고 없으면 닫기
            $(this).toggleClass('mb-mainmenu-open')
            $(this).parent().siblings().children().removeClass('mb-mainmenu-open')
            let active = $(this).hasClass('mb-mainmenu-open')
            if(active){
                ($(this).children('.mb-submenu').is(':hidden'))
                // 해당되는(클릭된) li > a(depth1)의 ul의 높이값을 temp에 저장
                let temp = mb_submenu_height[index]
                // 해당요소의 높이 부여
                mb_li.eq(index).height(temp + 48);
                mb_li.eq(index).siblings().height(48);
            }else{
                // 클릭이 안된 경우
                mb_li.eq(index).height(48)
            }
        })
    })
    // mb_li.click(function(){
    //     $(this).siblings().height(54)
    // })
    // mobile menu 배경 클릭 시 사라짐
    const mb_menu_mask = $('.mb-menu-mask')
    mb_menu_mask.click(function(){
        //모바일 버튼 기능 초기화
        $('.mb-bt').removeClass('mb-bt-open')
        $('.mb-menu-mask').removeClass('mb-menu-mask-active')
        $('.mb-nav').removeClass('mb-nav-open')
        $('.mb-menu>li').height(54)
        $('.mb-mb-mainmenu').removeClass('mb-mainmenu-open')
    })
})