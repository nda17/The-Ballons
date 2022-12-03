// $(document).ready(function () {
//     $('.nav').click(function (event) {
//         $('.nav, .nav-main, .nav-main-list').toggleClass('active');
//     });
// });



document.querySelector('.nav').onclick = function() {
  document.querySelector('.menu-mobile').classList.toggle('active');
//   document.querySelector('.nav-main').classList.toggle('active');
//   document.querySelector('.nav-main-list').classList.toggle('active');
};

