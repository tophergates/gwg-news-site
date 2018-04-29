(function(window) {
  /*
   * Open the drawer when the menu is clicked.
  */
  var menu = document.querySelector('#menu');
  var main = document.querySelector('main');
  var drawer = document.querySelector('.nav');
  
  menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });
  main.addEventListener('click', function() {
    drawer.classList.remove('open');
  });
  
  /*
   * Add a "back to top" button
  */
  var toTop = document.querySelector('.to-top');

  window.addEventListener('scroll', function(e) {
    if (window.pageYOffset >= 100) {
      if(!toTop.classList.contains('show')) {
        toTop.classList.add('show');
      }
  
      console.log(document.body.offsetHeight);
      // Check if we are at the bottom of the page
      if ((window.innerHeight + window.pageYOffset) >= (document.body.scrollHeight - 75)) {
        toTop.style.bottom = '9.5rem';
      } else {
        toTop.style.bottom = '1rem';
      }
    } else {
      toTop.classList.remove('show');
    }
  });
  
  toTop.addEventListener('click', function(e) {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  });
}(window = window || {}, null));
