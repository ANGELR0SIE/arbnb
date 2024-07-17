window.onscroll = function() {
    toggleElementsOnScroll();
  };
  
  function toggleElementsOnScroll() {
    const categories = document.querySelector('.categories');
    const searchBar = document.querySelector('.search-bar-hidden');
    const navBar = document.querySelector('.nav-bar-743px');
    const staysInsideNav = document.getElementById('stays-inside-nav');
  
    if (categories && searchBar && navBar && staysInsideNav) {
      if (window.scrollY >= navBar.offsetTop) {
        navBar.classList.add('fixed');
        if (window.scrollY >= categories.offsetTop - navBar.offsetHeight) {
          searchBar.style.display = 'flex';
          staysInsideNav.style.display = 'none';
        } else {
          searchBar.style.display = 'none';
          staysInsideNav.style.display = 'block';
        }
      } else {
        navBar.classList.remove('fixed');
        searchBar.style.display = 'none';
        staysInsideNav.style.display = 'block';
      }
    }
  }
  