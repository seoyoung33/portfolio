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

const etc_design = new Swiper('#etc_design_swiper',{
    slidesPerView:3,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:8000,
    loop:true,
});