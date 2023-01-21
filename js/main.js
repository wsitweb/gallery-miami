const sliderMain = new Swiper('.slider_main', {
    freeMode: false,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        },
    },
});
const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
});
sliderMain.controller.control = sliderBg;
let itemOld;
document.querySelectorAll('.slider_main .slider__item').forEach(item => {
    item.addEventListener('click', event => {
            if(itemOld){
                if(itemOld != item){
                    itemOld.classList.remove('opened');
                    item.classList.add('opened');
                    itemOld = item;
                }else if(itemOld = item){
                    item.classList.toggle('opened');
                    itemOld = item;
                }
            }else if(itemOld == undefined){
                item.classList.toggle('opened');
                itemOld = item;
            };
    });
});

let desc = document.querySelector('.description');
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
});