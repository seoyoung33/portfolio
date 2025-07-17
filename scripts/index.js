const profile = document.querySelector('#profile .container');
const header = document.querySelector('header');
const underlineTargets = ['profile', 'ability','web_design','etc_design']; //밑줄 타겟들
const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
    on:{
        slideChange:function(){
            const activeSlide = this.slides[this.activeIndex];
            console.log(activeSlide);
            if(underlineTargets.includes(activeSlide.id)){
                // console.log('확인');
                header.style.backgroundImage = 'linear-gradient(to right, #407DB4, #F3A4C4)';
                header.style.backgroundSize = '100% 1px'; // 너비,높이
                header.style.backgroundRepeat = 'no-repeat';
                header.style.backgroundPosition = '0 100%'; // 밑줄 위치;
            }else{
                header.style.backgroundImage = 'none';
            }
        }
    }
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

//수직 스와이프 이동 함수
//수직스와이프변수명.slideTop(이동인덱스값, 지속시간)
const navA = document.querySelectorAll('nav a');
navA.forEach((obj, idx)=>{
    console.log(obj, idx);
    obj.addEventListener('click',(e)=>{
        e.preventDefault();//a의 href기본기능 막기
        wrap.slideTo(idx, 1000);
    })
})

/* 팝업 */
const projectAll = document.querySelectorAll('#etc_design .container .swiper-slide');
const popup = document.querySelector('.popup_bg');
console.log(projectAll, popup);

for(let project of projectAll) {
    project.addEventListener('click',()=>{
        popup.style.display='block';
        popup.children[0].children[0].src = project.children[0].src;
        //팝업 실행 시 전체 수직 swiper 스크롤 기능 막기
        wrap.mousewheel.disable();
    })
}

popup.addEventListener('click',()=>{
    popup.style.display='none';
    wrap.mousewheel.enable();
})