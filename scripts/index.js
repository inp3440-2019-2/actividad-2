const topButton = document.querySelector('.scroll-top');
const clapButtons = document.querySelectorAll('.clap-button');
  
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function addClap(event) {
  event.preventDefault();
  const clapElem = event.currentTarget.querySelector('span');
  const clapCount = Number(clapElem.textContent);
  clapElem.textContent = clapCount + 1;
}

topButton.addEventListener('click', scrollToTop);

clapButtons.forEach(function(clapButton) {
  clapButton.addEventListener('click', addClap);
});
