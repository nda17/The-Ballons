document.querySelector('.nav').onclick = function() {
  document.querySelector('.nav').classList.toggle('active');
  document.querySelector('.nav-main').classList.toggle('active');
  document.querySelector('.nav-main-list').classList.toggle('active');
};
