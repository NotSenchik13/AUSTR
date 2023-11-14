const swiper = new Swiper('.swiper', {

    //Бесконечная возможность прокручивать
    loop: true,

    //Стрелки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Чуствительность
    touchRatio: 0.9,

    //Переключение стрелками на клавиатуре
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    //Управление колесом мыши
    mousewheel: {
        //Чуствительность
        sensitivity: 0.9,
        //Класс, где можно будет прокручивать мышью
        eventsTarget: ".swiper",
    },


    //Кол-во слайдов для показа
    slidesPerView: 3,

    //Размер отступа в пикселях между слайдами
    spaceBetween: 61,

    //Кол-во пролистываемых слайдов
    slidesPerGroup: 1,

    // //Автопрокрутка
    // autoplay: {
    //     //Пауза между прокруткой
    //     delay: 500,
    //     //Закончить на ласт слайде
    //     stopOnLastSlide: false,
    //     //Отключить после ручного переключения
    //     disabledOnInteraction: false,
    // },

    //Скорость прокрутки
    speed: 550,


    //Адаптив
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },

    
});



