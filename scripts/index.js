const topButton = document.querySelector('.scroll-top');
  
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

topButton.addEventListener('click', scrollToTop);
