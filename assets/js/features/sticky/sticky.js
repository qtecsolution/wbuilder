// STICKY HEADER ON SCROLL
const header = document.querySelector('.header');
const headerTop = header.offsetTop;

function stickyNavigation() { 
  if (window.scrollY >= headerTop) {
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
}

window.addEventListener('scroll', stickyNavigation);