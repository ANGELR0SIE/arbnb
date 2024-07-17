window.onscroll = function() {
    toggleElementsOnScroll();
  };
  
  function toggleElementsOnScroll() {
    const categories = document.querySelector('.category-flex');
    const searchBar = document.querySelector('.search-bar-hidden');
    const navBar = document.querySelector('.nav-bar-743px');
    const staysInsideNav = document.getElementById('stays-inside-nav');
    // const spacer = document.querySelector('.flex-spacer-nav-bar-743px');
  
    if (categories && searchBar && navBar && staysInsideNav) {
      if (window.scrollY >= navBar.offsetTop) {
        navBar.classList.add('fixed');
        if (window.scrollY >= categories.offsetTop - navBar.offsetHeight) {
          searchBar.style.display = 'flex';
          staysInsideNav.style.display = 'none';
          // spacer.style.display = 'none';
          categories.style.position = 'sticky';
          categories.style.top = '0';
         
        } else {
          searchBar.style.display = 'none';
          staysInsideNav.style.display = 'flex';
          
        }
      } 
      else {
        navBar.classList.remove('fixed');
        searchBar.style.display = 'none';
        staysInsideNav.style.display = 'block';
      }
    }
  }
  