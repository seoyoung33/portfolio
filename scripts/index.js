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