const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
})

/* ability 슬라이드 */
const ability = new Swiper('#ability_swiper',{
    scrollbar:{el:'#ability_swiper~.swiper-scrollbar'},
    navigation:{
        nextEl:'#ability_swiper~.swiper-button-next',
        prevEl:'#ability_swiper~.swiper-button-prev',
    }
})

/* 프로젝트 슬라이드 */
const project1 = new Swiper('#web_design_swiper',{
    scrollbar:{el:'#web_design_swiper~.swiper-scrollbar'},
    navigation:{
        nextEl:'#web_design_swiper~.swiper-button-next',
        prevEl:'#web_design_swiper~.swiper-button-prev',
    }
})

/* 배너디자인 스와이퍼 */
const banner_design = new Swiper('#banner_swiper',{
    slidesPerView:2,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:8000,
    loop:true,
});

/* ect디자인 스와이퍼 */
const etc_design = new Swiper('#etc_design_swiper',{
    slidesPerView:3,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:10000,
    loop:true,
});

/* detail 디자인 스와이퍼 */
const detail_design = new Swiper('#detail_swiper',{
    slidesPerView:1,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:10000,
    loop:true,
    direction:'vertical',
});

const nav = document.querySelectorAll('nav a');
//수직 스와이프 이동 함수
//수직스와이프변수명.slideTop(이동인덱스값, 지속시간)

nav.forEach((obj, idx)=>{
    console.log(obj, idx);
    obj.addEventListener('click',(e)=>{
        e.preventDefault();//a의 href기본기능 막기
        wrap.slideTo(idx, 1000);
    })
})