
function handleScroll() {
  const header = document.querySelector('header');
  const nav = document.querySelector('header nav');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
      header.classList.add('scrolled');
      nav.classList.add('scrolled');
      header.style.backgroundColor = '#660033'; 
      nav.style.backgroundColor = '#660033'; 
  } else {
      header.classList.remove('scrolled');
      nav.classList.remove('scrolled');
      header.style.backgroundColor = '#330066'; 
      nav.style.backgroundColor = '#330066'; 
  }
}

window.addEventListener('scroll', handleScroll);
