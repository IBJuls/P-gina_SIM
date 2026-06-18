const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",        
    grabCursor: true,           
    centeredSlides: true,       
    loop: true,                 
    slidesPerView: 1,           
    spaceBetween: 10,           
    
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 3,   
            spaceBetween: 30,
        }
    },

    loopAddBlankSlides: true,
    watchSlidesProgress: true,

    coverflowEffect: {
        rotate: 0,              
        stretch: 0,             
        depth: 160,             
        modifier: 1,            
        slideShadows: false,    
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});