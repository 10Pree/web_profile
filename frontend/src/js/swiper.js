// import Swiper 
import Swiper from 'swiper/bundle';

// import CSS
import 'swiper/css/bundle';

// เริ่มต้นใช้งาน Swiper
var swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
