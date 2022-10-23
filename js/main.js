$(document).ready(function () {
   $('.owl-carousel').owlCarousel({
      responsive: {
         // breakpoint from 0 up
         loop: true,
         0: {
            items: 2,
            margin: 32,
            loop: true,
            dots: false,
         },
         // breakpoint from 480 up
         601: {
            items: 3,
            margin: 32,
            loop: true,
            dots: false,
         },
         // breakpoint from 768 up
         1001: {
            items: 3,
            margin: 48,
            loop: true,
            dots: false,
         },
      },
   });
});


/*video*/
const videoBtn = document.querySelector('#video-btn');         /*в этом блоке находим нужные эллементы (Кнопку, картинку-превью, враппер, само видео)*/
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');


/*слушаем клик по врапперу , если видео не играло изначально F1, то мы убираем превью F2,убираем оверлэй F3, убираем кнопку с картинки F4, включаем видео F5, если видео уже играло то мы его останавливаем F6, добавляем оверлей F7, добавляем кнопку F8.*/
videoWrapper.addEventListener('click', function () {
   if (video.paused) {/*F1*/
      videoPicture.classList.add('none');/*F2*/
      videoWrapper.classList.remove('video-overlay');/*F3*/
      videoBtn.classList.add('none');/*F4*/
      video.play();/*F5*/
   } else {
      videoWrapper.classList.add('video-overlay');/*F6*/  /* Оверлей это полупрозрачный слой затемнения при постановке видео на паузу */
      videoBtn.classList.remove('none');/*F7*/
      video.pause();/*F8*/
   }

})
